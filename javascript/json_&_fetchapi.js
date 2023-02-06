const url = "https://v2.jokeapi.dev/joke/Any?safe-mode"
console.log("a")

// fetch keyword is used to fetch the data from the api  it returns the promises  and takes the url of the api

// here in  our case fetch method fetches the data from the api and returns the promises here in first then block we get the response from the api in that we converted the obtained response in to the json format and returned it 
// in second then block we get the returned data in the json format 
const fetchData = ()=>{
    fetch(url).then((response)=>{
        console.log(response)
        return response.json()
    }).then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    }).finally(()=>{
        console.log("finally someone triggred")
    })
}
console.log("b")
fetchData()
