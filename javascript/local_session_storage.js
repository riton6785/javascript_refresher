const myinput = document.getElementById("my_input")
const button = document.getElementById("btn")
const deletes = document.getElementById("delete")

button.addEventListener("click",add_session_storage) //adding the onclick eventlistener by the normal function syntax 

// defining the on click eventlistener of button (adding the session storage)
function add_session_storage(){
    sessionStorage.setItem("key1",myinput.value) //set item stores and update the data it have 2 parameters first one is key and second one is value
}

// length function gives the length of the session storage
if(sessionStorage.length>1){
    alert(sessionStorage.getItem("key1"))
}

// function for deleting the vent listener using arrow function syntax
deletes.addEventListener("click",()=>{
    sessionStorage.removeItem("key1")  //this method the removes the passed key from the session storage
})

// sessionStorage.clear()  is used to clear all the session storage (means all the key value ) at once 

// _________Local Storage _____________________
// local storage also haves the same method as discussed above length,getitem(),setitem(),clear()
// but local storage stores the data until the data is deleted while session storage is only tab based if tab closese or changes the data is removed


// ___________________NOTE______________________
// in local and session storage both we can add the data in object and string form both (to store the data in object form write data in object form in value parameter of the setitem() in JSON.stringify method)







