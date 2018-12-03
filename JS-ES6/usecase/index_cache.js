var cachedIds=[];

let ids=[1,2,3,4];

function getX(num){

    var output;

    cachedIds.map(id=>{
        if(id===num)           
            output=`number ${id} Searched from cache`;                    
    })

    if (!output){
        ids.map(id =>{
            if(id===num) {
                cachedIds.push(id);            
                output=`number ${id} Searched from array`;            
            }
        })
    }   
    
    return output;
}

console.log (getX(1));
console.log (getX(1));

console.log (getX(2));
console.log (getX(2));