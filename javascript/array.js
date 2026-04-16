//object creation 
let person ={
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name);
console.log(person.age);
console.log(person.city);

//array data type
let numbers =[1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

//array with multiple data types
let mixedarray =[1, "Hello" , true , {name: " Alice"}, [1,2,3]]
console.log(mixedarray[0]);
console.log(mixedarray[1]);
console.log(mixedarray[2]);
console.log(mixedarray[3]);
console.log(mixedarray[4]);

//map on array
//map creates a new array by applying a function 
let newarray = [1,2,3,4,5];
let squaredarray = newarray.
map(num => num * num);
console.log(squaredarray);


