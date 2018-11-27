//objection augumenation : instance level
//object from function, literal ,class can be augumentted.

//empty object
function Employee(){

}
const emp=new Employee();
//Augumentation : add
emp.id=11;
emp.location="Noida";
console.log(emp);
//Augmenation update
emp.location="GGN";
emp.department="aaa";
console.log(emp);
//augumention delete
delete emp.id;
console.log(emp);


const emp1=new Employee();
console.log(emp1);
console.log(emp['department']);

//augmentaion iteration
for(var key in emp){
    console.log(key,emp[key]);
}

//literal object creation 
const acc={
    id:11,
    name:'adddd'
} ;

console.log(acc);
//or  
const acccount=new Object();
acccount.id=11;
acccount.name="adadf";
console.log(acccount);