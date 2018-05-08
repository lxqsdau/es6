/*
function Love(x) {
    this.x = x;
}
Love.prototype.say = function() {
    console.log('爱你');
}

console.log(Object.keys(Love.prototype))


let methodName = 'getName';

class Point {
    constructor(x) {
        this.x = x;
    }
    say() {
        console.log('方法');
    }
    [methodName]() {
        console.log('名字');
    }
}

// console.log(typeof Point) function
// console.log(Point.prototype.constructor === Point) true
Point.prototype.eat = function() {
    console.log('eat')
}

var p = new Point(); 
// p.eat() eat
p.getName()
console.log(p.constructor === Point)
console.log(p)
// 在类内部定义的方法，在原型上是不可枚举的
console.log(Object.keys(Point.prototype))

console.log(Object.getOwnPropertyNames(Point.prototype))


console.log('-------------------------------------------------');

class A {
    constructor() {
        console.log('constructor')
    }
    say() {}
}
// A() 必须使用new来实例
let a = new A();

console.log(Object.getPrototypeOf(a) === a.__proto__);


console.log('****************************************');
// 类 不存在变量提升
// console.log(B)
class B {}

// 私有方法
const bar = Symbol('bar');
class C {
    foor() {
        this[bar]();
    }
    [bar]() {
        console.log('哈哈哈');
    }
}

let c = new C();
c[bar]()


console.log('****************************************');
// this指向 this默认指向实例

class D {
    constructor(name) {
        this.name = name;
        // this.printName = this.printName.bind(this);
        this.printName = () => {
            console.log(this.name)
        }
    }
    // printName(name = 'liu') {
    //     console.log(this.name)
    // }
}

let d = new D('123');
let { printName } = d;

printName()
console.log(D.name)

console.log('****************************************');
// 取值 赋值函数
class E {
    get age() {
        console.log('get');
        return 1
    }
    set age(age) {
        console.log('set', age);
    }
}

let e = new E();
console.log(e.age)
e.age = 2;

// 静态方法
console.log('****************************************');

class F {
    // myProps = 'props'; 不支持 定义类实例属性
    // 静态方法可以与非静态方法重名
    // static myProps = '123'
    static say() {
        console.log('say');
        // console.log(this) // this指向类
    }
    static look() {
        console.log('look')
    }
    eat() {
        console.log('eat')
    }
}
// 静态属性 子类也可以继承
F.a = 'a';
let f = new F();
console.log(f, 'f')
F.say()

// 父类的静态方法，子类可以继承
class G extends F {
    static method() {
        super.look()
    }
    hell() {
        console.log('你好')
    }
}

G.say()
G.method()
let g = new G();
console.log(G.a, 'aaa')
g.eat()
console.log(g.__proto__ === G.prototype) // true
console.log(G.__proto__ === F)
console.log(g.__proto__.__proto__ === f.__proto__)


*/
console.log('****************************************');


class H {
    constructor() {
        console.log(new.target) // 指向当前类
    }
}
class L extends H {
    constructor() {
        super() // 调用父类的构造方法
    }
}
// let h = new H();

let l = new L();

class A {
	a() {} // 定义在A的原型上
	b = () => {} // 定义在实例上
}
console.log(A.prototype);
const a = new A();
console.log(a);