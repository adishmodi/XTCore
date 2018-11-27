//Arrow fuction
//ES6 => Lambda function, arrow function

const greet = () => {
    return 'Welcome';
}
console.log(greet());

//

const hi =()=> console.log('hi');
hi();


//Args & parameters: single args

//const greetMe =(name)=>console.log(name);
const greetMe = name =>console.log(name);
greetMe('Adish');

//Args & parameters: single args with default or for more than 1 param
const greetMeNew = (name='adish') =>console.log(name);
const greetMeAnother = (name='Adish',lastname='Jain') =>console.log(name , lastname);
greetMeNew();
greetMeAnother('Adish');


///return values
const add=()=>{
    return 10+5;
}
console.log(add()); 


//if function return only value/variable/expression
const subs = () => 10-5;
console.log(subs());

//if function gets single param & return the same
const isActive=active => active;
console.log(isActive(true));

const isHidden =hidden => !hidden;
console.log(isHidden(true));

//fif no args and param, empty brackets
const tap= _ =>console.log('fetching records');
tap();