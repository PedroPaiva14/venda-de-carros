// ALERTA
const btnLogin = document.querySelector("[data-js=login]");
btnLogin.addEventListener("click",()=>{
    alert("Servidor indisponivel")
})


// FILTRO
const cars = document.querySelectorAll(".card-item") // armazena todas as divs com a classe card-item
const searchButton = document.querySelector(".search-button") // armazena o botao de pesquisa
searchButton.addEventListener("click",filterSearch) // adiciona um evento de clique que chama a funçao filterSearch

window.addEventListener("keypress",event =>{
    if(event.key === "Enter") filterSearch()
}) // evento para funcionar com a tecla enter

function filterSearch(){ // filtra a pesquisa e muda o HTML
    const value = document.querySelector(".search-input").value // armazena o que foi pesqusiado
    const wrapper = document.querySelector(".card-wrapper") // seleciona a div que tem todos os carros

    if(value === ""){ // se nada for digitado aparecera todos os carros novamente
        wrapper.innerHTML="" 
        cars.forEach(item => {
            wrapper.appendChild(item) 
        })
        return 
    }


    const filter = []
    cars.forEach( item => { // esse loop passa por todas as divs de carro
        const car = item //o carro que esta sendo lido no loop atual
        const title = car.children[1].children[0].innerHTML
        
        // car = .card-item
        // children[1] = card-content
        // children[0] = h3

        if(title.toUpperCase() === value.toUpperCase()){ //se o titulo for igual ao que foi pesquisado 
            filter.push(car) // o carro vai ser adicionado no array do filtro
        }
    })
    
    wrapper.innerHTML="" //a div wrapper sera esvaziada
    if(filter.length === 0){
        const result = document.createElement("div")
        result.classList.add("filter-card")
        result.innerText="Nenhum resultado encontrado" // se o array de filtro for vazio sera mostrado um aviso
        wrapper.appendChild(result)
    }else{
        filter.map(item => {
            wrapper.appendChild(item) // se tiver carros no array cada carro sera adicionado na div wrapper novamente
        })
    }
}


// REDIRECIONAMENTO
const linkButtons = document.querySelectorAll("[data-js=button]"); // armazena todos os botoes

linkButtons.forEach(btn => {
    btn.addEventListener("click", ()=>{ // adiciona um evento de click para cada um
        window.location.href = btn.dataset.link; // redireciona para a pagina de detalhes com os parametros do carro
    });
});