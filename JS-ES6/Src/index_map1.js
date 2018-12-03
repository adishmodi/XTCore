// class userinfo{
//     constructor(id,name,city){
//         this.id=id;
//         this.name=name;
//         this.city=city;
//     }
// }


// let user1=new userinfo(1,'A','City1');
// let user2=new userinfo(2,'B','City2');
// let user3=new userinfo(3,'C','City3');

// let users=[user1,user2,user3];

// function getValue(num){

//     var myMap = new Map();

//     for(var i=0; i< users.length; i++){  
//         if(users[i].id=== num && myMap.get(num))
//             return `from the cache ${myMap.get(num)}`;
//         else if(users[i].id=== num){
//             myMap.set(num,users[i].name);
//             return `find ${myMap.get(num)}`;
//         }
//     }
// }

// console.log(getValue(2));
// console.log(getValue(2));

var myMap = new Map();
function getX(num){
    let ids=[1,2,3,4];
    
    for(var i=0; i< ids.length; i++){  
        if(ids[i]=== num && myMap.get(num))
            return `from the cache ${myMap.get(num)}`;
        else if(ids[i]=== num){
            myMap.set(num,ids[i]);            
            return `find ${myMap.get(num)}`;
        }
    }
}

console.log(getX(2));
console.log(getX(2));

