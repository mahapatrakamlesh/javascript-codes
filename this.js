// this - 

function foo(){
    var  x = 3;
    console.log(x);
    console.log(this.x);
}

//foo();

var obj = {
    x:5,
    xFoo:foo
}

obj.xFoo();