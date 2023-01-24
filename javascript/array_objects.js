let arr = [1,"hello",[1,2]]
console.log(arr)

// if we assigns the value to the index whose previous index does not contain anything then that previous indesx will pe reprsentated by empty

arr[4] = "prev is empty"
console.log(arr)

// some array methods
arr.push("push element at last")
arr.pop("pop the last element")

 arr.shift(2) //deletes the first index elemnt
console.log(arr)
arr.unshift(5) //insert the lement at te first index

arr1 = [10,9,8,7,6,5,4,3,2,1]
console.log(arr1)
arr1.splice(3,3) //this method will starts delting from 3rd index and will delte the 3 3 consecutive items here. first parameter= index from where the deletion is going to start, second parameter = total consecutive deletion

console.log(arr1)
arr1.reverse()   // reverse the array
console.log(arr1)
arr2 = arr1.slice(1,3) // it will slice the array from first parameter index to the second parmeter index-1
console.log(arr2)

console.log(arr1.includes(2))  //returns true if elemnt presents 


// objects in the javascript 
// declaring the object
myobj = {
    name: "aditya",
    profession: "student",
    college: "parul university"

}
console.log(myobj)
// addding the elemnt in the object
myobj.semester = 8
console.log(myobj)
// type of the myobj
console.log(typeof(myobj))
