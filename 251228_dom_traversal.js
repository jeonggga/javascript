// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3); // 결과 : true
let isInclude1 = arr2.includes(10); // 결과 : false

// 3. indexOf (단순한 원시타입의 값을 찾을 때 사용)
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // 결과 : 1
let index1 = arr3.indexOf(20); // 결과 : -1 (존재하지 않기 때문에)

// indexOf는 얕은 비교로 동작(동등비교 연산자를 이용해서 비교)
// 객체값들은 참조값을 기준으로 비교가 되기 때문에 프로퍼티 기준으로는 비교가 이루어지지 않음
// 그래서 배열에서 특정 객체값이 존재하는지 찾아낼 수 없음, 이럴 경우는 findIndex 이용해야함

let objectArr = [{ name: "이정환" }, { name: "홍길동" }];

console.log(objectArr.indexOf({ name: "이정환" })); // 결과 : -1
console.log(objectArr.findIndex((item) => item.name === "이정환")); // 결과 : 0
// findIndex는 콜백 함수를 이용해서 프로퍼티의 값을 기준으로 비교 가능

// 4. findIndex (복잡한 객체 타입의 값을 찾을 때 사용)
// 모든 요소를 순회하면서 콜백 함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];

// const findedIndex = arr4.findIndex((item) => {
//   if (item === 2) return true;
// }); // 결과 : 1

const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
}); // 결과 : 0

// 조건에 만족하는 요소가 배열에 존재하지 않는다면 -1 반환함

// 5. find
// 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "이정환" }, { name: "홍길동" }];
const finded = arr5.find((item) => item.name === "이정환"); // 결과 : {name:'이정환'}
