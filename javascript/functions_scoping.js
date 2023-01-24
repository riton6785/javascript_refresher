// function declaration type 1


function sumofarray(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        
         sum = sum+arr[i]
        
    }
    return sum
}
arr = [1,2 ,3,4,5]
console.log(sumofarray(arr))
// storing the value of the function in the variable
let greeting = function(name){
    console.log(`Hello ${name} good morning`)
}
name=prompt("enter your name")
greeting(name)


// diffrence between let and var
// the variable initialised with the var keywords can be accesed anywwhere rather than thinking of its scope
// while the variable initialised with the let keyword can be accesed on its scope only


