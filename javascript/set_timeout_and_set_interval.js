const mybtn = document.querySelector("button")

const printbio = (name,age)=>{
    console.log(`name is ${name} and age is ${age}`)

}
// using the settimeout by calling the function
setTimeout(printbio,2000,"aditya",22) // here the first parameter is function name second one is time means after hoe much time the function will be called and third and fourth parameters are the functions parameters


// using the settimeout in arrow function in same place
//id variable is used to store id to use in clear timeout it can be used in both ways of declaration of the set timeout setTimeout method returns id
const id = setTimeout((name,greeting)=>{
    console.log(`hello ${name} ${greeting}`)
},3000,"aditya","greeting")

mybtn.addEventListener('click',()=>{
    clearTimeout(id) //this method clears the timeout means that timeout will not be executed and that block of code remain unexecuted
})

// ______________setinterval()__________________
// all the syntax are same as above used in settimeout 
// here clearInterval() is there instead clearTimeout() 
// setinterval is called continously after the defined time while settimeout() is called once only after the defined time 