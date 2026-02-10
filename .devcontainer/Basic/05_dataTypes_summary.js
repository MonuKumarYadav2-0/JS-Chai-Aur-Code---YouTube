// Primitive Data Types

// 1. String
// 2.Number
// 3.Boolean
// 4.null
// 5.undefined
// 6.symbol
// 7.bigint

//Reference type/Non primitive Type

// 1.Array
// 2.object
// 3.Function


// Dynamically typed

// const score=100;
// const scoreValue=100.5

// const isLoggedIn=false;
// const outsideTemp=null;
// let userEmail;

// const id=symbol('123');
// const anotherId=symbol('123')      used for identify uniquely 

// console.log(id==anotherId); //false

// const bigNumber=65435168746354368423n


// We not need to mentioned the date type of the variable

//Arrays , Object , Function

// const heros = ["Monu","Shaktiman","naagraj"];

// let myObj = {
//     name:"monu kumar",
//     age:20
// }

// console.log(myObj);


// const myFunction =function(){
//  console.log("hello world");
// }

// myFunction()

// console.log(typeof myFunction);//Function (Object Function)



//*************************************** */

//m Stack (Primitive dataTypes) , Heap (Non-Primitive dataTypes)

let myYoutubeName="limitless" // (Goes in stack)
let anotherName=myYoutubeName

console.log(myYoutubeName);
console.log(anotherName);

anotherName="Code drill";

console.log(myYoutubeName);
console.log(anotherName);

let user1={
    email:"monu@google.com",
    name:"Monu Kumar ",
    age:21
}

console.log(user1);


let user2=user1

user1.name="Monu Kumar Yadav"
user2.email="monu@amazon.com"

console.log(user1);
console.log(user2);

