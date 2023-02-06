const arr = [1,2,3,4,5,6,7,8,9]
function multiply(arr,x){
    const ans = []
    for (let index = 0; index < arr.length; index++) {
        ans.push(arr[index]*x)
        
    }
    console.log(ans)

}
function divide(arr,x){
    const ans = []
    for (let index = 0; index < arr.length; index++) {
        ans.push(arr[index]/x)
        
    }
    console.log(ans)

}
multiply(arr,10)
divide(arr,10)
// here we can see that multiply and divide function both are little bit similiar just the operator are diffrent for that only we have to write the complete function again 
// here we can use the call back function 
// in call back function we pass the function as a parameter to the other function and there in that function we call that function 
// the function in which the parametere is passed is called the parent function 

// lets do the above exampe using the callback function 

function calculator(arr,callback){
    const ans =[]
    for(let i=1;i<arr.length ;i++){
        const element = callback(arr[i])
        ans.push(element)
    }
    console.log(ans)
    

}
function multiply(x){
    return x*10
}
function divide(x){
    return x/10
}

calculator(arr,multiply)
calculator(arr,divide)
calculator(arr,(x)=>x+10) //magic of arrow function
calculator(arr,(x)=>x-10)
// here  we can see that we had passed the function in calculator function and that function is call back function that we had called inside the calculator function which is diffrent diffrent time 
// means here we had called multiply and divide both function by just passing them in calculator funtion and  it reduces the code 
// note
// magic of arrow function 
// here in sum and subtract we had not defined any specific function we just used the arrow function because whenever we need to just return the value from the arrow function at that time we  just pass the expression  here in our case we just write x+10 means it will return x+10

// using the call back function for asynchronus programing

const fetchs =[]

// parent function
const fetchData = (callback)=>{
    console.log("hello")
    console.log(fetchs)

   setTimeout((callback)=>{

    fetchs.push(
        {
            'name':'data1',
            'id':1
        },
        {
            'name':'data2',
            'id':2
        },
        {
            'name':'data3',
            'id':3
        },
    )
    console.log(fetchs)
    callback()

   },4000,callback)

};

// call back function 

const displayData = ()=>{
   setTimeout(()=>{
    for(let i=0;i<fetchs.length ;i++){
        const p = document.createElement('p')
        p.innerText= fetchs[i].name
        document.body.append(p)
    }
   
   },1000)
    
}
// calling the parent function with callback function
fetchData(displayData)

// here the  fetchData is the parent function suppose this function fetch some data from the some api from the internet now it can take time as per the data size to fetch so we are using that use case and to achieve that we had used the setTimeout and put the 4 second(means assuming that it take 4 second to fetch data) 

// in the call back function we had created one p element and appnded it to the html and set its inner text equals to the name of the objects of array that we had got from the fetchdata, here also we had used setTimeout of 1 second assuming that the it will take 1 second to print all the data after getting it  

// we passed the diplayData function as the callback function in the fetchData function 
// so overall execution time will be 5 second 4 second for parent function(fetchData) and 1 second for callback function(displayData) called from the parent function


// note
//  here we can also do that without callback function we need to just pass the setTimeout time for the displaydata function more than the fetchData function because displaydata will work after the fetchdata fetches some value this is synchronus way .


