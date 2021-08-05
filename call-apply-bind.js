var person = {
    firstName: 'Joe',
    getDetails : function(age,h){
        return `Name: ${this.firstName} with age ${age}  go ${h}`
    }
}

var secondObj = {
    firstName : 'Kamlesh'
}

//Call - comma
console.log(person.getDetails.call(secondObj,20));
//apply - Array
console.log(person.getDetails.apply(secondObj,[30]));
//Bind - Returns function
//console.log(person.getDetails.bind(secondObj));

let x = person.getDetails.bind(secondObj,50);
console.log(x());






