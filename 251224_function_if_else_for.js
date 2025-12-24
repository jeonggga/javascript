/*

# 프로젝트의 특성상 과목갯수와 점수는 일치하여야 함.
score = [90,95,78,55] # 국어, 수학, 영어, 과학 점수
course = ["국어", "수학", "영어", "과학"] # 과목명

def rating_system(index): # 등급 산출 함수
    scores = score[index] # 점수 변수
    courses = course[index] # 과목명 변수

    if scores >= 90: # 90점 이상 A등급
        print(f"{courses} 등급은 A등급입니다.")  #90점 이상 A등급
    elif scores >= 80: # 80점 이상 B등급
        print(f"{courses} 등급은 B등급입니다.")
    elif scores >= 70: # 70점 이상 C등급
        print(f"{courses} 등급은 C등급입니다.")
    elif scores >= 60: # 60점 이상 D등급
        print(f"{courses} 등급은 D등급입니다.")
    else: # 60점 미만 F등급
        print(f"{courses} 등급은 F등급입니다.")

for i in range(len(score)): # 점수 리스트 길이만큼 반복
    rating_system(i) # 등급 산출 함수 호출

*/

// 다음코드를 JS로 바꿔 보세요.


let score = [90, 95, 78, 55]
// 학생들의 점수를 배열로 저장 (국어, 수학, 영어, 과학 순서)

let course = ["국어", "수학", "영어", "과학"]
// 과목 이름을 배열로 저장

function rating_system(index) {  
    // index번째 과목의 점수를 확인하고 등급을 출력하는 함수

    scores = score[index];  
    // index에 해당하는 점수 가져오기

    courses = course[index];  
    // index에 해당하는 과목 이름 가져오기

    if (scores >= 90){
        console.log(`${courses} 등급은 A등급입니다.`);  
        // 90점 이상 → A등급
    }
    else if (scores >= 80) {
        console.log(`${courses} 등급은 B등급입니다.`);  
        // 80~89점 → B등급
    }
    else if (scores >= 70) {
        console.log(`${courses} 등급은 C등급입니다.`);  
        // 70~79점 → C등급
    }    
    else if (scores >= 60) {
        console.log(`${courses} 등급은 D등급입니다.`);  
        // 60~69점 → D등급
    }
    else {
        console.log(`${courses} 등급은 F등급입니다.`);  
        // 60점 미만 → F등급
    }
}

for (var i = 0; i < 4; i++) {  
    // 0~3까지 반복 (배열 인덱스)
    rating_system(i);  
    // 각 과목 점수에 대해 등급 출력
}