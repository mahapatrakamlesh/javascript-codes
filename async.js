
function getPromise(){
    console.log("Entered Get Promise");
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
           // resolve('Here is data');
           resolve('Here is data 1');
           //resolve('Here is data 2');
           //reject('Exception');
        }, 5*100)
    })
}


//something which going to call promise
async function callPromise(){
    console.log("Entered call Promise()");
    try{
        const data = await getPromise();
        console.log(data);
    }catch(error){
        console.log(error);
    }
    //console.log(new Date(),'I have requested for promise and will continue to execute other.');
}

//callPromise();

function call(){
    callPromise();
    console.log(new Date(),'I have requested for promise and will continue to execute other.');
}

call();

