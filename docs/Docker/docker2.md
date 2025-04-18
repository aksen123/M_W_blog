---
title: Docker 네트워크 실습
description: Docker
tags: [docker, container, 도커, 쿠버네티스, 스터티]
---

# 🐳 Docker 네트워크 실습 정리

:::tip
이 문서는 AWS EC2 Ubuntu 서버를 활용하여 Docker 네트워크와 관련된 다양한 실습을 수행한 내용을 정리한 것이다.
:::

## ⚙️ 실습 환경 구성

:::tip
본 실습에서는 AWS의 CloudFormation을 활용하여 EC2, VPC, 보안 그룹, Docker 등 실습에 필요한 환경을 자동으로 구성했다.

경보님이 제공해주신 템플릿 링크를 활용하면, 복잡한 설정 없이도 실습에 필요한 인프라가 자동으로 만들어짐.
:::

### 필요한 실습 구성

- VPC 1개 (퍼블릭 서브넷 2개)
- EC2 인스턴스 1대 (Ubuntu 22.04, t3.small)

### 🔐키 페어 생성

**EC2 > 네트워크 및 보안 > 키 페어 > 키 페어 생성**
파일 형식을 .pme으로 설정하고 키페어를 생성하면 파일을 다운받을수 있게 된다.

![키페어 생성 화면](./img/image.png)

### 🧾 CloudFormation 실행 방법 (콘솔 기준)

1. AWS Console > CloudFormation > 스택 생성
2. 템플릿 지정 > 템플릿 소스 > Amazon S3 URL > 제공해 주신 URL 넣기 > 다음
3. 스택 세부정보 지정 파라미터 입력:
   - `KeyName`: 내 키페어 이름
   - `SgIngressSshCidr`: 내 공인 IP 주소 + `/32`
   - (선택) `MyInstanceType`: 인스턴스 타입(t3.small 등)
4. 이후 계속 다음다음 누르고 생성
5. 스택 생성 완료 후 EC2 인스턴스에서 SSH 접속

```bash
ssh -i ~/.ssh/my-key.pem ubuntu@<EC2 퍼블릭 IP>
```

※ 별도로 서버 설정이나 도커 설치를 직접 할 필요 없이, 템플릿 실행만으로 완전한 실습 환경이 준비된다.  
단, 템플릿 실행 전에는 SSH 키페어 생성 및 현재 IP 주소 확인이 필요함.

## ✅ Docker 설치 및 기본 설정

위 실습환경 구성처럼 자동으로 설치 되면 할 필요는없지만 어쨋든 알고는 있어야 할듯해서 작성해둠.

```bash
sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
newgrp docker  # 또는 SSH 재접속
```

---

## 🧠 리눅스 프로세스 정보 확인

리눅스 환경에서 프로세스를 조회, 추적, 모니터링하는 기본 명령어 특히 Docker나 서버 환경에서 어떤 프로세스가 실행 중인지, 어떤 사용자가 실행했는지 등을 확인하는 데 매우 유용하다.

### 📌 주요 명령어

|  명령어  | 설명                                                                             |
| :------: | -------------------------------------------------------------------------------- |
|    ps    | 현재 사용자 세션에서 실행 중인 프로세스 목록 출력                                |
|  ps -ef  | 전체 시스템의 모든 프로세스를 상세히 출력 (PID, 사용자, CPU/메모리 사용 등 포함) |
| top -d 1 | 실시간으로 프로세스 정보를 모니터링 (1초 간격 업데이트)                          |
|   htop   | top의 개선판, 인터랙티브 UI 제공 (설치 필요)                                     |
|  pgrep   | 이름 또는 사용자 기준으로 특정 프로세스의 PID를 찾는 명령                        |

---

## ✅ Docker 기본 네트워크 모드: bridge

```bash
# 컨테이너 2개 실행
docker run -it --name=kn --rm busybox
ip addr

docker run -it --name=ou --rm busybox
ip addr

# 서로 ping 테스트
ping -c 4 172.17.0.x
```

### 🔍 컨테이너 외부 통신 확인

```bash
# 호스트에서 ICMP 감시
sudo tcpdump -i any icmp

# 컨테이너1에서 외부 ping
ping -c 1 8.8.8.8
```

### ✅ 결과

- 컨테이너의 ping 요청이 docker0 → enX0 → 인터넷으로 전달됨
- 응답도 다시 역방향으로 전달되어 컨테이너에 도달함

---

## ✅ Docker 소켓과 권한

### 🔐 docker 그룹 권한 실습

```bash
whoami          # ubuntu
docker info     # 정상 실행 → ubuntu가 docker 그룹에 속해있음

ls -l /var/run/docker.sock
# srw-rw---- 1 root docker ...
```

> 도커 그룹은 root와 같은 권한 수준을 가지므로 보안상 유의 필요

```bash
groups  # docker 그룹 포함 확인
```

### 🧪 도커 소켓 감시

```bash
lsof /var/run/docker.sock
ss -xl | grep docker
```

---
