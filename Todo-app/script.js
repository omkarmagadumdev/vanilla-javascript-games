function loadtodo(){
    //this function will load the todo items from borwser storage
    const todos = JSON.parse(localStorage.getItem("todo") ) || [];
    console.log(todos);

}
document.addEventListener("DOMContentLoaded",()=>{
    const todoinput = document.getElementById("todo-input");

    todoinput.addEventListener("chnage",()=>{
        //this call will fire when user types something in the input field
        
    })

    loadtodo(); 

});

