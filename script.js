
const btnLogin = document.querySelector("[data-js=login]");
btnLogin.addEventListener("click",()=>{
    alert("Servidor indisponivel")
})



const cars = document.querySelectorAll(".card-item")    
const searchButton = document.querySelector(".search-button")
searchButton.addEventListener("click",filterSearch)

window.addEventListener("keypress",event =>{
    if(event.key === "Enter") filterSearch()
})

function filterSearch(){
    const value = document.querySelector(".search-input").value
    const wrapper = document.querySelector(".card-wrapper")

    // console.log(cars)
    
    const filter = []
    cars.forEach((item,index) =>{
        const car = item
        const title = car.children[1].children[0].innerHTML
        //    console.log(title,value)
        
        if(title.toUpperCase() === value.toUpperCase()){
            filter.push(car)
            console.log(title,value)
        }
    })
    
    wrapper.innerHTML=""
    if(filter.length === 0){
        const result = document.createElement("div")
        result.classList.add("filter-card")
        result.innerText="Nenhum resultado encontrado"
        wrapper.appendChild(result)
    }else{
        filter.map(item => {
            wrapper.appendChild(item)
        })
    }
}
