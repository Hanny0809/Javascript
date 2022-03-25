"use strict";
// Array

// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const foods = ["🍕", "🍔"];
console.log(foods);
console.log(foods.length); // 2
console.log(foods[0]); // 인덱스에 해당하는 값을 받아옴
console.log(foods[2]); // undefined
console.log(foods[foods.length - 1]); // 배열의 마지막 값 출력

// 배열 Looping
// a. for
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

// b. for of
for (let food of foods) {
  console.log(food);
}

// c. forEach
// forEach : array에 들어있는 값마다 콜백함수를 수행
foods.forEach((food, index) => console.log(food, index));

// 4. addition, deletion, copy
// push : 아이템 추가(뒤)

foods.push("🍟", "🌭");

// pop : 아이템 삭제(뒤)

foods.pop();
console.log(foods);

// unshift : 아이템 추가(앞)
foods.unshift("🥪");
console.log(foods);
// shift : 아이템 삭제(뒤)
foods.shift();
console.log(foods);

// note!! shift, unshift are slower than pop, push
// 뒤에서 부터 추가하거나 삭제하는것은 기존에 있는 데이터들은 영향을 받지 않기 때문에 빠른 동작이 가능
// 앞에서부터 데이터를 건들게 되면 나머지 데이터들이 움직이기 때문에 효율적이지 않음(속도에 영향)

// splice : remove an item by index position
// splice(인덱스, 삭제아이템개수, 추가할 아이템)
// 삭제아이템 개수를 적지 않으면 지정한 인덱스부터 모든 아이템을 삭제시킴
foods.splice(1, 0, "🥐");
console.log(foods);

// combine two arrays => concat
const foods2 = ["🍳", "🥯"];
const newFoods = foods.concat(foods2);
console.log(`newFoods : ${newFoods}`);

// 5. Searching
// find theh index
// indexOf
console.log(foods);
console.log(foods.indexOf("🍕")); // 0 피자가 몇번쨰 인덱스인지?
console.log(foods.indexOf("🎈")); // -1 : 배열에 없는 아이템을 조회시 -1을 출력

// includes
// 아이템이 배열에 포함되어있는지 여부 확인 : true, false로 리턴 받음
console.log(foods.includes("🍕"));
console.log(foods.includes("🎈"));
