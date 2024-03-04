---
description: 2024년 3월 4일
tags: [dayjs]
---

:::tip 오늘은!
dayjs로 만두 어드민 페이지에서 매출달력 만든 부분에 대해서 작성할건데 기본적인건 공식페이지에 잘 나와있으니 여기엔 내가 사용한것만 기록해보겠다!!!
:::

### [기본적인 내용들은 여기서](https://day.js.org/docs/en/installation/installation)

```js
// 현재 날짜
let now = dayjs(); //  === new Date()

// 날짜 출력하기
now.format("YYYY-MM-DD");

// 현재 달의 첫번째 날짜, 마지막 날짜 출력하기
now.startOf("month").format("YYYY-MM-DD"); // 2024-03-01 출력
now.endOf("month").format("YYYY-MM-DD"); // 2024-03-31 출력

// 이번달 1일의 요일
now.day(); // 3월 1일이 금요일이니까 >> 5 출력

// 이번달 길이(마지막 날짜)
now.daysInMonth(); // 3월은 31일까지 있으니까! >> 31 출력

// 기준 날짜에서 n일 이후, 이전 날짜 구하기 (연도, 달에도 사용 가능)
now.startOf("month").add(n, "day"); // n이 3이고 기준날짜가 3월4일 이라면 3월7일을 나타냄
now.startOf("month").subtract(n, "day"); // n이 5이고 기준날짜가 3월4일 이라면 2월29일을 나타냄(올해는 윤년이니까~)
```

#### 위에 작성한것들이 내가 매출달력 페이지에서 사용한것들임!

> 기존에 `new Date()`로 달력을 만들때 나는 12월의 날짜들을 다 배열에 넣은뒤 2월은 윤년을 구하는 함수를 만들고 29일로 바꾸면서 ..이런 짓들을 했는데 dayjs를 사용하니 이런 불필요한 과정들은 건너뛸수 있었고 상대적으로 간단히 달력을 만들수 있었다!
> ===== 여기 부턴 내일 작성!
