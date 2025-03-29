---
description: 2023년 12월 29일
tags: [RESTful API, REST, RESTful, API]
---

## RESTful API란?????

> 간략하게 설명 하자면 REST한 방식으로 프로그램간 정보 교환 등의 상호작용을 가능하게 하는 것!!!
> 그렇다면 여기서 먼저 알아야 할건 REST란 무엇이고 API가 뭔지를 먼저 알아야 할듯!

<br /><br />

## REST란?

REST(Representational State Transfer)란 네트워크 상에서 Client와 Server사이의 통신 방식 중 하나로 웹의 장점을 최대한 활용할 수 있는 아키텍쳐 스타일이다.<br />
자원을 이름으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미한다. 즉,
Client는 `URI`를 이용해 자원의 지정하고 해당 자원의 상태(정보)에 대한 조작을 `HTTP 메소드`를 사용해 Server에 요청 한다. <br/>
**여기서 REST의 원칙을 지키면서 API의 의미를 표현하고. 쉽고,파악하기 쉽게 하는것을 RESTful하다고 한다.**

![REST](https://gmlwjd9405.github.io/images/network/rest.png)

## REST의 구성

### 자원(Resource) : URI

- URI : Uniform Resource Identifier의 약자로 우리말로 '통합 자원 식별자'(즉 인터넷상의 리소스 자원 자체를 식별하는 고유한 문자열 시퀀스)
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

> API(application programming interface 애플리케이션 프로그래밍 인터페이스, 응용 프로그램 프로그래밍 인터페이스)는 컴퓨터나 컴퓨터 프로그램 사이의 연결이다. 일종의 소프트웨어 인터페이스이며 다른 종류의 소프트웨어에 서비스를 제공한다. 이러한 연결이나 인터페이스를 빌드하거나 사용하는 방법을 기술하는 문서나 표준은 API 규격(사양)으로 부른다. 이 표준을 충족하는 컴퓨터 시스템은 API가 구현(implement)되었다거나 노출(expose)되었다고 말한다. API라는 용어는 사양이나 구현체를 의미할 수 있다. <br /> > **[위키백과](https://ko.wikipedia.org/wiki/API)**

이런 의미라고 하는데 잘 이해가 안됐다 그래서 여기저기 찾아 보면서 이해한건 clint와 server사이에서 요청과 응답을 대신 해주는 친구라고 일단은.. 이해 했다. 그러니까~ client 에서 server에 데이터를 요청할때 A라는 방식으로 요청하면 A에 대한 데이터를 응답 받을수 있고 B방식으로 요청하면 B에 대한 응답을 수 있게 설계 해둔것이 API라는 것! ~~API에 관해선 따로 글을 작성해 보자✏️~~

![API](https://velog.velcdn.com/images/zxzz45/post/d342d971-2d48-45c9-822d-db3d46e106cd/image.jfif)

<br />

## REST API

REST API란 REST한 방식으로 데이터를 상호교환 하도록 설계된 API다

<br />

### REST API의 장점

1. URL만 보고 어떤 자원에 접근할 것인지, 메소드를 보고 어떤 행위를 할지 알 수 있기 때문에 개발할 때 용이함
2. 1개의 URI로 4개의 행위(CRUD)를 명시할 수 있기 때문에 효율적이다.
3. Stateless한 상태를 유지할 수 있다.


    - 작업을 위한 상태정보를 따로 저장하고 관리하지 않아 세션,쿠키 정보를 별로 저장,관리 하지 않기 때문에 API서버는 들어오는 요청만 단순히 처리 하면 됨.
    - 서버에서 불필요한 정보를 관리하지 않음으로 구현이 단순해짐

### REST API 설계 규칙

<br />

**설계 예시!**
![REST API 예시](https://gmlwjd9405.github.io/images/network/restapi-example.png)
<br />

> 도큐먼트 : 객체 인스턴스나 데이터베이스 레코드와 유사한 개념 <br/>
> 컬렉션 : 서버에서 관리하는 디렉터리라는 리소스 <br />
> 스토어 : 클라이언트에서 관리하는 리소스 저장소 <br />

1.  **URI는 정보의 자원을 표현 해야함**
    - 동사보다 명사, 대문자보단 소문자를 사용
      > `/User/1` >> `/user/1`
    - 도큐먼트 이름은 단수 명사를 사용
    - 컬렉션 이름은 복수 명사를 사용
    - 스토어 이름은 복수 명사를 사용

<br />

2. **자원에 대한 행위는 HTTP 메소드(GET, PUT, POST, DELETE 등)로 표현**
   - URI에 HTTP 메소드가 들어가면 안된다
     > `GET) /user/delete/1` >> `DELETE)  /user/1`
   - URI에 행위에 대한 동사 표현이 들어가면 안됨
     > `GET)  /user/show/1` >> `GET)  /user/1` <br />
     > `POST)  /user/insert/1` >> `POST)  /user/1`
   - 경로 부분 중 변하는 부분은 유일한 값으로 대체한다.(즉, :id는 하나의 특정 resource를 나타내는 고유값이다.)
     > user를 생성 >>> `POST) /users` <br />
     > id가 1인 user를 삭제 >> `DELETE) /users/1`

<br />

3. **슬래시 구분자(/)는 계층 관계를 나타내는데 사용**

- URI 마지막 문자로 슬래시(/)를 포함하지 않는다
  > `http://restapi.example.com/houses/apartments/  << 이런식으로 쓰면 안됨`

<br />

4. **하이픈(-)은 URI 가독성을 높이는데 사용, 밑줄(\_)은 사용하지 않는다**

<br />

5. **파일 확장자는 URI에 포함하지 않는다**
   `http://restapi.example.com/houses/apartments/photo.jpg`
