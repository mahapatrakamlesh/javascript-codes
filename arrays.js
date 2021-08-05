let arr = [1,2,3,4,"strings", {a: 'test'}];


//How to clear an array
//console.log(arr.length);
//arr.length=0;
//arr=[];
// start and delete count
//arr.splice(0,1);
//arr.splice(0,arr.length);
//console.log(arr);

arr.push(8);
//console.log(arr);

arr.unshift(0);
console.log(arr);

arr.splice(0,0,10);
console.log(arr);

arr.push([12]);
console.log(arr);

//splice
arr.push(...[11,12]);
console.log(arr);












