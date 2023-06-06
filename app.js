// 변수선언
const a = 20;
const b = 6;
//const 상수, 바뀌지 않는 값 (재할당x)
//number

let myName = "밍";
//공백 대신에 대문자를 사용 함 (첫문자는 무조건 소문자)
//string

myName = "최지민";
//let 변수, 재할당o

console.log(a+b+"살 " + myName);


const amIFat = true;
// data type - boolean, 값으로 true or false

const nus = null; //null, 값이 없음
let und; // undefined, 값이 정의되지 않음

console.log(amIFat);
console.log(nus);
console.log(und);


//배열 (리스트) array
const kko = "꼬미";
const dal = "달달이";
const shu = "슈";

const lovely = [0, kko, "미루", dal, "콩이", shu];
//대괄호를 사용해 그룹을 만듬

console.log(lovely);
console.log(lovely[1]); //배열에서 하나만 꺼내서 노출

lovely.push("은하"); //배열에 항목 추가
console.log(lovely);

