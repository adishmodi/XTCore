

//way 1
function sayHello(){
    return 'Hello';
}

const hello=sayHello;
console.log( hello());


//way2 : inline assignment , named function
const hi=function sayHi(){
    return 'Hi';
}
console.log(hi());


//way3 : inline assignment: anonymous function
const greet=function(){
    return 'Welcome';
}
console.log(greet());

//way 3 , with arugments 
//ES5
const add=function(a=0,b=0){
    return a+b;
}
console.log(add(10,10));

//ES6 => Lambda function, arrow function

const addES6 = (a=0,b=0) => {
    return a+b;
}
console.log(addES6(10,10));