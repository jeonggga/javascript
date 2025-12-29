// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "이정환", hoddy: "테니스" },
  { name: "김효빈", hoddy: "테니스" },
  { name: "홍길동", hoddy: "독서" },
];

// const tennisPeople = arr1.filter((item)=>{
//     if (item.bobby === "테니스") return true;
// })

const tennisPeople = arr1.filter((item) => item.bobby === "테니스");
// 조건식만 반환하는걸로 더 단축해서 사용 가능

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백 함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name);
// arr1 배열을 순회하면서 각각 item의 name 프로퍼티의 값들만 모아서 새로운 배열로 반환

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort(); // 결과 : ['a', 'b', 'c']

let arr4 = [10, 3, 5];
arr4.sort(); // 결과 : [10, 3, 5] / 숫자의 대소비교를 하는게 아니라 사전순이라서

// 숫자의 대소관계 기준으로 정렬하고 싶다면 sort() 메소드를 호출하면서 비교 기준을 설정하는
// 콜백 함수도 함께 넘겨주어야 함

// 오름차순
let arr5 = [10, 3, 5];
arr5.sort((a, b) => {
  // 2개의 배열 요소를 받는다
  if (a > b) {
    // b가 a 앞에 와라
    return 1; // 양수를 반환해주면 둘중에 더 작은 값이 앞에 오도록 설정됨
    // b, a 배치
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1;
    // a, b 배치
  } else {
    // a, b가 같은 값이라면
    // 두 값의 자리를 바꾸지 마라
    return 0;
    // a, b 자리를 그대로 유지
  }
});

// 내림차순
let arr6 = [10, 3, 5];
arr6.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;
  } else {
    return 0;
    // a, b 자리를 그대로 유지
  }
});

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr7 = ["c", "a", "b"];
const sorted = arr7.toSorted(); // 결과 : ['a', 'b', 'c']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr8 = ["hi", "im", "winterlood"];
const joined = arr8.join(); // 결과 : hi,im,winterlood
const joined1 = arr8.join(""); // 결과 : hiimwinterlood
