const form = document.querySelector("#form")
const ul = document.querySelector(".lista")
const listaItens = JSON.parse(localStorage.getItem("itens")) || []

listaItens.forEach(element => {
    createElement(element)

});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const itens =  {"nome": form.nome.value, "quantidade": form.quantidade.value } 

    const existe = listaItens.find(n => n.nome === itens.nome )
    
    if (existe) {
        console.log("existe");
        
    } else {
        console.log("não");
    }
    
    listaItens.push(itens)
    
    localStorage.setItem("itens",JSON.stringify(listaItens))

    createElement(itens)

    form.reset()
} )

function createElement(itens) {
 
    const li =  document.createElement("li")
    li.classList.add("item")

    const strong = document.createElement("strong")
    strong.innerHTML = itens.quantidade
    li.appendChild(strong)

    li.innerHTML += itens.nome

    ul.appendChild(li) 


}



