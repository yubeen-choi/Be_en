// 객체지향언어
// class, Object
'use strict';

// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6 : class는 ES6부터 도입
//  - syntactical suger over prototype-based inheritance 기존의 프로토타입을 베이스로 문법만 추가가 됌


// 1. class declarations :calss 선언
class Person {
    // constructor :생성자로 필요한 데이터 전달
    constructor(name, age) {
        // fields
        this.name = name;
        this. age = age;
    }

    // methods
    speak() {
        console. log(`${this.name}: hello!`);
    }

}

const ellie = new Person('ellie', 20); //새로운 object를 만들때는 new라는 키워드 사용
console.log(ellie.name)
console.log(ellie.age)
ellie.speak();


// 2. Getter and setters 
class User {
    constructor(firstName, lastName, age) {
        this. firstName = firstName;
        this. lastName = lastName;
        this. age = age;
    }

    get age() { //값을 리턴
        return this._age; // 무한반복 방지를 위해 _ 등을 사용해 변수를 만들어줌
    }

    set age(value) { // 값을 설정, 값을 설정하기 때문에 value가 필요함
        // if (value < 0) {
        //         throw Errow('age can not be negative');
        // } 값이 말이 안될때 오류 띄우기

        this._age = value < 0 ? 0 :value;// 값이 말이 안될때 지정된 value를 사용
    }
}

const uesr1 = new User ('steve', 'Job', -1);
console.log(uesr1.age);



// 3. fields (public, private)
// Too soon! 가장 최근에 추가됨 (지원이 안되는 브라우저가 많기 때문에 아직은 사용 X)

class Experiment {
    // constructor를 사용하지 않고 필드 정의  
    publicField = 2; 
    #privateField = 0; //#기호 사용_ class 내부에서만 값을 읽고 변경할 수 있음
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and methods
// :데이터에 상관없이 class가 가지고 있는 고유한 값과 동일하게 반복되어 사용되는 method를 static을 사용하여 정의
// 오브젝트에 상관없이 class 자체에 연결되어있음
// 조건에 맞게 사용하면 메모리 사용을 줄여 줄 수 있음
// Too soon! 최근에 추가됨
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined 오브젝트에 할당 되는 것이 아니기 때문에  정의되지 않았다고 호출
console.log(Article.publisher);
Article.printPublisher();


// 5. inheritance 
// a way for one class to extent another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this. height = height;
        this. color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}


class Rectangle extends Shape {} // extends로 이전의 정의되었던 constructor와 method를 연장(상속)할 수 있음
class Triangle extends Shape { //필요한 함수만 다시 재정의해서 사용할 수 있음
    draw() {
        console.log(`▲`); //재정의한 함수만 호출 됌
        super.draw(); //super.A로 호출하면 부모의 함수까지 호출 가능
    }

    getArea() {
        return (this.width * this.height) / 2;
    }
} 


const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceof 
// A instanceof B : A(오브젝트)가 B(클레스)를 사용해 만들어졌는지 아닌지 T/F값 도출
console.log(rectangle instanceof Rectangle); //turn
console.log(triangle instanceof Rectangle);  //false
console.log(triangle instanceof Triangle);  //turn
console.log(triangle instanceof Shape);  //turn
console.log(triangle instanceof Object);  //turn