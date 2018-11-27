'use strict'

function getEmployee(employee){
   
    //ES 5 pattern
    // const id=employee.id;
    // const name=employee.name;
    // const salary=employee.salary
    // console.log(`Id ${id}`);
    // console.log(`Name ${name}`);
    // console.log(`Salary ${salary}`);


    //ES 6 pattern
    const {id,name,salary } = employee;

    console.log(`Id ${id}`);
    console.log(`Name ${name}`);
    console.log(`Salary ${salary}`);


}
//other way
function getEmployee1({id,name,salary}){
    console.log(`Id ${id}`);
    console.log(`Name ${name}`);
    console.log(`Salary ${salary}`);
}

getEmployee({
    id:1,
    name:'Adish',
    salary:1111
});

getEmployee1({
    id:1,
    name:'Adish',
    salary:1111
});

//////////////////////////////////////////

const getStocks =() =>{
    return {
        id:1,
        value:100,
        symbol:"NSF"
    }
}
console.log(getStocks());
//or 
const getStocks1 =() =>({
        id: 1,
        value: 100,
        symbol:"NSF"    
})
console.log(getStocks1());
//object descruting :with returning object | input

const getStocks2=(id,value,symbol)=>({
    id:id,
    value:value,
    symbol:symbol
})
console.log(getStocks2(3,100,"$"));

//
const getStocks3=(id=0,value=1,symbol='#')=>({
    id,
    value,
    symbol
})
console.log(getStocks3());
console.log(getStocks3(3,100,"$"));

///////////////
const getCustomer = ({id,address:{city,State,Country}}) => {
    console.log(id,city,State,Country);
}

const customer={
    id:1,
    address:{
        city:"Delhi",
        State:"Delhi",
        Country:"India"
    }
}

getCustomer(customer);