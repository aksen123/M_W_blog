---
description: 2024년 1월 30일
title: CORS
tags: [CORS, 교차 출처 리소스 공유]
---

## CORS(Cross-Origin Resource Sharing)란 ?

브라우저에서는 보안적 이유로 `Cross-Origin(교차출처)` HTTP요청을 제한 한다 그래서 `Cross-Origin` 요청으르 하려면 서버의 동의가 필요한데, 만약 서버의 동의,비동의에 따라 브라우저에선 요청을 허락,거절 한다.

이러한 메커니즘을 `교차 출처 리소스 공유(Cross-Origin Resource Sharing,CORS)`라고 하는데 HTTP-header를 사용하여 가능하다

예를 들어 c출처(프로토콜, 도메인(호스트), 포트번호) 중 하나라도 다를 경우에 출처가 다른 교차 출처(Cross-Origin)라고 판단 된다. 이렇게 되면 브라우저에선 보안 때문에 Cross-ORigin HTTP요청을 제한 한다. 권한을 부여 받기 위한 Cross-Origin 요청은 서버에서 허가를 받아야 하는데, 이것은 HTTP-header를 통해 받을수 있다!

그러니까 프로토콜, 도메인(호스트), 포트번호가 모두 일치하면 Same Origin, 셋중 하나라도 일치하지 않는다면 Cross-Origin이 된다!

**_url 구성요소_**
![url 요소](https://images.velog.io/images/tkclzl97/post/12b1355e-fd8e-4864-a647-3e4278562e0c/image.png)
<br /><br />

### 동일 출처 예시

> Protocol, Host, Port(생략)이 같으며, Path부터 다르므로 동일 출처
>
> > http://example.com/app1/index.html <br /> http://example.com/app2/index.html

### 다른 출처 예시

> Protocol이 다름
>
> > http://example.com/app1 <br /> https://example.com/app2

> Host가 다름
>
> > http://example.com <br /> http://www.example.com <br /> http://myapp.example.com

> 80, 8080으로 포트가 다름
>
> > http://example.com <br /> http://example.com:8080

<br /><br />

## CORS가 필요한 이유

CORS없이 모든 곳에서 데이터를 요청할 수 있게 된다면!! 악의적인 목적으로 만든 사이트에서 원래 사이트를 흉내 낼 수 있게 된다. 이렇게 된다면 기존 사이트와 완전히 동일하게 동작하게 해서 사용자가 로그인을 하도록 만들고, 로그인했던 세션을 탈취해 정보를 추출하거나 다른사람의 정보를 입력하는 등 공격할 수 있는것! 이런 공격을 막울수 있도록 브라우저에서 보호하고 필요한 경우에만 서버와 협의하고 요청할 수 있도록 하기위해서 필요한 것임!

<br /><br />

## 동일 출처 정책 (Same-Origin Policy,SOP)

동일 추철 정책은 웹 보안을 강화 하기 위한 기본적인 보안 메커니즘 중 하나다. 웹 페이지의 스크립트가 다른 `출처(Origin)`으로 부터 리소스를 로드하는 것을 제한 하는 것으로 SOP의 주요 목적은 악의적인 웹페이지에서 사용자의 개인 정보를 탈취하거나 다른 웹 페이지의 내용을 변경하거나, 쿠키를 탈취하는 등의 공격을 방지 하는것이다.

<br /><br />

### SOP 주요 규칙

- **출처 동일성** : 스크립트가 다른 출처의 리소스에 접근 하려면 해당 출처의 프로토콜, 호스트, 포트가 모두 동일해야함
- **스크립트 실행 제한** : SOP는 `<script>`태그를 통한 스크립트 실행에도 적용된다. 따라서 스크립트 파일을 다른 출처에서 가져오면 실행되지 않는다
- **XMLHttpRequest와 Fetch API 제약** : XMLHttpRequest나 Fetch API를 사용하여 다른 출처의 리소스를 요청할 때, 브라우저는 `CORS(Cross-Origin Resource Sharing)` 규약을 따라야 함
- **쿠키제한** : 쿠키의 전송을 제한한다. 스크립트에서 다른 출처의 서버로 HTTP요청을 보낼 때, 브라우저는 쿠키를 함께 전송하지 않는다

<br /><br />

## 동작 방식!

### Simple Request인경우!

> 예비 요청을 생략하고 바로 본 요청을 보낸다

- 서버로 요청한다 ( HTTP method : GET, HEAD, POST 중 하나여야 한다. )
- 서버의 응답이 왔을때 브라우저가 요청한 `origin`과 응답한 `Access-Control-Request-Header`의 값을 비교 후 유효한 요청인지 확인 후 브라우저에서 처리
- 아래를 제외한 헤더를 사용하면 안됨
  - `Accept`, `Accept-Language`, `Content-Language`, `Content-Type`, `DPR`, `Downlink`, `Save-Data`, `Viewport-Width`, `Width`
- `Content-Type`를 사용하는 경우 아래만 허용 된다

  - `application/x-www-form-urlendcoded`
  - ` multipart/form-data`
  - `text/plain`

    <br /><br />

### Preflight Request인 경우

    <br /><br />

## CORS HTTP헤더

- Origin: 브라우저가 현재 요청을 보내는 출처를 나타낸다.
- Access-Control-Allow-Origin: 서버에서 허용하는 출처를 지정한다. 이 헤더를 통해 특정 출처에서의 요청을 허용할 수 있다.
- Access-Control-Allow-Methods: 서버에서 허용하는 HTTP 메서드를 지정한다. 예를 들어, GET, POST 등.
- Access-Control-Allow-Headers: 서버에서 허용하는 HTTP 헤더를 지정한다.
- Access-Control-Allow-Credentials: 브라우저가 쿠키와 같은 인증 정보를 요청에 포함할 수 있는지 여부를 나타냄.
- Access-Control-Expose-Headers: 브라우저가 접근할 수 있는 헤더를 나타냄.
