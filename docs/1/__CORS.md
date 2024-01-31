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

### CORS정책이 필요한 이유
