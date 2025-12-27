const name = prompt("이름을 입력하세요.");
// 입력창이 떴는데 취소 버튼 누르면 null값이 들어감.

alert("환영합니다, " + name + "님");
alert(`환영합니다, ${name}님. 환영합니다.`);
//alert은 확인 버튼만 있음


//prompt 함수 실행. prompt(인수1, 인수2)
//인수1은 메시지로 들어가고, 인수2는 텍스트필드 안에 기본 입력으로 들어감.
const name = prompt("예약일을 입력해주세요.", "2020-10-");
console.log(name);


//alert은 확인 버튼만 있지만 confirm은 확인 버튼과 취소 버튼이 있음.
const isAdult = confirm("당신은 성인 입니까?");
console.log(isAdult);
// 확인 버튼 누르면 true 반환하고, 취소 누르면 false 반환함.
// ex) 결제 하시겠습니까?, 정말 삭제 하시겠습니까?
