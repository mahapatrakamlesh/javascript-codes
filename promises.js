

//Promise is an object that encapsulates the result of an asynchronous operation.
function getPromise(){
    console.log("Entered Get Promise");
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
           // resolve('Here is data');
           //resolve('Here is data 1');
           //resolve('Here is data 2');
           reject('Exception');
        }, 3*100)
    })
}

function callPromise(){
    console.log("Entered call Promise()");
    getPromise().then((receivedData)=>{
        console.log(new Date(),receivedData);
    }).catch((errorMessage)=>{
        console.log(errorMessage);
    });
    console.log(new Date(),'I have requested for promise and will continue to execute other.');
}

callPromise();