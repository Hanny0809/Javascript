"use strict";
// Array

// 1. λ°°μ΄ μ μΈ
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const foods = ["π", "π"];
console.log(foods);
console.log(foods.length); // 2
console.log(foods[0]); // μΈλ±μ€μ ν΄λΉνλ κ°μ λ°μμ΄
console.log(foods[2]); // undefined
console.log(foods[foods.length - 1]); // λ°°μ΄μ λ§μ§λ§ κ° μΆλ ₯

// λ°°μ΄ Looping
// a. for
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

// b. for of
for (let food of foods) {
  console.log(food);
}

// c. forEach
// forEach : arrayμ λ€μ΄μλ κ°λ§λ€ μ½λ°±ν¨μλ₯Ό μν
foods.forEach((food, index) => console.log(food, index));

// 4. addition, deletion, copy
// push : μμ΄ν μΆκ°(λ€)

foods.push("π", "π­");

// pop : μμ΄ν μ­μ (λ€)

foods.pop();
console.log(foods);

// unshift : μμ΄ν μΆκ°(μ)
foods.unshift("π₯ͺ");
console.log(foods);
// shift : μμ΄ν μ­μ (λ€)
foods.shift();
console.log(foods);

// note!! shift, unshift are slower than pop, push
// λ€μμ λΆν° μΆκ°νκ±°λ μ­μ νλκ²μ κΈ°μ‘΄μ μλ λ°μ΄ν°λ€μ μν₯μ λ°μ§ μκΈ° λλ¬Έμ λΉ λ₯Έ λμμ΄ κ°λ₯
// μμμλΆν° λ°μ΄ν°λ₯Ό κ±΄λ€κ² λλ©΄ λλ¨Έμ§ λ°μ΄ν°λ€μ΄ μμ§μ΄κΈ° λλ¬Έμ ν¨μ¨μ μ΄μ§ μμ(μλμ μν₯)

// splice : remove an item by index position
// splice(μΈλ±μ€, μ­μ μμ΄νκ°μ, μΆκ°ν  μμ΄ν)
// μ­μ μμ΄ν κ°μλ₯Ό μ μ§ μμΌλ©΄ μ§μ ν μΈλ±μ€λΆν° λͺ¨λ  μμ΄νμ μ­μ μν΄
foods.splice(1, 0, "π₯");
console.log(foods);

// combine two arrays => concat
const foods2 = ["π³", "π₯―"];
const newFoods = foods.concat(foods2);
console.log(`newFoods : ${newFoods}`);

// 5. Searching
// find theh index
// indexOf
console.log(foods);
console.log(foods.indexOf("π")); // 0 νΌμκ° λͺλ²μ¨° μΈλ±μ€μΈμ§?
console.log(foods.indexOf("π")); // -1 : λ°°μ΄μ μλ μμ΄νμ μ‘°νμ -1μ μΆλ ₯

// includes
// μμ΄νμ΄ λ°°μ΄μ ν¬ν¨λμ΄μλμ§ μ¬λΆ νμΈ : true, falseλ‘ λ¦¬ν΄ λ°μ
console.log(foods.includes("π"));
console.log(foods.includes("π"));
