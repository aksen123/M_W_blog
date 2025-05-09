---
title: 1주차-도커 소개
description: 도커-쿠버네티스-스터디 1주차
tags: [docker, container, 도커, 쿠버네티스, 스터티]
---

# 🐳 도커를 왜 써야 할까? – 내 컴퓨터에선 잘 되는데요?

개발을 하다 보면 자주 듣게 되는 말이 있다.

> "아니... 내 컴퓨터에선 잘 되는데요?"

같은 코드인데, 내 컴퓨터에선 잘 실행되고  
배포된 서버에서는 에러가 나고,  
심지어 팀원의 노트북에선 또 다른 에러가 발생한다.

왜 이런 일이 생길까?

---

## 💣 문제의 원인 – 환경이 달라서!

개발자라면 각자의 개발 환경이 조금씩 다르다.

- Node.js 18 vs Node.js 16
- Mac vs Windows vs Linux
- 설치된 라이브러리 버전이 제각각

이런 **작은 차이들**이 프로그램의 동작 방식에 영향을 준다.

결국, 아무리 열심히 코드를 잘 짜도  
**"환경이 달라서 생기는 문제"** 때문에 삽질하게 된다.

---

## ✅ 그래서 등장한 Docker

이 문제를 해결하기 위해 등장한 게 바로 **Docker**다.

Docker는 개발자가 만든 앱과, 그 앱이 **정상적으로 동작하는 환경**을  
**하나로 묶어서 패키징**해주는 도구다.

> "이 앱은 Node 18에서 동작하고, yarn으로 패키지를 설치했고,  
> 이런 폴더 구조에 이런 설정이 있다."  
> → 이걸 **도커 이미지** 안에 다 담을 수 있다.

그리고 그 이미지를 어디서 실행하든,  
언제 실행하든,  
**완전히 동일한 환경**에서 작동한다!

---

## 📦 도커의 핵심 개념

| 개념       | 설명                                      |
| ---------- | ----------------------------------------- |
| Dockerfile | 도커 이미지를 만들기 위한 **레시피 파일** |
| Image      | 앱 + 환경을 담은 **실행 전 패키지**       |
| Container  | 이미지를 실제로 **실행한 상태**           |

> 이미지 = 도시락 📦  
> 컨테이너 = 도시락을 꺼내 먹는 중 🍱

---

## 🛠 Dockerfile 기본 예시

```Dockerfile
# Node.js 18을 기반으로
FROM node:18

# 앱 위치 설정
WORKDIR /app

# 현재 디렉토리의 파일들을 복사
COPY . .

# 의존성 설치
RUN yarn install

# 앱 실행
CMD ["yarn", "start"]
```

이렇게 Dockerfile을 만들어두면,
누가 보든, 언제 빌드하든,
항상 동일한 방식으로 실행 환경이 구성된다.

---

## 도커 아키텍쳐

![image](https://docs.docker.com/get-started/images/docker-architecture.webp)
[https://docs.docker.com/get-started/docker-overview/#docker-architecture](https://docs.docker.com/get-started/docker-overview/#docker-architecture)

---

<details>
<summary>
## 💻 자주 사용하는 Docker 명령어 & 옵션 설명
</summary>

### ✅ 이미지 빌드

**만들어둔 Dockerfile의 내용으로 이미지를 만든다**

```bash
docker build -t my-app .
```

- -t my-app: 빌드된 이미지에 이름(tag) 붙이기
- .: 현재 디렉토리에 있는 Dockerfile 기준으로 빌드

### ✅ 컨테이너 실행

```bash
docker run -d -p 3000:3000 --name my-container my-app
```

- -d : 백그라운드(Detached) 모드로 실행
- -p 3000:3000 : 호스트:컨테이너 포트 연결
- --name my-container : 컨테이너 이름 지정
- my-app : 실행할 이미지 이름

### ✅ 대화형 실행 (테스트용)

```bash
docker run -it --rm ubuntu /bin/bash
```

- **-it: 사람이 직접 터미널에서 조작할 일이 있을때 사용 i,t두 옵션은 세트로 사용함**

- -i : 표준 입력 연결 (interactive)
- -t : 가상 터미널 연결 (TTY)
- --rm : 종료 시 컨테이너 자동 삭제
- ubuntu : 사용할 이미지
- /bin/bash : 컨테이너 안에서 실행할 명령어

### ✅컨테이너 목록 확인

```bash
docker ps

docker ps -a
```

- docker ps: 실행 중인 컨테이너 목록 확인
- docker ps -a: 중지된 컨테이너 포함 전체 목록 확인

### 🧹 컨테이너/이미지 정리

```bash
docker stop <container-id>
# 컨테이너 종료

docker stop $(docker ps -q)
#모든 컨테이너 종료

docker rm <container-id>
# 종료된 컨테이너 삭제

docker rm $(docker ps -aq)
# 모든 컨테이너 삭제

docker rm -f <container-id>
# 강제로 컨테이너 삭제 (실행 중이어도 제거)

docker images
# 로컬에 저장된 이미지 목록 확인

docker rmi <image-id>
# 이미지 삭제

docker rmi -f <image-id>
# 강제로 이미지 삭제
```

</details>

---

## 🧾 Docker 컨테이너 실행 시 꼭 알아야 할 옵션 정리

### ✅ 필수로 알아야 하는 옵션

| 옵션      | 설명                                                                                                 |
| --------- | ---------------------------------------------------------------------------------------------------- |
| -d        | **Detach** - 백그라운드에서 컨테이너 실행 (nohup &처럼)                                              |
| -i        | **Interactive** - 표준 입력 연결 (입력용)                                                            |
| -t        | **TTY** - 가상 터미널 생성 (출력용)                                                                  |
| --name    | 컨테이너 이름 지정                                                                                   |
| -p        | **Publish** - 호스트 포트 : 컨테이너 포트 매핑                                                       |
| --restart | 재시작 정책 설정 `always` 항상 `on-failure` 에러 발생 시 `unless-stopped` 수동 중지 전까진 계속 실행 |
| -v        | **Volume** - 호스트 디렉토리 ↔ 컨테이너 디렉토리 마운트                                              |

> 💡 `-i`와 `-t`는 보통 `-it` 같이 묶어서 사용함

### ✅ 기타 유용한 명령어

| 명령어                      | 설명                                                                                           |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| -u                          | 컨테이너 안에서 명령을 실행할 사용자 지정                                                      |
| --rm                        | 컨테이너가 종료되면 자동으로 삭제됨 (테스트용 컨테이너에 좋음)※ `--restart`와는 함께 사용 불가 |
| `docker system prune`       | 사용하지 않는 이미지, 컨테이너, 네트워크 정리                                                  |
| `docker logs <id>`          | 컨테이너 로그 보기                                                                             |
| `docker exec -it <id> bash` | 실행 중인 컨테이너에 접속해서 bash 실행                                                        |

### ⚠️ 옵션 조합 주의사항

- `--restart` 와 `--rm` 은 **동시에 사용할 수 없다**  
  → 하나는 “계속 유지”, 하나는 “종료 후 삭제”이기 때문
- `-d` 와 `-it` 도 함께 사용하면 의미가 모순됨  
  → `-d`는 백그라운드, `-it`는 터미널 붙는 거니까  
  → **대신** `docker exec -it <컨테이너> bash` 로 접속하면 됨
