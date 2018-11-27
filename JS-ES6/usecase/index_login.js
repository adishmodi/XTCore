const getUser = ( userinfo, resolve, reject) => {

    let mockuser={
        name:'sapient1',
        password:'sapient1'
    } 
    
       login(userinfo, resolve, reject);
   };

const login =(logininuser,resolve,reject) =>{

       if(logininuser.name ==='sapient' && logininuser.password ==='sapient'){
           resolve(logininuser);
       }
       else{
           reject('user login in failed');
       }
   }

   const successhandler=(user) =>{
           console.log('welcome  ' + user.name)
       }

   function failhandler (err) {
       console.log(err);
   }

   let userinfo={
       name:'sapient',
       password:'sapient'
   };
   
   getUser(userinfo, successhandler,failhandler);