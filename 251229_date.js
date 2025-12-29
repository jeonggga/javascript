// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// 인수를 전달하지 않으면 현재 시간 출력함

//특정 날짜나 특정 시간을 출력하고 싶다면
let date2 = new Date("1997-01-07");
let date3 = new Date("1997/01/07/10:10:10");
let date4 = new Date(1997, 1, 7, 23, 59, 59);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date5 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 1월은 0으로 나와서 +1 해줘야함 (1월: 0, 2월: 1, 3월: 2...)
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
// 인수로 수정하고 싶은 년도를 전달하면 됨
date1.setFullYear(2023);
date1.setMonth(2); // 3월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 날짜만 출력
console.log(date1.toLocaleString()); // 현지화된 날짜, 시간 출력
