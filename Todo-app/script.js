

function loadtodo(){
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todolist": []}
    console.log(todos);
    return todos
}

function addtodotoLocalstorage(todoText){
    const todos = loadtodo();
    todos.todolist.push(todoText);
    localStorage.setItem("todos",JSON.stringify(todos))
}

function appendTodoInhtml(todoText){
    const todolist = document.getElementById("tasklist");

    const todoItem = document.createElement("li");
    todoItem.textContent = todoText;
    todoItem.classList.add("todoItem")
    
    const editbtn = document.createElement("button")
    editbtn.textContent = "Edit"
    editbtn.classList.add("editbtn")
    
    const deletebtn = document.createElement("button")
    deletebtn.textContent = "Delete"
    deletebtn.classList.add("deletebtn")

    todoItem.appendChild(editbtn)
    todoItem.appendChild(deletebtn)

    todolist .appendChild(todoItem)
}

document.addEventListener("DOMContentLoaded",()=>{

    const todoInput = document.getElementById("todoInput");
    const submitbtn = document.getElementById("addtodo");
    const todolist = document.getElementById("tasklist");

    submitbtn.addEventListener("click",(event)=>{
        const todotext = todoInput.value
        if(todotext == ""){
            alert("what you want to do")
        }
        else{
            addtodotoLocalstorage(todotext)
            appendTodoInhtml(todotext);
            todoInput.value = "";


        }
    })

    todoInput.addEventListener("change",(event)=>{
        const todoText = event.target.value;
        event.target.value = todoText.trim()

        console.log(event.target.value)
    })
  const todos = loadtodo()
    todos.todolist.forEach(todo =>{
        const newtodoItem =  document.createElement("li");
        
        newtodoItem.textContent = todo 
        todolist.appendChild(newtodoItem)
    })
})  