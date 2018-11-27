//constructor pattern

function Employee(){

}

/**
 * emp is pointer /reference to employee object
 */
let emp =new Employee(); 
//console.dir(emp);
console.log(emp);
console.log(Employee.prototype);
console.log(emp.__proto__);
console.log(Object.getPrototypeOf(emp));