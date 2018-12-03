
//ES5 
function Address(flatNo=1,street='street',city='city',zipcode='zipcode',state='state'){
    this.flatNo=flatNo;
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
    this.state=state;
}

function Employee(id=1,name='',address=new Address()){
    this.id=id;
    this.name=name;
    this.address=address;
    
}
let emp= new Employee();
console.log(emp);

let address=new Address(603,'Supertech Capetown',"Noida","201301","UP");
let emp1=new Employee(11,'Adish',address);
console.log(emp1);
////
//ES6
class Order{
    constructor(orderId='Ord00',value=0){
        this.orderId=orderId;
        this.value=value;
    }
}
class Customer{
    constructor(id=0,name='',order=new Order()){
        this.id=id;
        this.name=name;
        this.order=order;
    }
}
class CustomerComponent{
    constructor(){
        console.log('Customer UI is called');
    }    
    render(){
        let ord=new Order(1,1000);
        let cust=new Customer(1,'Adish',ord);
        console.log(cust)
    }
}


new CustomerComponent().render();