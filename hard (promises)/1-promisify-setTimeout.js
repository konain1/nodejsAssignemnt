/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            // console.log('waited for ',n)
            res('resolve afrer 2000 miliseconds')
        }, n);
    })
}

wait(2000).then((data)=>{
    console.log(data)
}).catch((err)=>console.log(err))

module.exports = wait;
