// Objects
// object = { key : value } 키와 값의 집합체

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const hanny = {
  name: "hanny",
  age: "20",
};
print(hanny);
// 중간에 요소 추가 가능
hanny.hasJob = true;
console.log(hanny.hasJob);

// 삭제도 가능
delete hanny.hasJob;

print(hanny);

//  ==> 나중에 유지보수 하는게 힘듬

//  Compoted properties
// key는 string 타입으로 명시 해야함
console.log(hanny.name); // => 코딩하는 순간 키에 해당하는 값을 받아올때
console.log(hanny["name"]); // => 어떤키가 필요한지 모를때, 런타임에서 결정될때, 동적으로 키의 관련된 값을 받아올때 쓰임

// ex
function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(hanny, "name");
printValue(hanny, "age");

// 클래스가 있기전에는 아래와 같이 사용
// Constructor Function
function Person(name, age) {
  // this = {}
  this.name = name;
  this.age = age;

  //return this
}

// in operator : property existence check (key in obj)
// 해당키가 오프젝트에 있는지 확인
console.log("name" in hanny); // true
console.log("age" in hanny); // true
console.log("random" in hanny); // false

// for..in & for..of
// for (key in obj) => 모든 키를 받아서 일을 처리할때
console.clear();
for (key in hanny) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for (value of array) {
  console.log(value);
}

// Fun cloning

const user = { name: "hey", age: 25 };
const user2 = user;
// user2.name = "tom";
console.log(user); // name: tom으로 바뀜

// 오브젝트를 복제하는 법
// old way
const user3 = {}; // 빈 오브젝트 생성
// 유저안에 키들을 돌면서 복제
for (key in user) {
  user3[key] = user[key];
}
console.clear();
user3.name = "gray";
console.log(user3); // name : gray
console.log(user); // name : hey

// new way
// Object.assign(dest, [obj1, obj2, obj3...])
// Object : js에 탑재

const user4 = Object.assign({}, user);

// 다른 예시
const fruit1 = { color: "red" };
const fruit2 = { color: "black", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // black 출력, 뒤에 나오는 오브젝트가 값을 계속 덮어쓰기 때문에
console.log(mixed.size);
