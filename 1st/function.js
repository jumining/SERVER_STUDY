// 1. 함수 선언식 

function add(x,y) {
    return x+y;
}
console.log(add(2,3));

// 2. 함수 표현식

const addStr = function (x,y) {
    return x+y;
};
console.log(addStr("안녕", "하세요"));

// 3. 함수 표현식 - 화살표 함수
const add2 = (x, y) => {
    return x+y;
};
console.log(add2(2,3));

const add3 = x => {
    return x;
};
console.log(add3(3));

// 로직이 한 줄일때, return 문 생략 가능
const add4 = (x,y) => x+y;
console.log(add4(2,3));

// 매개변수 하나일때 매개변수 소괄호 생략 가능
const square = x => x*x;
console.log(square(2));

// 객체를 리턴하고 로직이 한 줄일 때는 소괄호 ( )로 감싸줘야함
const person = (name, age) => ({name: name, age: age});
console.log(person("휴먼",100));

// 위의 person 화살표 함수는 아래와 동일
const person2 = function (name, age) {
    return {
        name: name,
        age: age,
    };
};
console.log(person2("휴먼",100));
