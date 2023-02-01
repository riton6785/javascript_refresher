class myclass{
    class_name= "myclass"
    // constructor (it will work as the function )
    constructor(value1,value2){
        this.a = value1
        this.b = value2
        this.c = this.a+this.b
    }
    #age = 20  //private variable that is accessed only through class we can't see them outside the class when we try to access them through the objects

    // making the method to change the private variable so we can use them from outside the class
    change_private(value1){
        return this.#age = value1  //private variabe in class can be accesed using the this keyword direct access is not there

    } 

    // get method it is same as above we just write get before that and then the function becomes the properties and we can access them as a property but here we cannot modify the data because it doesn't take parameter we just return them 

    get get_method_change_private(){
        return this.#age 
    }
    // set is used to set the data
    set set_private(value){
        this.#age = value
    }
   
}

const obj1 = new myclass(1,2)
console.log(obj1.c)
console.log(obj1.change_private(100)) //here we are accessing the method described inside class
console.log(obj1.get_method_change_private)  //calling the functions (properties) made from get

obj1.set_private = 12  //updating the value using the set method define inside the class
console.log(obj1.get_method_change_private) // checking the changed value using the get method function


// inheritance
// we make one parent class for the electronics item having the name input and output 
class electronics{
    #name
    #input
    #output
    constructor(name,input,output){
        this.#name = name
        this.#input = input
        this.#output = output
    }
    print(){
        const x= {
            'name': this.#name,
            'input':this.#input,
            'output':this.#output,
        }
        console.log(x)
    }
}

const electronics1 = new electronics("test1",18,200)

console.log(electronics1.print())

// now in electronics item we have varoius items suppose we want to make one class for the charger but in that also we have name,inputand output  so we can use that electronixc class for that and beside this we can make some extra thing in charger class that is called inheritance

class charger extends electronics{
    #charging_type
    constructor(name,input,output,type){
        super(name,input,output) //calling the super function to access the parents class constructor
        this.#charging_type = type
    }
    get print_type(){
        return this.#charging_type
    }
}
const charger1 = new charger("realme",10,40,"c")

charger1.print() //accesing the aprent class function
console.log(charger1.print_type)  // accesing charger's class own function
