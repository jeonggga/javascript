/*
let age = 20;
let message;

if (age >= 19) {
  message = "성인입니다.";
} else {
  message = "미성년자입니다.";
}


다음 코드를 삼항연산자로 만들어보세요. 제미나이를 사용해서 공부하고 풀어도 상관없습니다.
*/


let age = 20;
// 변수 age를 20으로 초기화

let message = (age >= 19) ? "성인입니다." : "미성년자입니다.";  
// 삼항 연산자 사용
// 조건 (age >= 19)이 true이면 "성인입니다."를 message에 저장
// 조건이 false이면 "미성년자입니다."를 message에 저장

console.log(message);  
// message 값을 콘솔에 출력 → "성인입니다."