'use strict'

const getUser =(userDetails) =>{   

    return new Promise((resolve,reject)=>{
        if(userDetails.name==='admin'){
            resolve(userDetails);       
        }else{
            reject({
                err:`Something went wrong for ${userDetails.name}`
            })
        }
    });    
}

const getLogin =(userDetails) =>{    

    return new Promise((resolve,reject)=>{
        if(userDetails.name==='admin' && userDetails.password ==='sapient'){
            resolve(userDetails);
        }else{
            reject({
                err: `login failed for ${userDetails.name}`
            })
        }
    });    
}

const dashBoard = (user) => console.log(`Welcome to Sapient ${user.name}`);

let user1={
    name:'admin',
    password:'sapient1'
}

getUser(user1)
    .then(res => getLogin(res))
    .then(res=> dashBoard(res))
    .catch(err =>console.log(err.err))
  

let user2={
    name:'admin1',
    password:'sapient1'
}   

getUser(user2)
    .then(res => getLogin(res))
    .then(res=>dashBoard(res))
    .catch(err =>console.log(err.err))    
    