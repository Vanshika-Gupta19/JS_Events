// 1.) Promise.all() :- It takes an array of promises and will wait for all the promises in the array to resolve.

//example:
 Promise.all([
    doTask1a(),
    doTask1b(),
    doTask1c()
])
 .then (function(results){
    return doTask2(
        Math.max(
            results[0],
            results[1],
            results[2]
        )
    )
})


// Gate :- When we have multiple things happening and we do not know what order they're gonna finish in but all of them need to finish before moving on then we call that a "Gate".



// 2.) Promise.race() :- It also receieves an array of promises, however it only waits for whichever promise in the array resolves or rejects first...and everybody else gets ignored.

//example:
var p = trySomeAsyncThing();
Promise.race([
    p,
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Timeout!!")
        }, 3000);
    })
])
.then(
    success,
    error
);