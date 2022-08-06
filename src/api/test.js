const Promise = require('./promise')


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve(23323)
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(20)
        //     }, 1000)
        // })
        throw Error("custom error")
    }, 1000)
})


const secondPromise = promise.then((data) => {
    console.log(`first success is ${data}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("second resolve")
        }, 1000)
    })
}, (reason) => {
    console.log(`first reason is ${reason}`)
})
secondPromise.then((data) => {
    console.log(`second success ${data}`)
}, (reason) => {
    console.log(`second reason ${reason}`)
})