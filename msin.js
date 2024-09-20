/*
students Tasks 
[1] use sweet allert if input ematy اشوف لو فاضي 
[2] check if task is exists مخليش مهمه تضاف مرتين 
[3] create delete all tasks button زر يشيلك كل المهام وكل الفينيش  
[4] ctrate finish all tasks button 
[5] add to tasks the local storage 
*/




// setting up variable 
let theInput = document.querySelector(".add-task input")
let theAddbutton = document.querySelector(".add-task .plus")
let tasksContainer = document.querySelector(".tasks-comtent")
let tasksCount = document.querySelector(".tasks-count span")
let tasksCompleted = document.querySelector(".tasks-completed span")
let tasksContainerSpan = document.querySelector(".tasks-comtent span")

        // focus oninput field
        window.onload = function(){
            theInput.focus();
        };

        // adding the task
        theAddbutton.onclick = function(){
            
        // if inpUt is empty
        if(theInput.value === ''){
            // add message from sweet aletr 
            swal.fire({
                title:`Error`,
                text:"pleas add the task`",
                button:"again",
                icon:`error`,
                imageUrl:`download.jpeg`,
                
            })
        }else{
        let noTsksMessage = document.querySelector(".no-tasks-message")

        // check if span with no tasks message is exist 
        if(document.body.contains(document.querySelector(".no-tasks-message"))){

        //remove no tasks Message
        noTsksMessage.remove();
    }

        // create span element 
        let mainSpan = document.createElement("span")

        // create delete button 
        let deletElement = document.createElement("span");

        // create text to main span
        let Text = document.createTextNode(theInput.value);

        // create text to delet 
        let deletText = document.createTextNode("delete");

        // add text to main span
        mainSpan.appendChild(Text)

        // add class to main span 
        mainSpan.className = "task-box";

        // add text to delet 
        deletElement.appendChild(deletText)

        // add class to delete button 
        deletElement.className = "delete"

        // add delete button and to main span
        mainSpan.appendChild(deletElement);

        // add the task to the contaner 
        tasksContainer.appendChild(mainSpan);

        // emty the input
        theInput.value = ""

        // focus on field
        theInput.focus();
        
         // calculate tasks
        calculateTasks()


}
    document.addEventListener('click' , function(e){

    // delet taks
    if (e.target.className=='delete'){

        // remove current taks 
    e.target.parentNode.remove()

    // cack number of tasks inside the container 
    if(tasksContainer.childElementCount == 0){
        cteateNoTasks();
    }
    }

         // finish taks
    if (e.target.classList.contains("task-box")){

        // toogle class finished
    e.target.classList.toggle("finishhed")

    }

    // calculate tasks
    calculateTasks()
    
})

    // function to create no tasks messags
    function cteateNoTasks(){

    // ctreate message span element  
    let messgSpan = document.createElement("span");

    // create the messge text 
    let mesText = document.createTextNode("no tasks to show")
    
    //a add text to messge span 
    messgSpan.appendChild(mesText)

    // add class to messge span 
    messgSpan.classList = 'no-tasks-message';

    // append the messge span element to the task contaner 
    tasksContainer.appendChild(messgSpan)
}
}
  