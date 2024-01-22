/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('wain 1')
    }, t);
    })
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve('wait 2')
        }, t);
    
    })
}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve('wait 3')
        }, t);
    
    })
}

function calculateTime(t1, t2, t3) {

    const promises = [wait1(t1), wait2(t2), wait3(t3)];
    return  Promise.all(promises).then((data)=>{
        console.log(data)
    })
}

calculateTime(1000,2000,3000).then(()=>{
    console.log('my work has done')
})
module.exports = calculateTime;
