// console.log(x)
/*
const promise = new Promise((resolve, reject) => {
    console.log('立即执行');
    resolve(x);
    // reject('出错了');
})
promise.then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})


console.log('哈')

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    })
}
timeout(20).then((res) => {
    console.log(res);
})


// 异步加载图片
function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = function() {
            resolve(img);
        }
        img.onerror = function() {
            reject(new Error('can not load img at: ' + url))
        }
        img.src = url;
    })
}

loadImageAsync('https://gold-cdn.xitu.io/v3/static/img/frontend.1dae74a.png').then((res) => {
    console.log(res)
})


// resolve返回另一promise
let p1 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, '错了')
})

let p2 = new Promise((resolve, reject) => {
    resolve(p1)
})
p2.then((res) => {
    console.log(res, '2')
}).catch((error) => {
    console.log(error)
})


function ajax1(url) {
    // ...
}

// 不阻止后面继续执行
new Promise((resolve, reject) => {
    return resolve('成功-----'); // 加上return 后面就不会执行了
    console.log('继续')
}).then((res) => {
    console.log(res)
})


// 链式调用
new Promise((resolve, reject) => {
    resolve('1')
}).then((res) => {
    return 2
}).then((res) => {
    console.log(res, '最后')
})


new Promise((resolve, reject) => {
    resolve('123')
}).then(res => new Promise((re, rj) => {
        setTimeout(re ,5000, res)
    })
).then(res => console.log(res));

// catch
new Promise((resolve, reject) => {
    reject('123')
}).then(res => res + 2).then(res => res + 3).catch(err => console.log(err, 'xxxx'))



new Promise((resolve, reject) => {
    resolve('哈哈哈哈');
    reject('test'); // 无效， promise一旦状态改变，就永久保持改状态，不会再变
})
.then(res => console.log(res))
.catch(res => console.log(res, 'asd'))


console.log('123');
const someAsyncThing = function() {
    return new Promise((resolve, reject) => {
        resolve(x)
    })
}
someAsyncThing()
.finally(() => console.log('总会执行'))
.then(res => console.log(res))
.catch(err => console.log(err))


console.log('----------------------------')
*/

let a1 = new Promise((resolve, reject) => {
    resolve('1')
    // reject('2')
}).then(res => res + 3)

let a2 = new Promise((resolve, reject) => {
    resolve('2')
})
Promise.all([a1, a2])
.then(res => console.log(res)) // ['13', '2']
.catch(err => console.log(err)) // 2



// 有自己的catch，并不会触发all的catch
// 没有自己的catch就会触发all的catch
// 自己的catch执行完后，也会变成resolved
let b1 = new Promise((resolve, reject) => {
    reject('错误1');
}).catch(res => res)
let b2 = new Promise((resolve, reject) => {
    resolve('2')
})
Promise.all([1 ,b1, b2]).then(res=> console.log(res, 'sus')) // ['错误1', '2']
.catch(err => console.log(err, 'all'))


// promise.race
let c1 = new Promise((resolve, reject) => {
    // resolve('c1');
    reject('22')
})
let c2 = new Promise((resolve, reject) => {
    resolve('c2')
})
Promise.race([c1, c2]).then(res => console.log(res)).catch(err => console.log(err))


// 请求超时
// 和Promise.all一样，不是promise实例的，会调用Promise.resolve方法，将参数转为 Promise实例
Promise.race([123, new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, '111')
}), new Promise((resolve, reject) => {
    setTimeout(reject, 2000, '请求超时')
})]).then(res => console.log(res)).catch(err => console.log(err))
new Promise((resolve, reject) => {
    console.log('promise') // 本轮开始立即执行
})
console.log('哈哈')
setTimeout(() => console.log('time'), 0)
// promise.resolve是在本轮循环结束执行
// setTimeout(, 0) 是在下轮开始时执行


// Promise.try()

let obj = [1, 2, 3]
for (let i of obj) {
    console.log(i)
}