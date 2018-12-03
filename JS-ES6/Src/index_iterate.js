//this model is depriciated.
const list=new Array(1,2,3);
console.log(list);

const names=['Adish','SAFDS','AFDSF',3,3];
console.log(names);

names.forEach(function(item,index){
    console.log(item);
})


const videos={
    genere :"sc fi",
    list:['a','b','c','d'],
    findMovies(){
        var self=this;            
        this.list.forEach(function(movie,index){                
            console.log(self.genere,movie);          
        })

        this.list.forEach((movie,index)=>{
            console.log(this.genere,movie);            
        })
    }
}
videos.findMovies();