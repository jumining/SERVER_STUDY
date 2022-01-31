// 1. 배열 실습

let arr10 = [];
console.log(arr10);
console.log(typeof arr10);

let arr20 = new Array(1,2,3,4,5); 
console.log(arr20);
console.log(typeof arr20);

let arr3 = ["임주민", 1, 2, 3, null, { name: "jumining", age: 22 }];
console.log(arr3);
console.log(typeof arr3);

// 2. 배열 프로토타입 메서드

console.log("***** Array 기본 함수들을 알아보자 *****");
let arr = [1,2,3,4];

// length
console.log(`arr의 길이: ${arr.length}`);

// push, pop
arr.push("new item");
console.log("arr push:", arr);
arr.pop();
console.log("arr pop:", arr);

// unshift, shift (왼쪽으로)
arr.unshift("first item");
console.log("arr unshift:", arr);
arr.shift();
console.log("arr shift:", arr);

// includes (true false 반환)
console.log("arr.includes(4):", arr.includes(4));
console.log("arr.includes(1000):", arr.includes(1000));

// indexOf
console.log("arr.indesxOf(4):", arr.indexOf(4)); 
console.log("arr.indexOf(100):", arr.indexOf(100));  // -1

// concat
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let concatArr = arr1.concat(arr2);
console.log("arr1.concat(arr2):", concatArr);

// join
let location = ["서울", "대전", "대구", "부산"];
console.log(location.join("-> "));

// reverse
console.log(location.reverse().join("-> "));

// sort
let countries = ["Canada", "Korea", "Japan"];
console.log(countries.sort((a,b) => (a > b ? 1 : -1)));
console.log(
    countries.sort(function (a,b) {
        return a.localeCompare(b);
    }),
);
console.log(
    "오름차순 정렬:",
    concatArr.sort((a,b) => a - b),
);
console.log(
    "내림차순 정렬:",
    concatArr.sort(function (a,b) {
        return b - a;
    }),
);

// filter 조건 충족 배열 새로 만들어냄
let number = [100, 234, -125, 1, 23, -637, -123, 99, 2, 3, 4, 5];
let minusNumber = number.filter(item => item < 0);
console.log("minusNumber: ", minusNumber);

// map 배열 요소 전체 대상으로 함수 호출하고, 그 결과를 새로운 배열로 반환
countries = ["Osterreich", "Andorra", "Vietnam", "Korea", "China"];
let countriesLenghts = countries.map(item => item.length);
console.log("countriesLenghts: ", countriesLenghts);

// reduce 값 하나 반환 (ex. 1~n 수 더하기)
number = [1,2,3,4,5,6,7,8,9,10];
let sum = number.reduce((previousValue, currentValue) => {
    console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}`);
    return previousValue + currentValue;
});

console.log("sum = ", sum);

// 3. 배열 순회
let ourPart = [
    "가나다",
    "나다라",
    "다라마",
    "라마바",
    "마바사",
    "바사아",
    "사아자",
];
let partIndexStr = '파트 여러분 번호 한 번 세겠습니다. "';
let partMemberNameStr = '파트 여러분 이름 한 번씩만 불러주세요~ "';

// in -> index
for (let item in ourPart) {
    partIndexStr += item + "! "; 
}
console.log(partIndexStr) 

// of -> 요소
for (let item of ourPart) {
    partMemberNameStr += item + "! ";
}
console.log(partMemberNameStr);

ourPart.forEach(item => {
    console.log(item);
});