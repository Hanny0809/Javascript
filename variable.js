"use strict";

// 1. Variable
// let (added in ES6) -> Mutable Data Type
// rw(rean&write)
let name = "Hanny";
console.log(name);
name = "Hello";
console.log(name);

/*
전역변수 : 어플리케이션 실행~끝날때까지 항상 메모리에 탑재되어있음
가능하면 클래스, 함수, if, for문에서 정의하여 사용하는 것이 나음
*/
/*
var (don't never use this!)
호이스팅이 일어나기 때문에 var을 쓰면 안됌!!!
호이스팅 : 어디에 선언했느냐 상관없이 항상 상단에 올라가는것
블록 스콥이 아니고 함수 스콥임 
*/

// 2. Const : 값 변경 불가 -> Immutable Data Type
// r(read only)
// 보안상의 이유(해커들이 변경못하도록), 쓰레드 안전, 실수 방지
const daysInWeek = 7;

// 3. Variable Types
/*
primitive, single item : number, string, boolean, null, undefined, symbol => 값 자체가 메모리에 전달
object, box container => reference를 통해 값이 저장 
function, first-class function
함수도 데이터 타입임, 1급 객체 : 함수가 변수에 할당 가능, 함수의 파라미터로 전달 가능, 함수에서 리턴타입으로 리턴 가능

Note!
Immutable data types : premitive types, frozen objects 
Mutable data types : all objects by default are mutable in JS
*/

// C, Java와 달리 숫자형 데이터가 단순 => number 하나임

// number - special numeric values: infinity, -infinity, Nan
const infinity = 1 / 0; // infinity
const negativeInfinity = -1 / 0; //-infinity
const nAn = "not a number" / 2; // NaN

// string
const userName = "Hanny";
const gretting = `Hi, ${userName}`; // template literals (string)

/* boolean
flase : 0, null, undefined, NaN, ''
true : any other value
*/

// null : 빈값 선언
let x = undefined;

// undefied : 선언만 되고 값 지정 X
let y;

// symbol, create unique identifiers for objects
// map, 자료구조에서 고유한 식별자가 필요할때,
// 동시 다발적으로 일어난 코드에서 우선순위를 주고 싶을때
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true

// symbol은 그냥 출력하면 안됌 (description을 이용해서 string으로 변경해야함)
console.log(`${symbol1.description}, type : ${typeof symbol1}`); // id, type : symbol

// 4. Dynamic typing : dynamically typed language
/* js는 타입을 선언하지 않고 런타임 시 할당된 값에 따라 타입이 결정됌
다이나믹 타이핑으로 '타입스크립트' 탄생!!
*/

let text = "hello";
text = 1;

text = "7" + 5;
console.log(`${text}, ${typeof text}`); // 75 , string

text = "8" / "2";
console.log(`${text}, ${typeof text}`); // 4 , number

// Object : 일상생활에서 보는 물건과 물체들을 대표할 수 있는 박스 형태
const hanny = { name: "hanny", age: 20 };
hanny.age = 21; // 값 변경 가능
