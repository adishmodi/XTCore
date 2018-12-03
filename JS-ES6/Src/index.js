
//Way1
// var myMap = new Map();

// function getX(num){
//     let ids=[1,2,3,4];

//     for (var [key,value] of myMap.entries())
//     {
//         if(key===num)
//             return `from the cache ${myMap.get(num)}`;        
//     }

//     for(var i=0; i< ids.length; i++){        
//          if(ids[i]=== num){
//             myMap.set(num,ids[i]);            
//             return `Searching ${myMap.get(num)}`;
//         }
//     }

    
// }

// console.log(getX(2));
// console.log(getX(2));

var cachedIds=[];

let ids=[1,2,3,4];
//var myMap = new Map();

function getX(num){

    var output;
    

    cachedIds.map(id=>{
        if(id===num){            
            output=`number ${id} Searched from cache`;            
        }
    })

    if (!output){
        ids.map(id =>{
            if(id===num) {
                cachedIds.push(id);            
                output=`number ${id} Searched from array`;            
            }
        })
    }
    
    // console.log(storeid);
    return output;
}

console.log (getX(1));
console.log (getX(1));

console.log (getX(2));
console.log (getX(2));