
function Utility(){}

//static api simulation
Utility.add=function(a,b){
    return a+b;
}

console.log(Utility.add(4222,2));

//built in math utility
console.log(Math.random());
console.log(Math.pow(2,4));

//static api in class
class OtherUtility{
    static add(a,b){
        return a+b;
    }

   static sub(a,b){
        return a-b;
    }
}
console.log(OtherUtility.add(222,399));
console.log(OtherUtility.sub(2,1));