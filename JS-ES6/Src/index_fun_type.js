//'use strict'

//static or laxical scope
//use case1
var a=10;
function print_a(){
    console.log(a);
}

function run(){
   var a=100;
    print_a();
}
run();
//use case 2
//another way of implemet static scope by closure.

//dynamic scope : variable binding

//actor1 :callee
function greet(){
    console.log(this);
}

//actor2 : caller : default caller window
greet();
//or
window.greet(); //here method is bound with window object
//////
function getCordinates(...name){
    console.log(`${name} => x is ${this.x} y is ${this.y}`);
}

//getCordinates();
//binding on window
const map={
    x:10,
    y:90
};
getCordinates.call(map,'Google map','Other','ABC',1222);
//windows cordinates
window.x=0;
window.y=90
getCordinates.call(window, 'browser window' );

//2 apply
function getStocks(...stocks){
    console.log(`${this.name} ${stocks}`);
    console.log(stocks);
    
}

const stocks=[{id:1,value:34},{id:2,value:33}];
const obj={name1:'sapient'};

getStocks.apply(obj,stocks);
getStocks.apply(obj,stocks,['aa','aaa','aaaaaaaaaa']);

//bind
function increment(){
    return this.count++;
}
const CounterApp={
    count:0
};

const inc=increment.bind(CounterApp);

for(let i=0;i<10;i++){
    console.log('counter', inc());
}


///
name="aaa";
const training={
    name:'Adish',
    teach:function(){ //--global scope
        console.log(this.name);
        let self=this;
        let learn=function(){ //--teach scope
            //console.log('learn :', this.name);
            //console.log('learn :', training.name);
            console.log('learn', self.name );
        }
        //learn();
        learn.call(training);
    }
};
training.teach();