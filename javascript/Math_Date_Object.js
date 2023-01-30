// floor ceil ,trunc ,round , sign , pow ,sqrt , abs , sin,pi , max, min,random,log2,log10,

console.log(Math.floor(9,8))
console.log(Math.round(9.8))
console.log(Math.ceil(9.8))
console.log(Math.trunc(9.8))  //trunc removes the numbers after the decimal
console.log(Math.sign(-9.8))  //it will return -1 if number is negative 1 if number is positive
console.log(Math.pow(2,5)) //used to calculate the power parameters are like a raise to b
console.log(Math.sqrt(9))
console.log(Math.abs(-9))

// trignometric function
// trignometric functions accept the value in radian instead of degree so we convert the value in to the radian first  and than we pass that in the trignometric function

// usecase here is let 90degree

const rad = 90 * Math.PI/180
console.log(Math.sin(rad))  //gives the value of sin(90)

console.log(Math.max(1,7,9,4))  // return the maximum
console.log(Math.min(1,7,9,4))  // return the minimum

console.log(Math.random()) //it gives the randm number between 0 and 1 we can manipulate it to get the number between andy two number for our use case


// logarithmatic functions
console.log(Math.log2(8))  //for base 2
console.log(Math.log10(100))  // foe base 10
// date method in javascript

const a = new Date() //gives current date
console.log(a)
// making the own custom date

const b = new Date(2012,11,06,11,20,2)  //parameteres are in following order year,month(here month starts from 0 means january=0),date,hours,minutes,seconds
console.log(b)

const c =new Date(" march 12  2012  22:12:6") //pasing in the string format
console.log(c)

// methods of date object
console.log(a.getDate()) //gives date
console.log(a.getFullYear)
console.log(a.getTime()) // gives the current time in the millisecond

// setting the date
console.log(b.setHours(16))








