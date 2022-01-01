// Function
// fundamental building block in the program
// subprogram can be used mutiple times.
// performs a task or calculates a value 

// 1. Function declaration
// function name(param1, param2) { body.. return;}
// one function === one thing
// naming : doSomething, command, verb
// ex) createCardPoint -> createCard, createPoint 
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();
// Hello 만 출력하니 쓸모가 없음

function log(message){
    console.log(message);
}

log('안녕하세요');

// JS는 타입이 없다보니 전달하는 메세지가 숫자형인지 문자열인지
// 확인할 수가 없다 


// 2. Parameters
// premitive parameters: passed by value 데이터싱글타입 > 메모리에 값이 저장
// Object parameters : passed by reference  객체 > 메모리에 레퍼런스가 저장

function changeName(obj){
    obj.name = 'coder';
}
const hanny = { name: 'hanny'};
changeName(hanny);
console.log(hanny);      // { name:'coder'}

// 3.Default parameters (added in ES6)
// function showMessage(message, from) {
//     console.log(`${message} by ${from}`);
// }
// showMessage('Hi');  // Hi ny undifined 

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi');  // Hi ny undifined 


// 4. Rest parameters (added in ES6)
// 배열형태로 전달 
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // for (const arg of args) {
    //     console.log(arg);
    // }

    // args.forEach((arg) => console.log(arg));
 }

printAll('dream', 'coding', 'hanny')


// 5. Local Scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';  // global variable
function printMessage() {
    let message = 'hello';      // 지역변수 (블럭안에서만 접근 가능)
    console.log(message);
    console.log(globalMessage);
    function printAnother() {   // 자식 함수는 부모 함수의 변수를 볼 수 있지만
        console.log(message);   // 부모 함수는 자식함수의 변수값을 확인할 수 없다
        let childMessage = 'hello';
    }
    // console.log(childMessage);  // error
}

printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1,2);  // 3
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit 
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good 
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
        // long upgrade logic...
    
}

first-Class function
functions are treated like any other variable
can be assogned as a value to variable 
cab be passed as 