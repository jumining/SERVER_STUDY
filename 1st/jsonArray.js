// level 2 
// 자신의 조원들을 소개할 수 있는 json Array 만들기

const team = [
    { name: "가나다", home: "Korea", age: 1, hobby: "골프" },
    { name: "라마바", home: "Korea", age: 2, hobby: "미술" },
    { name: "사아자", home: "Korea", age: 3, hobby: "피아노" },
    { name: "자카타", home: "Korea", age: 1, hobby: "독서" },
];

console.log("our team : ", team)

team.forEach(person =>
    console.log(
        person.name +
        "는 사는 곳이 " +
        person.home +
        "이고, 나이는 " +
        person.age +
        "이고, 취미는 " +
        person.hobby +
        "입니다.",
    )
);
