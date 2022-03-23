// 1. Increment and decrement operators

let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter
console.log(preIncrement); // 3

const postIncrement = counter++;
console.log(postIncrement, counter); // 3, 4
// postIncrement = counter
// counter = counter + 1

// 마이너스도 위와 같이 동작!

// 2. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 3. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// ** Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || or  ==> finds the first truthy value
console.log(`or : ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("hi");
  }
  return true;
}

/* or을 사용할 경우 간단한 애들을 앞에두고,  연산을 많이 하는 함수나 expression같은 아이들은 뒤에 두는 것이 효율적임 */

// && and  ==> finds the first falsy value
console.log(`and : ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("hi");
  }
  return true;
}

// null 값 체크도 할 수 있음

// if (nullableObject != null) {
//   nullableObject.something;
// }

// ! not
console.log(!value1); // false

// Equlity
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion => 타입을 변경해서 검사함
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strinc equlity, no type conversion => 타입에 신경써서 검사 (사용권장)
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference => ref형태로 저장
const hanny1 = { name: "hanny" };
const hanny2 = { name: "hanny" };
const hanny3 = hanny1;
console.log(hanny1 == hanny2); // false
console.log(hanny1 === hanny2); // false
console.log(hanny1 === hanny3); // true

// conditional operators : IF
// if, else if else
const name = "hanny";
if (name === "hanny") {
  console.log("hi hanny");
} else if (name === "jenny") {
  console.log("hi jenny");
} else {
  console.log("unknown");
}

// 삼항연산자 Ternary operator : ?
// condition ? true : false
console.log(name === "hanny" ? "true" : "false");

/* Switch statement
use for multiple if checks
use for multiple type checks in TS
*/
const browser = "Chrome";
switch (browser) {
  case "IE":
    console.log("go away");
    break;
  case "Chrome":
  case "Firefox":
    console.log("good");
  default:
    console.log("nothing");
    break;
}

// Loops
// while : 값이 true가 될때까지 반복
let i = 3;
while (i > 0) {
  console.log(`while : ${i}`);
  i--;
}

// do while : do안에 있는 로직을 한번 실행하고 조건 검사
do {
  console.log(`do while : ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (let i = 0; i < 10; i++) {
  console.log(`inline variable for : ${i}`);
}

// break, continue

// 1
for (i = 0; i <= 10; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(`even number : ${i}`);
}

// 2

for (i = 0; i < 10; i++) {
  if (i === 8) {
    break;
  }
  console.log(`i : ${i}`);
}
