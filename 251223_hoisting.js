var result = 10 + 20;
console.log(result)

var score; // 변수 선언
score = 80; // 값의 할당

var score = 80; //	변수 선언과 값의 할당


console.log(score); //	undefined
var score; // ① 변수 선언
score = 80; // ② 값의 할당
console.log(score); // 80



console.log(score); //	undefined
score = 80; // 값의 할당
var score; // 변수 선언

console.log(score); //	80



var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);

/*
<ul>
 <li><a href="#">Home</a></li>
</ul>
*/

var template = `
<ul>
 <li><a href="#">Home</a></li>
</ul>
`;

/*
<ul>
 <li><a href="#">Home</a></li>
</ul>
*/


var first = 'Ung-mo';
var last = 'Lee';

//문자열 연결
console.log('My name is ' + first + ' ' + last + '.');

console.log(`My name is ${first} ${last}.`);




var result = score >= 60 ? 'pass' : 'fail'


let x = 3;

if (x < 10) {
    x++
}

console.log(x)


function sum(x, y) {
    x + y
}

sum(3, 5)



for (var i = 1; i <= 9; i++) {
    console.log(i)
}


// 구구단
for (var i = 2; i <= 9; i++) {  // 변수 i가 2로 할당됨, i가 9보다 작거나 같을 때 i에 +1씩 증가
    console.log(`[${i}단]`)
    for (var j = 1; j <= 9; j++) { // 변수 j가 1로 할당됨, j가 9보다 작거나 같을 때 j에 +1씩 증가
        console.log(`[${i} x ${j} = ${i*j}]`);
    }
}

