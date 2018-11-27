'use strict'

// const getUser = (resolve,reject) =>{
//     resolve({
//         name : 'foo'
//     })
// };
// getUser((response) => console.log(response));

//promise
const getUser =() =>{
    let mockUser={
        name:'admin1'
    };

    return new Promise((resolve,reject)=>{
    if(mockUser.name==='admin'){
        resolve(mockUser);        
    }else{
        reject({
            err:'something went wrong'
        })
    }
    });    
}


// const promise=getUser();

// promise.then(function(response){
//     console.log(response);
// })
// promise.catch(function(err){
//     console.log(err);
// })

getUser()
    .then(response =>console.log(response.name))
    .catch(err=>console.log(err));