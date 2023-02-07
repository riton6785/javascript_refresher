const selection = document.querySelectorAll(".selection")
const btn = document.getElementById("btn")
const input = document.getElementById("input")
console.log(input.value)

btn.addEventListener('click',()=>{
    console.log(selection[1].value)
    console.log(input.value)
    console.log(selection[1].innerText)
    const h1 =document.createElement('h1')
    h1.innerText = input.value*selection[1].value
    document.body.append(h1)
   
})

const fetchedData = async()=>{    
    const fetchedData = await fetch("https://v6.exchangerate-api.com/v6/9311ec01803632d505e14b30/latest/INR")
    const data = await fetchedData.json()
    console.log(data)
    const data_conversion_rate = data.conversion_rates
    const key_value_array = Object.entries(data_conversion_rate)
    key_value_array.map(([key,value],index)=>{
        selection[0].innerHTML += `<option value=${value} class="option" id=first${index}>${key}</option>`
    })
    key_value_array.map(([key,value],index)=>{
        selection[1].innerHTML += `<option value=${value} class="option" id=second${index}>${key}</option>`
    })

}


fetchedData()
console.log(document.body)
const option = document.querySelectorAll(".option")
// const option = document.querySelectorAll('.option')
// console.log(option[1].value)
// const selection = document.getElementById("selection1")
// console.log(selection)

