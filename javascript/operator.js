'use strict';

// 1. String concatenation
console.log('my' + 'cat'); //'문자' + '문자'
console.log('1' + 2); // '문자' + 숫자 = 숫자가 문자로 변경
console.log(`string literals: 1 + 2 = ${1 +2}`);
//  string literals-  `` - 백틱(backtick)으로 감싸줌
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
console.log(10 < 6); //less than 작다
console.log(10 <= 6); //less than or equal 작거나 같거나
console.log(10 > 6); //greater than 크다
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



// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 데이터 타입을 변경해서 비교 검사함
console.log( stringFive == numberFive);
console.log( stringFive != numberFive);

// === strict equality, wno type conversion 데이터 타입을 변경하지 않고 비교 검사함
console.log( stringFive === numberFive);
console.log( stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
// 같은 데이터가 저장되어있지만 오브젝트는 레퍼런스타입으로 저장되기 때문에 false
console.log(ellie1 === ellie3);
// 오브젝트 자체를 할당받았기 때문에 true

// equality - puzzler
console.log(0 == false);  // true  -0, null, undefined 은 true로 간주됌
console.log(0 === false); // false -0은 참과 거짓을 나타내는 boolean 데이터 타입이 아니기 때문
console.log('' == false); // true
console.log('' === false); // false -참과 거짓을 나타내는 boolean 데이터 타입이 아니기 때문
console.log(null == undefined); // true
console.log(null === undefined); // false -다른 데이터 타입



// 8. Conditional operators: if
// if, else if, else

// if (true 일경우) {실행됌 }
// else if 아니면 다음 (true 일경우) {실행됌 }
// else 그것도 아니면 {실행됌 }

const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwon');
}


// 9. Ternary operator: ? -if문을 더 간단하게 
// condition ? value1 : value2;
// 조건 ? true면 실행 : false면 실헹

// 값을 할당하거나 간단하게 출력할때 사용
console.log(name === 'ellie' ? 'yes' : 'no');



// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

// if문에서 else if를 반복할 경우 사용하면 좋음

const browser = 'IE';

switch (browser) {
// switch (브라우저의 값이)
    case 'IE':
        console.log('go away!');
        break;
    // IE면 go away! 출력 후 멈춤
    case 'Chrome':
    case 'Firefox': // 반복되는 구문은 case를 연달아서 작성해도 됌
       console.log('love you!');
        break;

         break;
    default:
         console.log('same all!');
          break;
}


// 11. Loops -반복문

// while loop, while the condition is truthy, while (false로 나오기 전까지) 계속 반복
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${1}`);
    i--; // -1
    // 3 true
    // 2 true
    // 1 true
    // 0 false 멈춤
}

// do while loop, body code is executed first,  - do{먼저 실행 후} while {조건 검사}
// then check the condition.

do {
    console.log(`do while: ${i}`);
    i--;
} while ( i > 0 );

// for loop, for(begin; condition; step) for(시작하는 문장; 조건 ; 이후 진행)
// 시작하는 문장은 한번만 확인 조건과 step 반복
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
    // inline variable declaration
    // let 지역 변수 선언 후 작성
    console.log(`inline variable for: ${i}`);
}

// nested loops 중첩 루프
// cpu에 좋지 않아 피하는게 좋음
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++)
    console.log(`i: ${i}, j: ${j}`);
}

// break, continue - loop를 끝낼 수 있음
// break 끝내는것
// continue 지금것만 스킵하고 바로 다음으로 넘어가는것
// Q1. iterate from 0 to 10 and print only even numbers (use continue) 0부터 10까지 짝수만 출력
for (let i = 0; i < 11; i++ ) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`Q1: ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break) 0 부터 10 까지 출력하되 8을 만나면 스탑
for (let i = 0; i <= 11; i++ ) {
    if(i > 8) {
        break;
    }
    console.log(`Q2: ${i}`);
}