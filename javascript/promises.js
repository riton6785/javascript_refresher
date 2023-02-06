// promises have generally two stages ressolve and the reject when the promises is fulfilled then it is called the ressolve stage when the promise is not resoved is called the reject stage  

// basic way of creating the promises 
// 1 resssolve stage
const a = new Promise((resolve,reject)=>{
    resolve("Hello")
0})
// reject stage
const b = new Promise((resolve,reject)=>{
    reject("some error while handling")

})
// promises have three method then,catch and finally when the promise is fullifilled then block will be executed when the promise is rejected then at that time catch block will be executed and finnally block will be executed if any of the try and cattch block executes 

// 1 here the then block will be executed because the promise a is ressolved
a.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("some of the block is executed")
})

// 2 here the catch block will be executed because the promise b is rejected
b.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("some of the block is executed in the promise b")
})

// we can make the chain of the infinite length by just using this then catch chain 


// little complex use of the promise 
// suppose we are fetching the data from the api and if we get the data then promise will be ressolved otherwise it is rejected 

// here in this example we are generatig one random number using the rand function and if the number is even then we send the promise to ressolved stage otherwise it is rejceted 


const fetchData = ()=>{
    return new Promise((ressolve,reject)=>{
       setTimeout(()=>{
        let x= Math.floor(Math.random()*3)
        if(x%2==0){
            ressolve(`"the number is ${x} promise ressolved"`)
        }
        else{
            reject(`"the number is ${x} promise rejected"`)
        }

       },2000)
        
    })
    

}
fetchData().then((data)=>{
    console.log(data)    
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("finally promise has been executed")
})