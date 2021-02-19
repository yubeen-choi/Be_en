'use strict';

// function 
// - fundamental building block in the program :프로그램을 구성하는 기본적인 블록
// - subprogram can be used multiple times :서브프로그램이라고 불리우며 여러번 재사용이 가능함
// - performs a task or calculates a value :한가지의 업무나 값을 계산하기 위하여 쓰여짐



// 1. Function declaration :정의하는 방법
// function name(param1, param2) { body... return; }
// one function === one thing :하나의 함수는 한가지의 일만
// naming: doSomething, command, verb :함수는 대부분 동사형태로 이름 지정
// e.g createCardAndPoint -> createCard, createPoint :함수안에서 여러가지의 일을 처리한다면 세분화 고민해보기
// function is object in JS

function printHello() {
    console.log('Hello');
}; // 함수 정의
printHello(); // 호출

function log(message) {
    console.log(message);
};
log('Hello!');



// 2. Parmeters
// premitive parameters: passed by value
// object parmeters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
};
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);



// 3. Default parameters (added in ES6) : 아무값이 안들어갔을때 미리 지정
function showMessage(message, from='unknown') { //디폴트값을 지정
    console.log(`${message} by ${from}`);
};
showMessage('Hi!');



// 4. Rest parmeters (addes in ES6)
function printAll(...args) { //... 배열변수 이름 지정
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // 간단하게
    for (const arg of args){ // for (A of B) B의 모든 값들이 차례차례 하나씩 A에 지정
        console.log(arg);
    }

    // 더 간단하게
    args.forEach((arg) => console.log(arg)); // forEach
};

printAll('dream', 'coding', 'ellie');



// 5. Local scope :안에서는 밖을 호출 가능하지만 밖에서는 안에 있는 함수 호출 불가능
let globalMessage = 'global'; // global variable :전역변수
function printMessage() {
    let message = 'hello'; // local variable :지역변수
    console.log(message);
    console.log(globalMessage);
};

printMessage();



// 6. return a valus
// : 함수 내에 사용하는 경우, 해당 함수 종료. 뒤에 다른 내용이 있더라도 다른 내용은 실행하지 않음
// : 함수 내에서 값을 도출 하고 싶은 경우, 함수 내에서 얻어낸 값으 return을 통해 상위에서 사용 가능
function sum(a,b) {
    return a + b; //함수 sum에 매개변수 a와 b를 더한 값이 저장
};

const result = sum(1, 2); //3 return을 통해 저장된 값 반영
console.log(`sum: ${sum(1, 2)}`);



// 7. Early return, early exit

// bad 나쁜 예
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
};

// good 좋은 예
function upgradeUser(user) {
    if (user.point <= 10) {
        return; //조건이 맞지 않을때는 빠르게 종료
    }
    // long upgrade logic... //조건이 맞을때만 실행
};



// First-class function 
// function are treated like any other variable :함수는 다른 변수와 마찬가지
// can be assigned as a value yo variable : 함수는 변수에 할당이 됨
// can be passed as an argument to other functions. :함수는 매개변수로 전달
// can be returned by another function :함수는 리턴됨


// 1. Function expression
// a function declaration can be called earlier than it is defiend (hoisted)
// a function expression is created when the execution  reaches it.

const print = function () { //anonymous function 함수의 이름이 없음
    console.log('print');
};
print(); //print
const printAgain = print;
printAgain(); //print
const sumAgain = sum;
console.log(sumAgain(1,3)); //4



// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
};

const printYes = function () {
    console.log('yes!');
};

const printNo = function print() {
    console.log('no!');
};

randomQuiz ('wrong', printYes, printNo);
randomQuiz ('love you', printYes, printNo);

// Arrow function :함수를 간결하게 만들어줌
// always anonymous :항상 이름이 없음
const simplePrint = function () {
    console.log('simplePrint!');
};

// 간단하게
const simplePrint = () => console.log('simplePrint!');


// IIFE: Immediately Invoked Function Expression
function hello() {
    console.log('IIFE');
}
hello();

// 따로 함수를 호출하지 않고 바로 호출
// 최근에는 잘 쓰이지 않지만 유용함
(function hello() {
    console.log('IIFE');
})();

