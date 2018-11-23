function sayHello(){
    console.log('Hello');    
}

sayHello();

//sayhello is object
sayHello.call();
sayHello.apply()
sayHello.bind();


//////
//a, b r argument
function add(a=0,b=0){
    // a= a||0;
    // b=b||0;
    const result=parseInt(a) +parseInt(b) ;
    console.log(result);
}
//here 4,3 are parameter
add(4,3);

add();//undefined ,undefined -> output will be nan

add(10,"10") ;//1010

add(10,23,23);//will read only first 2 param & do the required calculation

///////////////////////////////
function substruct(a,b){
    return a-b;
}
const result=substruct(10,1);
console.log(result);
////
function isValid(){
    return;
}

const status=isValid()?'valid' : 'not valid';
console.log(status);

///////
function login(username,password)
{
    if(username==="admin" && password ==="admin"){
        return true;
    }
    return false;
}
const isLoggedin=login('admin','admin')?'ok':'not ok';
console.log(isLoggedin);

const isLoggedin1=login('admin1','admin')?'ok':'not ok';
console.log(isLoggedin1);

////////
//ES5
function log(){
    console.log(arguments ) ; 
}

//ES6
function logES6(...args){
    console.log(args);
}

log('a','b','c','d','e')
logES6('a','b','c','d','e')


function doWeblog(page , ...args) {
    console.log(page,args);
}
doWeblog('productPage','13','Test',90);
doWeblog('loginPage','adish','adish');

