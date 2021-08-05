// Four methods to create an object 
// 1) Object Literals
// 2) New Operator or constructor
// 3) Object.create method
// 4) class


var car = {
    name:'K'
}


//Constructor invocation pattern
function Car(model,color){
    this.model=model;
    this.color=color;
}

var c1 = new Car('TATA','WHITE');

var Car = {
    model: 'A',
    color: 'B'
}

var el=Object.create(Car);


// Class 

class Car {
    constructor(maker,price){
        this.maker=maker;
        this.price=price;
    }
}
var car1 = new Car("BMW", 100);



