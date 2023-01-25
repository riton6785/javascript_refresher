//  arrow functions syntax
// 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
const myfunc = (a,b) =>{
    console.log(a+b)
}
myfunc(10,20)

// find method
// find method is used to find the something in the array it has 2 parameter value and index value is the all the array element iterated one by one and index is the index number of that value 
const arr = [10,20,11,12,15,17]
// let's store the returned value in the variable 
// it can return only single value
const variable = arr.find((value,index)=>{
    if (value>15){
        return value
    }

})
console.log(variable) //here 20 and 17 both are greater than 15 but find method return single value and 20 comes first


// filter method 
// the working is same as the above find method but instead of returning the single value it returns the array 
const variable1= arr.filter((value,index)=>{
    if(value>11){
        return value
    }
})
console.log(variable1) //here it contains an array because filter method returns the array means here in this case it return all the value greater than the 11


// every method check the condition with every elemnt of the array and if any of the condition is false it return false eg in this case ebery elemnt is not greater than 15 so it return false
const every = arr.every((value,index)=>{
    return value>15
})
console.log(every)


// some method working is same as every method but if any of the single condition is true than it will return true eg in this case some elemnt are greater than 15 so it return true
const some = arr.some((value,index)=>{
    return value>15

})
console.log(some)


// for of loop
for(value of arr){
    console.log(value)
}

// for each loop 
// it does not return anything
arr.forEach((value,index)=>{
    console.log(value)
})

// map function  
// map functions removes the  limitations   of for each loop it returns the array this array will be the new array it will not impact the original array
const maparray = arr.map((value,index)=>{
    return value = value+5

})
console.log(maparray)

// reduce function
// first parameter is the previousvalue second one is current value third one is the index number fourthone is array here the iteration of the loop starts from the first index so at first time the previous value will be the value at zeroth index
const reduce = arr.reduce((previousvalue,currentvalue,index,arr)=>{
    return previousvalue
})
console.log(reduce)

