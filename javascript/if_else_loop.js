// if else 
let age = Number(prompt("enter your age "))

if(age>18){
    console.log("you are eligible to vote")
}
else if(age === 18){
    console.log("apply for the voter card registration")
}
else{
    console.log("your are not eligible")
}

// switch statement
let day
switch (new Date().getDay()){
    case 0:
        day= "Sunday"
        break
    case 1:
        day="Monday"
        break
    case 2:
        day = "tuesday"
        break
    case 3:
        day = "Wedenesday"
        break
    case 4:
        day="Thrusday"
        break
    case 5:
        day = "Friday"
        break
    case 6:
        day = "Saturday"
        break
}
console.log(day)

// loops 
// 1 for for loops
for(let i=0;i<10;i++){
    console.log(i)
}
// while loop
let i=0
while(i<5){
    console.log(i)
    i++
}
// do while

i=0;
do{
    console.log(i)
    i++
}while(i<5)
