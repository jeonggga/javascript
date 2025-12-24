/*
https://bigtop.tistory.com/29
JavaScript의 "switch" 문은 하나의 변수를 여러 값과 비교할 때 "if-else if" 문보다 훨씬 깔끔하게 코드를 작성할 수 있게 해줍니다.
학점 계산기나 요일 출력 같은 예제가 대표적인데, 여기서는 "음료 자판기" 시스템을 예로 들어 문제로 만들었습니다.

문제: 자판기 메뉴 선택 프로그램
사용자가 번호(1~3)를 입력하면 해당 메뉴와 가격을 출력하고, 그 외의 번호를 입력하면 "잘못된 번호"라는 메시지를 출력하는 프로그램을 "switch" 문을 사용하여 작성해 보세요.

1번: "콜라" / 1500원
2번: "사이다" / 1400원
3번: "커피" / 700원
*/


let menuNumber = 2;  
// 변수 menuNumber를 2로 초기화 (사용자가 선택한 메뉴 번호)

switch (menuNumber) {  
    // menuNumber 값에 따라 여러 경우(case)를 나누어 실행
    case 1:  
        // menuNumber가 1일 때 실행
        console.log('1번: "콜라" / 1500원');  
        break;  
        // break를 만나면 switch문 종료

    case 2:  
        // menuNumber가 2일 때 실행
        console.log('2번: "사이다" / 1400원');  
        break;  

    case 3:  
        // menuNumber가 3일 때 실행
        console.log('3번: "커피" / 700원');  
        break;  

    default:  
        // 위의 case 모두 해당하지 않을 때 실행
        console.log('잘못된 번호');  
}