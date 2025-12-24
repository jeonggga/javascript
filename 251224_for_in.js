/*
chulsu = {"국어": 90, "수학": 95, "영어": 78, "과학": 55, "기술": 94} # 철수의 과목별 점수 딕셔너리
grade = {"A": 90, "B": 80, "C": 70, "D": 60} # 등급 기준 딕셔너리

"""
딕셔너리의 key와 value를 동시에 순회합니다.
chulsu.items()값은 [('국어', 90), ("수학", 95)]과 같이 튜플을 요소값으로 가진 리스트형태로 출력됨
따라서 튜플 언패킹을 사용할 수 있다. 

튜플의 첫 번째 요소 (키, 즉 과목 이름)는 변수 subject에 할당.
튜플의 두 번째 요소 (값, 즉 점수)는 변수 score에 할당.
""" 
for subject, score in chulsu.items(): # 과목과 점수를 동시에 순회
    if score >= 90: # 90점 이상은 A 등급
        result_grade = "A" # A 등급
    elif score >= 80: # 80점 이상은 B 등급
        result_grade = "B" # B 등급
    elif score >= 70: # 70점 이상은 C 등급
        result_grade = "C" # C 등급
    elif score >= 60: # 60점 이상은 D 등급
        result_grade = "D" # D 등급 
    else:
        result_grade = "F" # D 미만은 F로 처리

    print(f"{subject} 점수는 {score}점이고, 등급은 {result_grade}입니다.") # 과목별 점수와 등급 출력

*/

// 다음 코드를 JS로 변환해보세요.


let chulsu = {
    "국어": 90,
    "수학": 95,
    "영어": 78,
    "과학": 55,
    "기술": 94
}
// 철수의 과목별 점수를 객체(object)로 저장
// key = 과목 이름, value = 점수

let grade = {
    "A": 90,
    "B": 80,
    "C": 70,
    "D": 60
}
// 등급 기준을 객체로 저장 (사용하지는 않았지만 기준 정보 제공)

for (const score in chulsu) {  
    // chulsu 객체의 key(과목 이름)를 하나씩 반복
    // score 변수에 "국어", "수학", ... 순서로 들어감

    if (chulsu[score] >= 90) {
        result_grade = "A";  
        // 점수가 90 이상이면 A등급
    } else if (chulsu[score] >= 80) {
        result_grade = "B";  
        // 80~89 → B등급
    } else if (chulsu[score] >= 70) {
        result_grade = "C";  
        // 70~79 → C등급
    } else if (chulsu[score] >= 60) {
        result_grade = "D";  
        // 60~69 → D등급
    } else {
        result_grade = "F";  
        // 60 미만 → F등급
    }

    console.log(`${score} 점수는 ${chulsu[score]}점이고, 등급은 ${result_grade}입니다.`);
    // 각 과목의 점수와 등급을 콘솔에 출력
}