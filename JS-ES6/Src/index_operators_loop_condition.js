var price=100;
var todayprice=100;
// var status = price ==todayprice;
var status = price ===todayprice;
console.log(status);

var stockvalue="100";
var todayvalue=100;
var stockstatus= stockvalue==todayvalue;
console.log(stockstatus);



///comparsional operator
var a =40;
var b=450;

var isBig =a>b;
if (isBig){
    console.log('A is Big');
}
else{
    console.log('B is Big');
}

//////
var isWorking=true;
var hasProject=true;
var workStatus = isWorking || hasProject;
console.log(workStatus);

/**
 * if first operator is truthy the result is first else the second one.
 */

//var greetings="";
var greetings="welcome";
var message= greetings || "Hello";
console.log(message);


var welcome="welcome";
//var welcome="";
var msg= welcome && "Adish";
var msg1= welcome && "Adish" && "aaa";

console.log(msg);
console.log(msg1);


//////////////////ternary operator
var age=18;
var eligibility= age>=18 ?"adult": "minor";
console.log(eligibility);

var counter=0;
var score=counter ?"You won":"you lost";
console.log(score);


//////////////////////type of 
var numb=1;
var str="hello";
var bool=true;
var un;
var nanRes=100 * un;
var infRes=100/0;
var fn=function hello(){};
var obj={id:1};
var nullres=null;

console.log(typeof(numb));
console.log(`The type of num is ${typeof numb }`);
console.log(`The type of num is ${typeof (numb) }`);
console.log(`The type of str is ${typeof str }`);
console.log(`The type of bool is ${typeof bool }`);
console.log(`The type of undefined is ${typeof un }`);
console.log(`The type of nan is ${nanRes }`);
console.log(`The type of nan is ${typeof nanRes }`);
console.log(`The type of infinity is ${infRes }`);
console.log(`The type of fun is ${typeof fn }`);
console.log(`The type of obj is ${typeof obj }`);
console.log(`The type of null is ${typeof nullres }`);

/////////////////
var actionType="add";
switch (actionType){
    case(""):
        console.log('nothing')
        break;
    case("add"):
        console.log('add')    
        break;
    case("other"):
        console.log('other')
        break;
    default:
        console.log('default')        
};

/////
var step;
for( step =0 ;step<5;step++){
    console.log(`walking step by step ${step}`);
}

/////





