
//ES5
function Person(name='default') {
    console.log('Person');
    this.name=name;
}

function Employee(name) {
    Person.call(this,name);    
    console.log('Employee');
}

Employee.prototype=Object.create(Person.prototype);

const emp=new Employee();
console.log(emp);
console.log(emp.name);

const emp1=new Employee('Adish');
console.log(emp1.name);


//////////ES6
class Account {
    constructor(balance=1){
        this.balance=balance;
        console.log('Account');        
    }

    calBalance(){
        return this.balance;    
    }
}

class SavingAccount extends Account {  
    constructor(accno=1, name='name',balance) {        
        super(balance);
        this.accno=accno;
        this.name=name;
        console.log('Saving Account');
    }    
    
}

const sacc=new SavingAccount();
console.log(sacc);
console.log('cal bal',sacc.calBalance());


const sacc1=new SavingAccount(2,'adish',100000);

console.log(sacc1);
console.log('cal bal',sacc.calBalance());


//Literal inheri

const parent={
    id:1
}

const child=Object.create(parent);
child.name='adish';
child.foo='foo';
console.log(child);

/////////////

//no parent , indepenent : hero -> null
const hero =Object.create(null);
hero.name='Spider man';
console.log(hero);

/////////////
const favFood={
    name:'Dosa',

    toString(){
        return this.name;
    }
}

console.log(favFood.toString());