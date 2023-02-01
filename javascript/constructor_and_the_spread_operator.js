// everything in the javascript is a object 
// arrays , objects , functions all these are made from the constructors . 

// understanding through object
// first way by declaring the object using object method
const object1 = new Object({name:"aditya",profession : "student"})
// here the object2 is getting the value of object1 objects in the javascript are the call by refrence it means they are not storing the value they are pointing to the memory location where the value is stored so when we changed the value of any of them both of them will be changed (in our case when we changed the value of object 1 object2 will be also changed and vice versa) whic elaborated below. same way array declared with new keyword are also the same 
object2 = object1
console.log(object1.constructor) //this will give the constructor used by the object method 
console.log(object2)
object2.age = "22"
console.log(object1)
console.log(object2)

// making the object by our constructor

// creating the constructor
function person(name,age,gender){
    this.name = name
    this.age = age
    this.gender=gender
}
// calling the construcor using new keyword .everything is same as function just a new keyword is added
const person1 = new person("saurabh",22,"female")
console.log(person1)
console.log(person1.constructor) 

// spread operator
// as we discussed earlier call by refrence in the object lets understand in object also here also the same thing happens if one of the array changes the other also changes to solve this spread operator is used
const arr1 = new Array(1,2,3)
const arr2 = arr1
console.log(arr1)
console.log(arr2)
arr2.age="24"
console.log(arr1)
console.log(arr2)

// if we use spread operator at creating of the array from other array then at that the modification of one will not affect other one
const arr3 = new Array(... arr1) //creating the array using the spread operator

// adding the value in the new array created using spread operator doesnt affect old array
arr3.a="b"
console.log(arr1)
console.log(arr3)

// these same concept we can apply on the object also
const object3 = new Object({... object1})

object3.age= "30"
console.log(object1)
console.log(object3)




