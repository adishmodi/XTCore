class Order{

}
const order=new Order();

console.log(order instanceof Object);

class Person{

}
class Employee extends Person{

}
const emp=new Employee();
console.log ('employee is person', emp instanceof Person );
console.log ('employee is object', emp instanceof Object );


