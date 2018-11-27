'use strict'

/**
 * function can be passed as parameter , can be stored in a variable, that variable points function,
 * can be executed later
 */

function greeeter(greet){
    greet('ssss');    
}

const hi=function(name){
    console.log('Hi',name);
};

greeeter(hi);

greeeter(function(name){
    console.log('Welcome',name);
});


///////////////

const mygreeter=greet=>greet('Adish');

mygreeter(name=>console.log(name));
const hii = name => console.log('Hi',name);
mygreeter(hii);

/////////////////
const getUser = (resolve,reject) => {
 let mockuser={
     name:'sapient1',
     password:'admin'
 }//biz loging
 if(mockuser){
     resolve(mockuser);
 }
 else{
     reject({err:'Something went wrong'});
 }
};

const login= (user,resolve,reject) =>{
    console.log(user);
    console.log(resolve);
    console.log(reject);
    if(user.name ==='sapient'){
        resolve;
    }
    else{
        reject;
    }
}

const successhandler = user =>{
        login(user);
    }

const failhandler = err =>{
    console.log(err);
}

getUser(successhandler,failhandler);