---
title: docusaurus 사용하기 - 소개 및 사용법
metaTitle: docusaurus 사용하기
description:
tags: [axios, fetch, 통신, XMLHttpRequests]
---

# Next.js에서 KCB 휴대폰 본인인증 연동 기록

새로운 프로젝트를 시작 하면서 이번에 KCB 연동을 맡게 됐는데, 나중에 내가 또 할 일 생기면 여기 와서 보려고 남기는 중

> ⚠️ 참고: 나는 Next.js에서 백엔드를 직접 쓰지 않고, 다른 프로젝트에 연동된 백엔드는 서버를 사용해 인증 관련 로직(serviceToken 발급 등)을 처리했다. Next.js에서는 주로 클라이언트 + 콜백 처리만 담당함.

---

## 흐름도 먼저 보면 감 잡힐 듯

```
[사용자] - '본인인증' 버튼 클릭
     ↓
[Next.js 클라이언트] - /api/start-certificate 호출
     ↓
[서버(API)] - 백엔드로 serviceToken 발급 요청
     ↓
[Next.js 클라이언트] - form 생성 후 KCB 인증 페이지로 이동 (POST)
     ↓
[KCB] - 사용자에게 인증 절차 제공
     ↓
[KCB] - 인증 성공 시 callback URL로 redirect (svc_tkn 포함)
     ↓
[서버(API)] - svc_tkn으로 인증 결과 조회 → 결과 암호화
     ↓
[서버] - /cert-result 로 redirect (params=... 포함)
     ↓
[Next.js 클라이언트] - params 복호화하여 인증 결과 처리
```

---

## 1. 인증 시작 (serviceToken 요청)

사용자가 '본인인증' 버튼을 누르면, 클라이언트에서는 먼저 Next.js API 라우트(/api/start-certificate)로 요청을 보낸다. 이 API 라우트는 실질적으로는 백엔드 서버에 KCB 인증 시작을 요청하고, 인증 절차에 필요한 serviceToken을 발급받는 역할을 한다.

이때 함께 전달하는 세 가지 URL 파라미터가 중요한데:

- `returnUrl`: KCB 인증이 끝나고 결과를 전달받을 서버의 콜백 주소 (보통 /api/certificate-callback)

- `successUrl`: 인증에 성공했을 때 사용자를 보낼 페이지 경로 (예: /cert-result)

- `failUrl`: 인증 실패 시 이동할 경로 (예: /cert-fail)

```ts
// /pages/api/start-certificate.ts
export default async function handler(req, res) {
  const { successUrl, failUrl } = req.body;

  // 이 부분은 실제로는 백엔드 서버에서 처리함 (내 경우에는)
  const serviceToken = await getKCBServiceToken({
    returnUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/certificate-callback`,
    successUrl,
    failUrl,
  });

  res.status(200).json({ serviceToken });
}
```

---

## 2. 클라이언트에서 KCB 인증 페이지로 이동

API로부터 받은 `serviceToken`은 KCB 인증 페이지에 전달되어야 하는데, KCB는 이를 POST 방식으로만 받는다. 그래서 우리는 자바스크립트로 `<form>`을 동적으로 만들어서, `form.submit()`으로 인증 페이지로 이동시킨다.

이 방식은 보안상 이유로 흔히 사용되며, 인증 요청 시에는 svc_tkn이라는 이름으로 토큰 값을 넘겨주는 게 규칙이다. 실제 인증은 이 페이지에서 이루어지고, 사용자가 정보를 입력하고 본인인증을 완료하면, 설정해둔 `returnUrl`로 다시 리디렉션된다.

```tsx
const startKcb = async () => {
  const res = await fetch("/api/start-certificate", {
    method: "POST",
    body: JSON.stringify({
      successUrl: "https://내도메인.com/success",
      failUrl: "https://내도메인.com/fail",
    }),
  });
  const { serviceToken } = await res.json();

  const form = document.createElement("form");
  form.method = "POST";
  form.action = process.env.NEXT_PUBLIC_KCB_ACTION_URL;

  const input = document.createElement("input");
  input.type = "hidden";
  input.name = "svc_tkn";
  input.value = serviceToken;

  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
};
```

---

## 3. 인증 완료 후 callback 처리 (svc_tkn 기반)

KCB에서 인증이 완료되면 등록된 returnUrl로 사용자를 리디렉션하는데, 이때 쿼리 스트링으로 svc_tkn 값이 같이 전달된다. 이 값은 실제 인증 결과를 조회하는 데 필요한 토큰이다.

우리 서버(API)는 이 svc_tkn을 이용해서 백엔드에 인증 결과를 요청한다. 결과에는 사용자 이름, 생년월일, 휴대폰 번호, DI 값 등이 들어 있다. 이 데이터를 클라이언트로 바로 노출하는 것은 보안상 위험하므로, 우리는 결과를 encrypt() 함수로 암호화한 후 리디렉션 URL에 params로 실어서 보낸다.

클라이언트는 이후 /cert-result 페이지에서 이 암호화된 데이터를 복호화하여 실제 인증 정보를 확인할 수 있다.

```ts
// /pages/api/certificate-callback.ts
import { NextApiRequest, NextApiResponse } from "next";
import { certificationService } from "../../service/certification-service";
import { encrypt } from "@wattplus/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { svc_tkn: serviceToken } = req.query;

  try {
    const result = await certificationService.result(serviceToken as string);
    result.serviceToken = serviceToken as string;
    res.redirect(
      302,
      `${process.env.NEXT_PUBLIC_BASE_URL}${
        result.message ? result.failRedirectUrl : result.successRedirectUrl
      }?params=${encrypt(JSON.stringify(result))}`
    );
  } catch (error) {
    console.log("error :: ", error);
    res.redirect(
      302,
      `${process.env.NEXT_PUBLIC_BASE_URL}/signup?error=${encodeURIComponent(
        error as string
      )}`
    );
  }
}
```

---

## 4. 그리고 흔한 실수 모음 (내가 다 겪음)

### ❌ req.body를 썼는데 query로 들어옴

→ `req.query.svc_tkn` 만 쓰면 됨

### ❌ 인증은 성공했는데 내 서버에서 처리 실패

→ KCB 인증 결과를 조회하는 API 호출을 안 했거나, 복호화 모듈 적용 안 됐거나

---

## 5. 마무리 혼잣말

솔직히 너무 간단한 흐름인데 문서가 구리니까 쓸데없이 어렵게 느껴졌다.

Next.js 기준으로 하면 API Route 덕분에 서버도 만들기 편해서,
한 번 구조 잡아두면 다른 서비스에도 재활용하기 딱 좋다.

나중에 시간 나면 복호화 모듈 적용하는 부분도 따로 정리해둬야지. KCB 연동은 일단 여기까지~ 😮‍💨
