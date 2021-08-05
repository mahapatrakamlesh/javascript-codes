

console.log(1+1);  // Output -> 2 ,   Data type -> Number


/*When any string or non-string value is added to a 
string, it always converts the non-string value 
to a string implicitly*/

console.log("1" + "1");  // Output -> 11 , Data type -> String
console.log(1+"1"); // Output -> 11 , Data type -> String

const obj= {a:"foo"};
console.log(obj + "1"); // Output -> [object object]1 , Data type-> String
console.log([1] + ""); //Output -> 1 , Data type-> String



/* Arrays are taken as string */
console.log([1] + [1]) ; //Output -> 11 , Data type-> String
console.log([3,1] + [1,2]); // Output -> 3,11,2 , Data type -> String
//String - String = Not an Number
console.log([3,1] - [1,2]); // Output -> NaN



/*When an operation like subtraction (-), multiplication (*), 
division (/) or modulus (%) is performed,
 all the values that are not number are converted into the number*/
console.log([1] - [1]); // Output -> 0 ,   Data type -> Number


 // + operator with string converts to number 
console.log(1 + + "1"); // Output -> 2 ,   Data type -> Number

/* + operator with string => Number but the first operator String so 
second operator gets converted back to string*/
console.log("1" + + "1"); // Output -> 11 ,   Data type -> String









