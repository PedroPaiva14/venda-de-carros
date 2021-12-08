const params = obterParams();

const nomeCarro = document.querySelector("[data-js=carro]");
const imagemCarro = document.querySelector("[data-js=imagem]");
const precoCarro = document.querySelector("[data-js=preco]");
const versaoCarro = document.querySelector("[data-js=versao]");
const anoCarro = document.querySelector("[data-js=ano]");
const modeloCarro = document.querySelector("[data-js=modelo]");
const kmCarro = document.querySelector("[data-js=km]");
const local = document.querySelector("[data-js=local]");

nomeCarro.innerText=params.carro;
imagemCarro.src = params.imagem;
precoCarro.innerText="R$" + params.preco;
versaoCarro.innerText=params.versao;
anoCarro.innerText=params.ano;
modeloCarro.innerText=params.modelo;
kmCarro.innerText=params.km + " km";
local.innerText=params.local;

//  carro: Fox
// versão: Manual 
//    ano: 2016
//     km: 80K
//  local: Riacho dos Pedros
//  preco: 30000
// imagem: ../../images/fox.jpg

// google.com?nome=pedro&sobrenom=paiva

// file:///C:/Users/user/Documents/javascript/treinamento%202/Projeto%20integrador%203kkkkkk/paginas/detalhes/detalhes.html?carro=Fox&modelo=fox vermelho&versao=manual&ano=2016&km=80&local=Riacho dos Pedros&preco=30000&imagem=../../images/fox.jpg

