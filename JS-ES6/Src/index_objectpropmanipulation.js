/**
 * if function is for object template then name should be noun
 * Data initialization
 * ->hardcoded
 * ->after object creation
 * ->during object creation: constructor parameter
 */
function Employee(id=1,name="Adish Jain", salary=1000){

    //instance member
    this.id=id ;//1;
    this.name=name ;//"Adish Jain";
    this.salary=salary; //1000;

    //method
    this.calculateTax=function(){
        return (this.salary/100)*10;
    }
}
let emp=new Employee();
//how to log /get object property
//object access properties .[]
console.log(emp);
console.log(emp.name);
console.log(emp.id,emp.name,emp.salary);
console.log(emp.calculateTax());

emp.name="Pankaj";
console.log(emp.id,emp.name,emp.salary);

//constructor paramter
let emp1= new Employee(12,"Mr. A" , 5000);
console.log(emp1);
console.log(emp1.calculateTax());

////Literal pattern
let customer={
    id:1,
    name:'Ram',
    caculate: function(){//but generally we dont create function in the literals
        return 111;
   }
};
console.log(customer);
console.log(customer.caculate());

customer.name="Jain";
console.log(customer);


///////////
//ES6 class  : to create object

class Account{
    constructor (accNum=111, name="adish"){
        this.accNo = accNum;//123;
        this.name=name;//"Adi";

    }

    withdraw(){
        return 'with draw';
    }
}

let acc=new Account();
console.log(acc,acc.withdraw());