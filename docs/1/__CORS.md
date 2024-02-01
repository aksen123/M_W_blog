---
description: 2024년 1월 30일
title: CORS
tags: [CORS, 교차 출처 리소스 공유]
---

## CORS란 ?

CORS는 교차 출처 리소스 공유(Cross-Origin Resource Sharing)로 추가 HTTP헤더를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처(프로토콜, 도메인, 포트번호)의 리소스에 접근할 수 있는 권한을 부여하도록 브라우저에게 알려주는 체제이다. 웹 애플리케이션은 리소스가 자신의 출처와 다를 때 교차 출처 HTTP요청을 실행한다.

예를 들어 프로토콜, 도메인(호스트), 포트번호 중 하나라도 다를 경우에 출처가 다른 교차 출처(Cross-Origin)라고 판단 된다. 이렇게 되면 브라우저에선 보안 때문에 Cross-ORigin HTTP요청을 제한 한다. 권한을 부여 받기 위한 Cross-Origin 요청은 서버에서 허가를 받아야 하는데, 이것은 HTTP-header를 통해 받을수 있다!

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

## 동일 출처 정책 (Same-Origin Policy,SOP)

동일 추철 정책은 웹 보안을 강화 하기 위한 기본적인 보안 메커니즘 중 하나다. 웹 페이지의 스크립트가 다른 `출처(Origin)`으로 부터 리소스를 로드하는 것을 제한 하는 것으로 SOP의 주요 목적은 악의적인 웹페이지에서 사용자의 개인 정보를 탈취하거나 다른 웹 페이지의 내용을 변경하거나, 쿠키를 탈취하는 등의 공격을 방지 하는것이다.

<br /><br />

### SOP 주요 규칙

- **출처 동일성** : 스크립트가 다른 출처의 리소스에 접근 하려면 해당 출처의 프로토콜, 호스트, 포트가 모두 동일해야함
- **스크립트 실행 제한** : SOP는 `<script>`태그를 통한 스크립트 실행에도 적용된다. 따라서 스크립트 파일을 다른 출처에서 가져오면 실행되지 않는다
- **XMLHttpRequest와 Fetch API 제약** : XMLHttpRequest나 Fetch API를 사용하여 다른 출처의 리소스를 요청할 때, 브라우저는 `CORS(Cross-Origin Resource Sharing)` 규약을 따라야 함
- **쿠키제한** : 쿠키의 전송을 제한한다. 스크립트에서 다른 출처의 서버로 HTTP요청을 보낼 때, 브라우저는 쿠키를 함께 전송하지 않는다
