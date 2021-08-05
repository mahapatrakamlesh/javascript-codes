function testScope(){
    console.log(y); //undefined
    // LHS are moved when it is not function
    //z();
    d();
    var y = 3;   //let handside are moved to top 
    // LHS are moved when it is not function
    var z = function(){
        console.log("HHHE");
    }

    function d() {
        console.log("Hello world");
    }
}

//console.log(y);
testScope();