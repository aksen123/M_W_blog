---
description : 2023년 12월 29일
tags: [RESTful API,REST, RESTful, API]
---


## RESTful API란?????

> 간략하게 설명 하자면 REST한 방식으로 프로그램간 정보 교환 등의 상호작용을 가능하게 하는 것!!!
> 그렇다면 여기서 먼저 알아야 할건 REST란 무엇이고 API가 뭔지를 먼저 알아야 할듯! 

<br /><br />

## REST란?

REST(Representational State Transfer)란 네트워크 상에서 Client와 Server사이의 통신 방식 중 하나로 웹의 장점을 최대한 활용할 수 있는 아키텍쳐 스타일이다.<br />
자원을 이름으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미한다. 즉,
Client는 `URI`를 이용해 자원의 지정하고 해당 자원의 상태(정보)에 대한 조작을 `HTTP 메소드`를 사용해 Server에 요청 한다. <br/> 
__여기서 REST의 원칙을 지키면서 API의 의미를 표현하고. 쉽고,파악하기 쉽게 하는것을 RESTful하다고 한다.__

 ![REST](https://gmlwjd9405.github.io/images/network/rest.png)

## REST의 구성

### 자원(Resource) : URI 

  -  URI : Uniform Resource Identifier의 약자로 우리말로 '통합 자원 식별자'(즉 인터넷상의 리소스 자원 자체를 식별하는 고유한 문자열 시퀀스)
      - Uniform : 리소스를 식별하는 통일된 방식
      - Resource : URI로 식별 가능한 모든 종류의 자원을 지칭(웹 브라우저 파일 및 그 이외 리소스 포함)
      - Identifier : 다른 항목과 구분하기 위해 필요한 정보 

<br />

### 행위(Verb) : HTTP 메소드

  - HTTP 메소드 : 클라이언트와 서버 사이에 이루어지는 `요청(Request)`과 `응답(Response)`데이터를 전송하는 방식이다. 쉽게 말해 서버에 주어진 리소스에 수행하길 원하는 행동, 서버가 수행해야 할 동작을 지정하는 요청을 보내는 방법이다! 
  - 주요 메서드로는 아래 다섯가지가 있는데 이것을 통해 `CRUD (Create, Read, Update, Delete) Operation`을 적용하는 것
      - GET (Read 조회): 리소스 조회
      - POST (Create 생성): 요청데이터 처리 (주로 새로운 데이터 생성에 사용)
      - PUT (Update 수정): 리소스 전체 변경(덮어쓰기),해당 리소스가 없으면 생성
      - PATCH (Update 수정): 리소스 부분 변경
      - DELETE (Delete 삭제): 리소스 삭제 


### 표현(Representations) 
해당 자원(URI)에 대한 CRUD Operation을 적용하는 것을 의미한다.


<br />

## API

> API(application programming interface 애플리케이션 프로그래밍 인터페이스, 응용 프로그램 프로그래밍 인터페이스)는 컴퓨터나 컴퓨터 프로그램 사이의 연결이다. 일종의 소프트웨어 인터페이스이며 다른 종류의 소프트웨어에 서비스를 제공한다. 이러한 연결이나 인터페이스를 빌드하거나 사용하는 방법을 기술하는 문서나 표준은 API 규격(사양)으로 부른다. 이 표준을 충족하는 컴퓨터 시스템은 API가 구현(implement)되었다거나 노출(expose)되었다고 말한다. API라는 용어는 사양이나 구현체를 의미할 수 있다. <br />
> **[위키백과](https://ko.wikipedia.org/wiki/API)**

이런 의미라고 하는데 잘 이해가 안됐다 그래서 여기저기 찾아 보면서 이해한건 clint와 server사이에서 요청과 응답을 대신 해주는 친구라고 일단은.. 이해 했다. 그러니까~ client 에서 server에 데이터를 요청할때 A라는 방식으로 요청하면 A에 대한 데이터를 응답 받을수 있고 B방식으로 요청하면 B에 대한 응답을 수 있게 설계 해둔것이 API라는 것! ~~API에 관해선 따로 글을 작성해 보자✏️~~

![API](https://velog.velcdn.com/images/zxzz45/post/d342d971-2d48-45c9-822d-db3d46e106cd/image.jfif)

<br />

## REST API 

REST API는 REST아키텍처 스타일의 디자인 원칙을 준수해서 만든 API라고 하는데.. 음 그러니까 REST방식으로 만든 API라는거잖아?.. <br />

### REST API 설계 규칙


