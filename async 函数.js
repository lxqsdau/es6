// console.log('1')
/*

// 加上async 就是异步操作
async function test() {
    let a = await 1;
    return a // 返回值是then的参数
}
test().then(res => console.log(res))

console.log('2')
*/


async function asyncPrint() {
    let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1');
            resolve('返回') // 有resolve 才执行后面的 返回给result变量
        }, 2000)
    })
    console.log(result)
    return result
}
asyncPrint().then(console.log)

/*
let p = Promise.resolve();
for (let i = 0; i< 3; i += 1) {
    p.then(() => {
        console.log(i)
    })
}
*/
