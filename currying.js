let multiply = function(x,y){
    console.log(x*y);
}

let multiply = function(y){
    console.log(x*y);
}

let multiplydata= multiply.bind(this,2);

