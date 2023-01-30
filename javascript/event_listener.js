const heading = document.getElementById("heading")
const box1 = document.getElementById("box1")
const mybtn = document.getElementById("mybtn")
const input = document.querySelector("input")

mybtn.addEventListener("click",()=>{
    box1.style.backgroundColor = "magenta"
    box1.style.padding = "10px"
    box1.classList.add("classfordiv")  //classlist.add  is used to add the class we can use it in that condition whenevr we had defined some style in some class at that time we directly add that class
})

// context menu is the eventlistener used for rightclick
// e.preventdefault() is used for the preventing some default actions here when we rightclick on anything the menu popup using prevent default we had prevented that 
mybtn.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
    mybtn.style.backgroundColor = "purple"
    
})
// we can directly tackle  the whole page by just adding the event listener without tackling the any certain class or id here in this case we added the preventdefault whole page on right click

// commented
// addEventListener("contextmenu",(e)=>{
//     e.preventDefault()
// })

// onchange event listener here when we change the value of input tag the thing will happen

input.addEventListener("change",(e)=>{
    console.log(e.target.value)
})


// removing the eventlistener

// syntax
// variable.removeEventListener("listenername",funcctionname)

// but here in this case we need to pass the function name so at that time we cannot use the arrow function we need to add that event listener(which is to be removed) in the normal function

// syntax for adding eventListener in normal function
// box1.addEventListener("click",func1)