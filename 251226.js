// 이름과 성적을 빈 딕셔너리에 추가하는 방식으로 진행.
student_dict = {}

// 과목은 미리 정해져 있으니, 과목의 목록을 튜플로 미리 만들어 전제 조건 설정. 
subject_array = ("국어", "수학", "영어", "과학")



// tmp_data = {"이성희": [95,90,85,70], "개발자": [90,94,80,92]}



function func_input_score(name) {
    temp_dic = {}
    temp_score = []
    # 각 과목의 갯수만큼 반복문 진행
    for sub_index in range(len(subject_array)):
        temp_score.append(int(input(f"{subject_list[sub_index]}과목의 점수는?")))

    temp_dic[name] = temp_score
    student_dict[name] = temp_score
    print(temp_dic)
}