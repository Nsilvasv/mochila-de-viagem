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

        itens.id = existe.id
        
        atualizaElemento(itens)

        listaItens[existe.id] = itens

    } else {
        
        itens.id = listaItens.length

        createElement(itens)

        listaItens.push(itens)

    }
 
    
    localStorage.setItem("itens",JSON.stringify(listaItens))

    form.reset()
} )

function createElement(itens) {
 
    const li =  document.createElement("li")
    li.classList.add("item")

    const strong = document.createElement("strong")
    strong.innerHTML = itens.quantidade
    strong.dataset.id = itens.id
    li.appendChild(strong)
    li.innerHTML += itens.nome

    li.appendChild(buttonRemove())

    ul.appendChild(li) 

}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function buttonRemove() {

    const buttonRemove = document.createElement("button")
    buttonRemove.innerHTML ="X"

    buttonRemove.addEventListener("click", function name(params) {
        deleteElemento(this.parentNode)
    })

    return buttonRemove
}

function deleteElemento(tag) {
    tag.remove()
}