// 1. String concatenation
console.log('my' + 'cat'); //'문자' + '문자'
console.log('1' + 2); // '문자' + 숫자 = 숫자가 문자로 변경
console.log(`string literals: 1 + 2 = ${1 +2}`);
//  string literals-  `` = 백틱(backtick)으로 감싸줌
// 특수문자열을 사용하지 않아도 특수문자('',""), 줄바꿈 가능


// *특수문자열
// '\' 문자열안에 특수문자('',"")가 겹칠경우 출력 가능
// '\n'줄바꿈
// '\t' tab 기능
console.log("ellie's \n\tbook");



// 2. Numeric operators - 연산자
console.log(1 + 1); //add 더하기
console.log(1 - 1); //substract 빼기
console.log(1 / 1); //divide 나누기
console.log(1 * 1); //multiply 곱하기
console.log(5 % 2); //remainder 나누고 나머지 값
console.log(2 ** 3); //exponentiation 거듭제곱



// 3. Increment and decrement operators - 더하기 빼기 연산자
// preIncrement 숫자열 앞에 ++
let counter = 2;
const preIncrement = ++counter; 
// (1) counter = counter +1;  +1을 업데이트 후
// (2) preIncrement = counter;  할당 됌
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// postIncrement 숫자열 뒤에 ++

// preIncrement 예제로 지금 counter = 3;
const postIncrement = counter++;
// (1) postIncrement = counter;  할당 후
// (2) counter = counter +1;  +1이 업데이트

console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// preDecrement, postDecrement --숫자열, 숫자열-- 도 같음

// 4. Assignment operators - 할당 연산자
// 연산자의 오른쪽에 있는 값을 왼쪽의 변수에 활당한다.

let x = 3;
let y = 6;
x += y; // x= x + y;
x -= y; // x= x - y;
x *= y; // x= x * y;
x /= y; // x= x / y;

// 5. Comparison operators - 비교 연산자
console.log(10 < 6); //less than 작거나
console.log(10 <= 6); //less than or equal 작거나 같거나
console.log(10 > 6); //greater than 크거나
console.log(10 >= 6); //greater than or equal 크거나 같거나

// 6. Logical operators: || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);
// 앞부터 순차적으로 진행. 세개의 값 중 하나라도 true면 더 이상 실행 하지 않음
//함수를 바로 바로 호출하는 가벼운 값을 앞으로 두는것이 효율적인 코드 작성 


// && (and)
console.log(`and: ${value1 && value2 && check()}`);
// 앞부터 순차적으로 진행. 세개의 값이 모두 true여야 true로 나타남
//함수를 바로 바로 호출하는 가벼운 값을 앞으로 두는것이 효율적인 코드 작성 

// often used to compress long if-statement  -null체크를 할때 종종 쓰임
// nullableOject && nullableOject.something
//    if (nullableOject != null) {
//       nullableOject.something;
//    }
// nullableOject가 null이면 false가 되기때문에 뒤의 nullableOject.something이 실행이 안됌

function check () {
    for(let i=0; i < 10; i++) {
        //wasting time 
        console.log('-_-'); //앞에서 true가 나올경우 나타나지 않음
    }
    return true;
} // 쓸데없이 시간을 낭비하다가 결국은 true값으로 나타나는 예제라고 함

// ! (not) 값을 반대로 바꿔줌
console.log(!value1);