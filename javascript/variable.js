// 1. Use strict
// 2. added in ES 5
// 3. Use thid for Valina Javascript
// 4. 스크립트 문법을 엄격하게 적용하여 잠재적 오류도 발생시킨다 빡코딩연습가능

'use strict';



// 2. Variable, rw(read/write)
// 메모리의 값을 읽고 쓰는게 가능함
// let (added in ES6) 변수 선언

let globalName = 'global name';

{
    let name ='ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

//console.log(name); let은 블록 안에서 선언될 경우 밖에서 호출 불가
console.log(globalName);

// var (don't ever use this!) 
// var hoisting- 선언위치에 상관없이 항상 젤 위로 선언을 끌어 올려줌
// var has no block scope 블록을 이용하여 변수를 선언하여도 무시함
{
    age = 4;
    var age;
}

console.log(age);


// 3. constant r(read only)
// use const whenever possible.
// only use let if variable needs to change.
// const로 값을 선언 한 후에는 읽기만 가능하며 다른 값으로 변경 불가
const daysInWeek = 7;
const maxNumber = 5;

// note!
// Immutable date types: primitive types, frozen objects (i.e. object.freeze())
// 데이터 자체를 변경 할 수 없는 데이터 타입.
// ex) 'ellie'에서 아예 다른 'ellee'로 변경 내부에 있는 문자를 수정하는것은 불가

// mutable date types: all objects by default are mutable in JS 
// 변경이 가능한 데이터 타입 - object


// favor immutable data type always for a few reasons; 왠만하면 한번 작성한 값을 변경X
// - security 보안상의 이유- 다른 작성자에 의해 변경되는것을 방지
// - thread safety 동시에 값을 변경하는것을 방지
// - reduce haman mistakes 나중에 코드를 변경할때 실수 방지



// 4. Variable type
// primitive, single itme: Number, string, boolean, null, undefined, symbol
// - 더이상 작은 단위로 나눠지지 않는 하나의 작은 아이템
// 값 자체가 메모리에 저장됌

// object, box container
// - 여러개의 싱글 아이템을 한 단위, 한 박스로 나눠서 관리할 수 있도록 해줌
// 오브젝트를 가르키는 레퍼런스가 메모리에 저장됌

// function, first-class function
//  - 데이터 타입 중 하나. 변수에 할당이 가능함

// primitive
// - number 숫자를 담는 데이터 타입

const count = 17; //integer (정수)
const size = 17.1; //decimal number (소숫점의 숫자)

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numberic values: infinity, -infinity, NaN
// 연산할때 연산 가능한 숫자값이 나오는지 확인할때 쓰일 수 있음

const infinity = 1 / 0; //숫자를 0으로 나눴을때 -무한대의 숫자값
const negativeInfinity = -1 / 0;  //-숫자를 0으로 나눴을때 -무한대의 숫자값
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// - string -문자를 담는 데이터 타입

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;

console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `hi ${brendan}!`; //template literals (string)
// ``기호 안에 스트링값을 입력 후 ${변수}- 원하는 변수 값을 자동적으로 불러옴

console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + 'type: ' + typeof helloBob);// `` 기호를 사용 하지 않을 경우 사용 - space가 무시되어 나타남

// - boolean -참과 거짓을 나타내는 데이터 타입
// false: 0, null, undefined, NaN, ''(비어있는 string)
// true: any other value

const canRead = true;
const test = 3 < 1; //false

console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// - null - 값이 비어있다고 지정해주는 경우
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// - undefined - 선언은 되었지만 아무 값이 없는 경우
let X;
console.log(`value: ${X}, type: ${typeof X}`);

// - symbol - 고유한 식별자가 필요할때 사용하는 데이터 타입
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2); 
// 동일한 값으로 식별자를 만들어도 다른 심볼로 만들어짐
// 식별자를 string로 만들 경우 동일한 값으로 만들면 같은 식별자가 됌

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');

console.log(gSymbol1 === gSymbol2); //true
// 같은 값으로 동일한 symbol을 만들고 싶을때 사용

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
//console.log(`value: ${symbol1}, type: ${typeof symbol1}`);
//symbol은 .description 사용하여 호출하지 않으면 오류가 뜸

// - object - 물건과 물체들을 대표 할 수 있는 박스 형태
const ellie = { name: 'ellie', age: 20 };


// 5. Dynamic typing
// dynamically typed language - 변수를 선언할때 어떤 타입인지 선언하지 않고 프로그램이 동작할때 할당된 값에 따라 타입이 변경 될 수 있음

let text ='hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; //number 5를 string으로 변경됌
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; //string이 /(나누기)를 보고 number로 변경됌
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // boooooom- number로 변경되어 오류가 뜸

