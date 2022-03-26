/* 브라우저에서 동작하는 웹사이트의 클라이언트가 서버와 통신하는것이 바로 HTTP
Hypertext Transfer Protocal : Hypertext를 어떻게 서로 주고받을 수 있을지 규약한 프로토콜 
브라우저는 서버에 Request, 서버는 브라우저에 Response 
AJAX : 웹페이지에서 동적으로 서버에게 데이터를 주고 받을 수 있는 기술 
예) XHR (XMLHttpRequest) : 브라우저 API에서 제공하는 오브젝트 
fetch()API로 데이터를 주고 받을 수 있음 
XML : HTML와 같이 마크업 언어 중 하나 
 */

/*JSON : Javascript Object Notation
키와 값으로 이루어진 데이터 포맷 
브라우저 뿐만 아니라 모바일에서 서버와 데이터를 주고 받을 때 서버와 통신을 하지 않아도 오브젝트를 파일 시스템에 
저장할때도 json 데이터 타입을 많이 이용
- 간단한 파일 포맷
- 텍스트 기반이라 가벼움
- 읽기 쉬움
- 키와 값으로 이루어짐
- ** 프로그래밍 언어와 플랫폼에 상관없이 사용 가능 (C, C++, JAVA, Python, PHP) **
- 콜백함수를 전달해서 json을 세밀하게 통제할 수 있음 
*/

// 1. Object to JSON
// stringify(obj)

const dog = {
  name: "Haru",
  color: "white",
  size: null,
  birthDate: new Date(),
  // 함수와 symbol은 json에 포함되지 않음
  jump: () => {
    console.log(`${this.name} jump!`);
  },
};

let json = JSON.stringify(dog);
console.log(json);

// 원하는 properti만 골라서 json 출력
let json2 = JSON.stringify(dog, ["name", "color"]);
console.log(json2);

// 콜백함수
let json3 = JSON.stringify(dog, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "name" ? "hanny" : value;
});
console.log(json3);

// 2. JSON to Object
// parse(json)

console.clear();

const obj = JSON.parse(json, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj.birthDate.getDate());
// obj.jump ==> obj에는 데이터만 들어가있고 함수는 포함되지 않기때문에 에러 발생!!

// 유용한 사이트
/*
 
MDN ➡️ https://developer.mozilla.org/en-US/d...
JavaScript.info ➡️ https://javascript.info/json
JavaScript.info 한국어 ➡️ https://ko.javascript.info/json 

JSON Diff checker: http://www.jsondiff.com/
JSON Beautifier/editor: https://jsonbeautifier.org/
JSON Parser: https://jsonparser.org/
JSON Validator: https://tools.learningcontainer.com/j...
*/
