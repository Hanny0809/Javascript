// Q1. 배열을 하나의 string으로 변환 => join
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(); // 구분자를 줄 수 있음, 비어있을 경우 , 로 구분
  console.log(result); // apple,banana,orange
}

// Q2. string을 배열로 변환 = > split(구분자, 전달받고싶은 개수(optional))
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(","); // 구분자 ,
  console.log(result);
}

// Q3. 배열 순서 거꾸로 만들기: [5, 4, 3, 2, 1] => reverse : 원본 배열자체를 변화시킴
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); //[5, 4, 3, 2, 1]
  console.log(array); //[5, 4, 3, 2, 1]
}

// Q4. 처음두개의 요소만 제외하고 새로운 배열 만들기 => slice(시작, 끝(optional)) : 끝 인덱스는 배제되기때문에 1추가!
// splice : 배열 자체를 수정해서 반환
// slice : 배열에서 원하는 부분만 리턴
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. 점수가 90인 학생 찾기
// find => callback 함수 전달, 첫번쨰로 true가 나온 요소를 리턴, 만약 없을 경우 undefined를 리턴
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. 등록한 학생들을 찾아 새로운 배열 만들기 => filter
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// map -> 배열안에 들어있는 요소 하나하나를 다른 것으로 변환 (각각의 요소가 함수를 거쳐서 새로운 값으로 변환)
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. 50점 미만의 학생이 있는지 확인
// some : 배열의 요소중에서 콜백함수가 리턴이 true값이 있는지 확인
{
  const result = students.some((student) => student.score < 50);
  console.log(result); // true
}

// Q9. 학생들의 점수 평균 reduce => 배열의 모든 요소들의 값을 누적하게 해줌
// reduceRight : 배열의 뒤부터
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  // 0은 초기값
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort()
    .join();
  console.log(result);
}
