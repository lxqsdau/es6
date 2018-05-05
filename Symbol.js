// 一、关于Symbol
/**
 * Symbol是es6新增的原生数据类型，一共7中
 * Symbol作为方法使用，不能作为构造函数使用
 * typeof Symbol()  // symbol
 */

// 二、作用，作为对象属性唯一标识符，防止属性冲突
let sym = Symbol('c');
let obj = {
    a: 'a',
    b: 'b',
    [Symbol('c')]: 'c',
    [sym]: '值'
}
let obj2 = {
    [Symbol('c')]: 'c2'
}
let target = Object.assign({}, obj, obj2);
console.log(target)

// symbol唯一
console.log(Symbol('c') == Symbol('c')) // false

// 三、获取Symbol对象的属性值
console.log(target[sym]);
console.log(target[Object.getOwnPropertySymbols(target)[2]])

// 四、其它
// 不可枚举
for (let i in obj) {
    console.log(i) // a b
}
// JSON.stringify忽略Symbol
console.log(JSON.stringify(target)) // {"a":"a","b":"b"}
// 不能转化成number和string 
// sym + '1'
// +sym