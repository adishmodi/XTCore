// Model
class Todo {
    constructor(title, date) {
        Todo.nextId++;
        this.id = Todo.nextId; // auto_increment
        this.title = title;
        this.completed = false
        this.date = date
    }
}
Todo.nextId = 0;
// Service
class TodosService  {    

    constructor(todo){
        this.todolist=[todo];
    }

    addTodo(title) {       
        let newtodo=new Todo(title,new Date());
        this.todolist.push(newtodo);        
    }

    editTodo(id, newTitle) {        
        for(var i=0; i< this.todolist.length; i++){           
            if (this.todolist[i].id === id)
                this.todolist[i].title=newTitle;
        }
    }

    completeTodo(id) {
        for(var i=0; i< this.todolist.length; i++){                       
            if (this.todolist[i].id === id)
                this.todolist[i].completed = true;
        }
    }

    completeAll() {       
        for(var i=0; i< this.todolist.length; i++){                       
                this.todolist[i].completed = true;
        }

    }
    
    deleteTodo(id) {
        for(var i=0; i< this.todolist.length; i++){           
            if (this.todolist[i].id === id)                
                this.todolist.splice(id, 1);
        }    
    }

    clearCompleted() {
        for(var i=0; i< this.todolist.length; i++){                       
            this.todolist[i].completed = false;
        }
    }

    viewTodos(filter) {
        for(var i=0; i< this.todolist.length; i++){                       
            this.todolist[i].completed = false;
            console.log(this.todolist[i]);
        }
    }
}

let todo=new Todo("Hello",new Date() );

const service = new TodosService(todo);
service.addTodo(' Adish');
service.editTodo(1,' Welcome');
service.completeTodo(1);
service.completeAll();
service.deleteTodo(1);
service.clearCompleted();
service.viewTodos();
//console.log(service) ;