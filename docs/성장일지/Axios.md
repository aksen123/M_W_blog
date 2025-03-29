---
description: 2025-03-29
tags: [axios, fetch, 통신, XMLHttpRequests]
---

<br /><br />

## Axios란

Axios는 자바스크립트 내장 라이브러리인 `Fetch`와 같이 HTTP통신을 쉽게 처리할 수 있도록 만든 라이브러리로, node.js와 브라우저에서도 사용 가능하다.

<br /><br />

## Axios와 Fetch의 장단점

### Axios

#### 장점

> - 직관적이고 사용하기 쉬운 API를 제공하여 HTTP요청을 만들고 응답을 처리하기 용이함
> - Promise기반 접근 방식을 사용해 비동기 작업을 처리해, 비동기 코드를 간결하게 작성할수 있다
> - 브라우저 및 node.js환경에서 모두 사용 가능함
> - 인터셉터, 자동 데이터 변환, 오류 처리 등 fetch엔 없는 다양한 기능을 제공해 효율적으로 작업을 할 수 있다

#### 단점

> - 별도의 라이브러리를 설치해야함

### Fetch

#### 장점

> - fetch API는 브라우저에 내장되어 있으므로 별도의 라이브러리를 추가로 설치할 필요 없음
> - 표준화된 API로 기본적인 HTTP요청을 처리하기에 적합하다(간결하게 사용가능)

#### 단점

> - 지원하지 않는 브라우저가(오래된 브라우저) 존재 해 호환성 문제가 발생할 수 있음
> - Axios에 비해 제공되는 기능이 적음

## 사용 방법

### 설치하기

    ```js
    npm install axios
    yarn add axios
    ```

### 사용하기

> `GET`, `POST`같은 메소드를 사용할때 Axios에서는 간단하게 `axios.get(url)`,`axios.post(url)` 이런 방식으로 사용 가능하다!
> 또, 예시에서 보다시피 Axios는 자동으로 JSON데이터를 변환 해준다

```js title='Axios 예시'
import axios from "axios";

async function getProducts() {
  const res = await axios.get("https://test.com/api/products/");
  const products = res.data;
  return products;
}

async function createSizeReview(body) {
  const res = await axios.post("https://test.com/api/size-reviews/", body);

  const newSizeReview = res.data;
  return newSizeReview;
}
```

<br />

```js title='Fetch 예시'
async function getProducts() {
  const res = await fetch("https://test.com/api/products/");
  const products = await res.json();
  return products;
}

async function createSizeReview(body) {
  const res = await fetch("https://test.com/api/size-reviews/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
```

### Axios 요청(request) 파라미터 옵션, 기본 문법

#### [Axios 공식페이지에서 확인하자](https://axios-http.com/kr/docs/req_config)

```js
axios({
  url: "https://test/api/cafe/list/today", // 통신할 웹문서
  method: "get", // 통신할 방식
  data: {
    // 인자로 보낼 데이터
    foo: "diary",
  },
});
```

- method: 요청방식 (GET이 기본)
- url : 서버 주소
  - baseURL: 공통으로 사용하는 주소 (ex >> https://test.com/POST 에서 POST가 `url` 앞 주소가 `baseURL`)
- header: 요청 헤더
- data: 요청방식이 GET이 아닐경우 body에 보내는 데이터
- params: URL파라미터 일반 객체나 URLSearchParams객체여야 하며, null,undefined는 URL에 렌더링되지 않는다
- timeout: 요청시간이 초과되기 전의 시간(밀리초)를 지정한다. 요청이 `timeout`보다 오래걸리면 요청은 중단 된다.

### Axios 응답(response) 데이터

axios를 통해 요청을 서버에 보내면 서버에서 처리하고 데이터를 클라이언트에 응답 하게 된다.
이를 .then함수로 받아 객체에 담아진 데이터가 응답 데이터이다.

#### [출처](https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9#axios_%EC%9A%94%EC%B2%ADrequest_%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0_%EC%98%B5%EC%85%98)

```js
axios({
  method: "get", // 통신 방식
  url: "www.naver.com", // 서버
}).then(function (response) {
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
});

response.data: {}, // 서버가 제공한 응답(데이터)

response.status: 200, // `status`는 서버 응답의 HTTP 상태 코드

response.statusText: 'OK',  // `statusText`는 서버 응답으로 부터의 HTTP 상태 메시지

response.headers: {},  // `headers` 서버가 응답 한 헤더는 모든 헤더 이름이 소문자로 제공

response.config: {}, // `config`는 요청에 대해 `axios`에 설정된 구성(config)

response.request: {}
// `request`는 응답을 생성한 요청
// 브라우저: XMLHttpRequest 인스턴스
// Node.js: ClientRequest 인스턴스(리디렉션)

```
