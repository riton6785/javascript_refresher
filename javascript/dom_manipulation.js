console.log(document.body) //it will give the body tag
console.log(document.head)  // it will give the head tag
// console.log(document.documentElement) // it will give the complete html tag
console.log(document.body.firstElementChild) // this will give the first child
console.log(document.body.children) //it will give the all the children
console.log(document.body.childNodes)  // it will give the all child nodes here it will also consider the spaces and that are shown by the text
console.log(hello)
// Manupulating with id 
const getById=document.getElementById('hello') 
console.log(getById)
getById.innerText= "id"  // it will change the innertext of that id 

// manipulating with the classname
const getbyclass = document.getElementsByClassName('how')
console.log(getbyclass[0])  
getbyclass[0].textContent = "hey1"  // it will also change the inner content
console.log(getbyclass[0])
// manipulating with tag name 
const getbytag = document.getElementsByTagName("span")  //here it contains the all the  span tag we can use them as by targetting there index
getbytag[0].textContent = "span1"  // changing the name of the targetted tag
console.log(getbytag[1].textContent)
getbytag[1].innerHTML = "<p>after inner html</p>"  // .innerHTML is used to change the entire tag 

// using the css using the javascript
getbytag[0].style.background = "green"
getById.style.background= "black"
getById.style.color = "white"
const mybtn = document.getElementById("my_btn")
mybtn.style.background= "green"
mybtn.style.cursor= "pointer"
mybtn.style.padding = "10px"

// query selector
const query = document.querySelector(".you")
query.style.color = "white"
query.style.background= "black"
query.innerText = "innerText"

// get attribute and set attribute
console.log(mybtn.getAttribute("id"))  // it gieves the attribute name
mybtn.setAttribute('class',"btn-class") //it will set the attribute

// creating the html tag and assigning the content in it
function heading(){
    const h2 = document.createElement("h2")
    const text = document.createTextNode("Heading h2")
    h2.append(text)
    document.body.prepend(h2)  //prepend append the element at starting while append appends the element at last 
}

// deleting the node

function delete_heading(){
    h2 = document.querySelector('h2')
    h2.remove()
}

const deletes = document.querySelectorAll("button") //it will select all the buttons
deletes[1].onclick = delete_heading
mybtn.onclick = heading  //adding the onclick attribute using the javascript






// diifrence between the innertext and text content  as we can see that both are using for same funcionality
// https://www.geeksforgeeks.org/difference-between-textcontent-and-innertext/