class A {
    constructor(x, y) {
        this.a = 1
        this.x = x;
        this.y = y;
    }
    eat() {
        console.log('eat');
        console.log(this.a)
    }
    static k() {
        console.log('k')
        console.log(this.a)
    }
}
A.a = 9
class B extends A {
    constructor(x, y) { // 子类有constructor，必须调用super方法
        super(x, y) // super内部的this指向B
        // super 作为函数时，只能在子类的构造函数内使用
        // console.log(this)
        this.a = 2
    }
    say() {
        console.log('say')
        super.eat() // 作为属性时，指代父类的原型对象
        // 所以定义在父类实例上的属性和方法是不能通过super调用的
        // 调用父类的方法时，父类的方法里的this指向子类实例
    }
    static look() {
        super.k() // 在静态方法中，super指向父类
        // 父类静态方法的this指向子类
    }
    // super不能直接使用，必须指明是当方法用还是属性
}
B.a = 0;
let b = new B(1, 2);
// console.log(b)
b.say()
B.look()

// 子类的__proto__指向父类，表示构造函数的继承
console.log(B.__proto__ === A)

// 子类的prototype的__proto__ 指向父类的prototype 表示方法的继承
console.log(B.prototype.__proto__ === A.prototype)

// 子类原型的原型=== 父类的原型

































