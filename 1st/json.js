// 1. JSON 객체 실습

const we = {
    name: "WE ARE",
    slogan: "우리는 하나다",
    part: ["plan", "design", "develop"],
    number: 200,
    printName: function () {
        console.log("name : ", this.name);
    },
    printNum: function () {
        console.log("number : ", this.number);
    },
};

console.log("typeof we : " + typeof we);

console.log("we : " + we);
console.log("we : ", we);
console.log("we : " + JSON.stringify(we));

we.printName();
we.number = 190;
we.printNum();

// 2. JSON 배열 실습

const dogs = [
    { name: "식빵", family: "웰시코기", age: 1, weight: 2.14 },
    { name: "콩콩", family: "말티즈", age: 3, weight: 2.5 },
    { name: "가을", family: "푸들", age: 2, weight: 3.1 },
];

console.log("dogs : " + dogs);
console.log("dogs : ", dogs);
console.log("dogs : " + JSON.stringify(dogs));

dogs.forEach(dog =>
    console.log(
        dog.name + 
        "이는 종이 " +
        dog.family +
        "이고, 나이가 " +
        dog.age +
        "세입니다 ~", 
    ),
);