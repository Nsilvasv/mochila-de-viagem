const form = document.querySelector("#form")
const ul = document.querySelector(".lista")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const qtd = form.quantidade.value;
    const nome = form.nome.value;

    createElement(nome,qtd)

} )

function createElement(nome, qtd) {
 
    const li =  document.createElement("li")
    li.classList.add("item")

    const strong = document.createElement("strong")
    strong.innerHTML = qtd
    li.appendChild(strong)

    li.innerHTML += nome

    ul.appendChild(li) 
    
}

