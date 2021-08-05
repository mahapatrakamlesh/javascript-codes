// var x = 2;

// function testScope(){
//     var y = 3;
//     function testInnerScope(){
//         console.log(x,y);
//     }
//     testInnerScope();
// }

// testScope();


function d(x){
    return function(y){
        return x + y;
    }
}

var add5 = d(4);
//console.log(add5(5));
console.log(d(5)(5));















