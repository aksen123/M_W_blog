---
description: 20240409
tags: [react-hook-form]
---

:::tip ✌️
오늘은 프로젝트에 사용했던(메뉴추가,수정, 지점추가) 리액트 훅 폼 사용법에 대해 작성할건데!! 내가 사용했던 것(useForm) 위주로만 작성해보겠다!
:::

## 설치

```
npm install react-hook-form
yarn add react-hook-form
```

## [공식페이지]('https://react-hook-form.com/')

## 사용하기!

```js
import { useForm } from "react-hook-form";

const {
  handleSubmit, // form onSubmit에 들어가는 함수
  register, // onChange 등의 이벤트 객체 생성
  watch, // register를 통해 받은 모든 값 확인
  formState: { errors }, // errors: register의 에러 메세지 자동 출력
} = useForm();
```
