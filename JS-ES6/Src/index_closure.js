
function createCounter(){
    let count=0;
 
    return {
        increment(){
            count++;
            return count;
        },
        decrement(){
            count--;
            return count;
        },
    };
}

 createCounter();
// 

var a=createCounter.increment;
 console.log(a);
var b=createCounter.decrement;
 console.log(b);