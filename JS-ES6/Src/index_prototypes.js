//how to use existing (default) prototype object for code sharing.

function Account(){
    this.id=1;
    this.name='';
    this.calInterest=function(){
        return 20;
    }
    
    
}
Account.prototype.balance=1000.0;

///common method
Account.prototype.calculateInterest=function(p =1000 ,r=10.5 ,t=12 ){
    return p * r * t / 100;
}

const acc=new Account();
acc.id=100;

console.log(acc.balance);
console.log('Interest for acc',acc.calculateInterest());

const acc1=new Account();
acc1.id=200;
acc1.calculateInterest=function(p =1000 ,r=11.5 ,t=12 ){
    return p * r * t / 100;
}

console.dir('interest for acc1' , acc1.calculateInterest());

//hasOwnproperty
console.log(acc.hasOwnProperty('balance')) ;
console.log(Account.prototype.hasOwnProperty('balance')) ;
console.log(acc.hasOwnProperty('id')) ;

