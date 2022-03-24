"use strict";
// Class : 비슷한 데이터를 묶는 컨테이너와 같음 , 속성과 메소드로 구성
/* Object-oriented programming
class : template
object : instance of a class
Javascript classes
- ES6에서 추가 
- 그전에는 바로 object를 바로 만들고 function을 이용해서 template을 만들었음
*/

// Class 선언

class Person {
  // constructor : object 생성 시 필요한 데이터 전달
  constructor(name, age) {
    // fields : 전달받은 데이터를 클래스에 존재하는 속성에 할당
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name} : hello!`);
  }
}

// Object 생성
const hanny = new Person("hanny", 20);
console.log(hanny.name);
console.log(hanny.age);
hanny.speak();

// Getter and Setter
class user {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // get : 값을 리턴
  get age() {
    return this._age;
  }
  // set : 값을 설정
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

// Fields (public, private)
// 생성자를 사용하지 않고 속성 정의
class newFields {
  publicFields = 2; // 외부에서 접근가능
  #privateFields = 0; // 클래스 내부에서만 값이 접근 가능
}

const newField = new newFields();
console.log(newField.publicFields);
console.log(newField.privateFields); // undefined

// Static properties and methods
// object의 값과 메소드와 상관없이 class 자체에 연결
// 언제 사용 ? object에 상관없이 class에서 공통적으로 사용할경우(메모리 사용 효율)
class userInfo {
  static userTeam = "hid";
  constructor(userName) {
    this.userName = userName;
  }

  static printuserTeam() {
    console.log(userInfo.userTeam);
  }
}

const hannys = new userInfo("hanny");
console.log(userInfo.userTeam);
userInfo.printuserTeam();

// 상속과 다양성
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// 상속(extends 이용) =>
class Rectangle extends Shape {}
class Triangle extends Shape {
  // 오버라이딩 : 필요한 함수만 재정의
  getArea() {
    return (this.width * this.height) / 2;
  }
  // 공통적 + 함수 재정의 => super
  draw() {
    super.draw();
    console.log("삼각형 출력");
  }
}

const triangle = new Triangle(20, 20, "gray");
console.log(triangle.getArea());
triangle.draw();

// Class checking : instanceOf => 오브젝트가 클래스의 인스턴스인지 확인
