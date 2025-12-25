/*

recipe = {
    "americano":[("bean", 25), ("water", 8)],
    "cafelatte":[("bean", 25), ("milk", 8)],
    "matchalatte":[("matcha", 25), ("milk", 8)],
    "chocolatte":[("choco", 25), ("milk", 8)]
}   // 음료별 레시피 딕셔너리


ingredient = {
    "bean": 100,
    "matcha": 100,
    "choco": 100,
    "water": 100,
    "milk": 100
}   // 재료별 초기 재고 딕셔너리


price = {
    "americano": 2000,
    "cafelatte": 3500,
    "matchalatte": 4500,
    "chocolatte": 4500
}   // 음료별 가격 딕셔너리


question = """
1. americano
2. cafelatte
3. matchalatte
4. chocolatte
원하시는 음료의 번호를 골라주세요 :""" // 음료 선택 질문 문자열



// -------------------------------------------
// 원하는 음료를 선택 받는 함수
// -------------------------------------------
def select_drink():
    drink = ""    // 조건문 결과로 선택될 음료 이름을 저장할 변수
    while True:
        try:
            selected_num = int(input(question))
        except ValueError:
            console.log("숫자를 입력해주세요.")
            continue    // 숫자가 아닌 입력이면 다시 입력 받기

        if selected_num == 1:
            drink = "americano"   // 입력 받은 숫자의 문자열을 변수 key에 대입한다.
        elif selected_num == 2:
            drink = "cafelatte" 
        elif selected_num == 3:
            drink = "matchalatte"
        elif selected_num == 4:
            drink = "chocolatte"
        else:
            console.log("잘못된 입력입니다. 다시 입력해주세요.")
            continue    // 지정된 숫자가 아니면 다시 입력 받기
    
        return drink    // 올바른 입력이 들어오면 루프 종료 후 반환



// -------------------------------------------
// 결제 처리 함수
// -------------------------------------------
def pay(drink):
    while True:    // 재귀 대신 반복문 사용 → 안정적
        try:
            // 선택한 음료와 금액을 안내한 뒤 결제 금액 입력받기
            input_pay = int(input(f"\n선택하신 메뉴: {drink}\n금액: {price[drink]}원\n결제 금액을 넣어주세요: ", ))

        except ValueError:  // 숫자가 아닌 입력 처리 가능
            console.log("숫자를 입력해주세요.")
            continue
        
        // 충분한 금액이 들어오면 결제 완료
        if input_pay >= price[drink]:
            console.log("\n>>> 결제가 완료되었습니다.\n>>> 음료 제조를 시작합니다.\n")

            // 간단한 영수증 출력
            console.log("================== 영수증 ==================")
            console.log(f"주문 메뉴: {drink} --------------- {price[drink]}원")
            console.log("--------------------------------------------")
            console.log("주문해주셔서 감사합니다. 맛있는 하루되세요.\nWIFI 비밀번호는 12345입니다.")
            console.log("============================================\n")

            // 만약에 받은 금액이 음료 가격보다 크다면 잔돈 반환
            if input_pay > price[drink]:
                console.log(f"남은 잔돈: {input_pay - price[drink]}원\n남은 잔돈은 동전 반환구에 있습니다.\n")
            
            break  // 결제 완료되면 반복문 종료

        // 금액 부족 시 다시 결제 입력 받기
        else:
            console.log("금액이 부족합니다. 다시 시도해주세요.")
    
    return drink



// -------------------------------------------
// 음료 제조 함수
// -------------------------------------------
def making_drink(drink):
    console.log(f"\n주문하신 음료: {drink}\n제조가 완료되었습니다.\n맛있게 드세요!")




// -------------------------------------------
// 재주문 여부 확인 함수
// -------------------------------------------
def continue_order():
        input_order = input("\n음료 주문을 이어서 하시겠어요?(Y/N)")

        if input_order == "Y" or input_order == "y":
            return True
        elif input_order == "N" or input_order == "n":
            console.log("주문이 종료되었습니다. 다음에 또 오세요!")
            return False
        else:
            console.log("잘못된 입력입니다. 다시 입력해주세요.")
            return continue_order()     // 잘못 입력하면 다시 질문




// -------------------------------------------
// 음료 재료 재고 확인 함수
// 선택한 음료의 레시피를 확인하고 재고를 차감
// -------------------------------------------
def ingredient_check(drink):
    // recipe 딕셔너리의 (메뉴명, 재료목록) 쌍을 하나씩 꺼냄 / items()는 딕셔너리의 키와 값을 쌍으로 꺼내는 메소드
    // recipe: {음료명: [(재료명, 필요용량), ...]}
    for drink_menu, value_tuple in recipe.items():

        // 인자값으로 받은 drink(선택한 음료)가 recipe 딕셔너리의 drink(drink_menu)와 일치하면
        if drink == drink_menu:

            // recipe 딕셔너리의 값인 value_tuple(튜플)안에 있는 2개 요소를 반복문을 통해 가져옴
            // ingr_name: 재료 이름, required_amount: 필요한 용량
            for ingr_name, required_amount in value_tuple:

                // 현재 재고가 필요한 용량(required_amount)보다 크거나 같다면
                if ingredient[ingr_name] >= required_amount:

                    // 현재 재고에서 필요한 용량을 차감 후 현재 재고에 저장함
                    ingredient[ingr_name] -= required_amount
                    
                    console.log("- 사용한 용량: ", ingr_name, required_amount)
                    console.log("- 남은 용량: ", ingr_name, ingredient[ingr_name])
                
                else:   // 크거나 같지 않다면, 재고가 부족한 경우 → 다른 메뉴 선택 유도
                    console.log("- 현재 원두 재고: ", ingredient["bean"])
                    console.log("수량이 부족합니다. 다른 메뉴를 선택해주세요.")
                    return select_drink()   // 음료 선택 함수로 돌아감
                    
            return True    // 모든 재료가 충분한 경우
        



// -------------------------------------------
// 메인 함수 : 전체 음료 주문 프로세스 운영
// -------------------------------------------
def coffee_machine():
    while True:
        drink = select_drink()      // 음료 선택
        pay(drink)                  // 결제 진행

        // 재료 체크 후 제조
        if ingredient_check(drink):
            making_drink(drink)

        // 추가 주문 여부 확인
        if continue_order() == False:
            break


// 프로그램 실행
coffee_machine()

*/


// --------------------------------------------------------
// 1. 데이터 정의 단계 (재시피, 재고, 가격)
// --------------------------------------------------------

/**
 * 음료별 레시피 정보 (Dictionary/Object)
 * 각 음료 제작에 필요한 [재료 이름, 사용량]을 배열 형태로 저장
 * 예: americano 제작 시 bean 25단위, water 8단위 소모
 */
const recipe = {
    "americano": [["bean", 25], ["water", 8]],
    "cafelatte": [["bean", 25], ["milk", 8]],
    "matchalatte": [["matcha", 25], ["milk", 8]],
    "chocolatte": [["choco", 25], ["milk", 8]]
};

/**
 * 재료별 현재 재고 현황
 * 프로그램 실행 중 음료가 제작될 때마다 이 수치에서 재시피만큼 차감됨
 */
const ingredient = {
    "bean": 100,
    "matcha": 100,
    "choco": 100,
    "water": 100,
    "milk": 100
};

/**
 * 음료별 판매 가격 설정
 * 사용자가 입력한 금액과 비교하여 결제 가능 여부를 판단하는 기준
 */
const price = {
    "americano": 2000,
    "cafelatte": 3500,
    "matchalatte": 4500,
    "chocolatte": 4500
};

/**
 * 사용자에게 보여줄 메뉴판 문자열
 * prompt() 함수를 통해 화면에 출력될 텍스트 가이드
 */
const question = `
1. americano
2. cafelatte
3. matchalatte
4. chocolatte
원하시는 음료의 번호를 골라주세요 : `;


// --------------------------------------------------------
// 2. 기능 구현 단계 (음료 선택, 결제 처리)
// --------------------------------------------------------

/**
 * 함수명: select_drink
 * 기능: 사용자로부터 번호를 입력받아 해당하는 음료의 Key 값을 반환
 */
function select_drink() {
    let drink = null; // 사용자가 선택한 음료명을 저장할 변수

    while (true) { // 올바른 번호를 입력할 때까지 무한 반복
        // prompt로 입력받은 값을 숫자형(Number)으로 변환
        let selected_num = Number(prompt(question));

        // 입력된 번호에 따라 drink 변수에 음료 이름 할당
        if (selected_num == 1) {
            drink = "americano";
        } else if (selected_num == 2) {
            drink = "cafelatte";
        } else if (selected_num == 3) {
            drink = "matchalatte";
        } else if (selected_num == 4) {
            drink = "chocolatte";
        } else {
            // 1~4 이외의 값이 들어오면 경고창을 띄우고 다시 루프 시작
            window.alert("잘못된 입력입니다. 다시 입력해주세요.");
            continue; 
        }

        // 정상적으로 음료가 선택되었다면 해당 이름을 반환하고 루프 종료
        return drink; 
    }
}

/**
 * 함수명: pay
 * 기능: 선택된 음료의 가격과 사용자가 투입한 금액을 비교하여 결제 진행
 * 매개변수: drink (선택된 음료의 이름)
 */
function pay(drink) {
    while (true) { // 결제가 성공(금액 충족)할 때까지 반복
        let inputPay;

        try {
            // 사용자가 투입할 금액 입력 받기 (문자열을 정수로 변환)
            inputPay = parseInt(prompt(`\n선택하신 메뉴: ${drink}\n금액: ${price[drink]}원\n결제 금액을 넣어주세요:`));

            // 입력값이 숫자가 아닌 경우(NaN) 예외 강제 발생
            if (isNaN(inputPay)) {
                throw new Error("숫자를 입력해주세요.");
            }
        } catch (e) {
            // 예외 발생 시 에러 메시지 출력 후 다시 입력 루프로 이동
            alert(e.message);
            continue;
        }

        // 결제 로직 검증
        if (inputPay >= price[drink]) {
            // 1. 투입 금액이 가격보다 크거나 같을 때 (성공)
            alert(`\n>>> 결제가 완료되었습니다.\n>>> 음료 제조를 시작합니다.\n`);

            // 영수증 출력 프로세스
            console.log("================== 영수증 ==================");
            console.log(`주문 메뉴: ${drink} --------------- ${price[drink]}원`);
            console.log("--------------------------------------------");
            console.log("주문해주셔서 감사합니다. 맛있는 하루되세요.\nWIFI 비밀번호는 12345입니다.");
            console.log("============================================\n");

            // 거스름돈 발생 시 처리
            if (inputPay > price[drink]) {
                alert(`남은 잔돈: ${inputPay - price[drink]}원\n남은 잔돈은 동전 반환구에 있습니다.\n`);
            }
            break; // 결제 성공 시 while 루프 탈출
        } else {
            // 2. 투입 금액이 부족할 때
            alert("금액이 부족합니다. 다시 시도해주세요.");
        }
    }
    // 최종적으로 결제가 완료된 음료명을 반환
    return drink;
}



// -------------------------------------------
// 음료 제조 함수
// -------------------------------------------
function making_drink(drink) {
    console.log(`주문하신 음료: ${drink}\n제조가 완료되었습니다.\n맛있게 드세요`);
}



// -------------------------------------------
// 재주문 여부 확인 함수
// -------------------------------------------
function continue_order() {
        let input_order = parseInt(prompt("음료 주문을 이어서 하시겠어요?(Y/N)"));

        if (input_order == "Y" || input_order == "y") {
            return true;
        } else if (input_order == "N" || input_order == "n") {
            console.log("주문이 종료되었습니다. 다음에 또 오세요!");
            return false;
        } else {
            console.log("잘못된 입력입니다. 다시 입력해주세요.");
            return continue_order();
        }
}



// -------------------------------------------
// 음료 재료 재고 확인 함수
// 선택한 음료의 레시피를 확인하고 재고를 차감
// -------------------------------------------
function ingredient_check(drink) {

    for (let drink_menu in recipe) {

        if (drink == recipe[drink_menu]) {


            for (ingr_name in value_tuple) {

                if (ingredient[ingr_name] >= value_tuple[ingr_name]) {


                    ingredient[ingr_name] -= value_tuple[ingr_name];
                    
                    console.log("- 사용한 용량: ", ingr_name, value_tuple[ingr_name]);
                    console.log("- 남은 용량: ", ingr_name, ingredient[ingr_name]);
                
                } else {
                    console.log("- 현재 원두 재고: ", ingredient["bean"]);
                    console.log("수량이 부족합니다. 다른 메뉴를 선택해주세요.");
                    return select_drink();
                }
            } return true;
            
        }
    }    
}



// -------------------------------------------
// 메인 함수 : 전체 음료 주문 프로세스 운영
// -------------------------------------------
function coffee_machine() {
    while (true) {
        let drink = select_drink();
        pay(drink);


        if (ingredient_check(drink)) {
            making_drink(drink);
        }

        if (continue_order() === false) {
            break;
        }
    }
}

coffee_machine();