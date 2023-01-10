// # Exercício 1
// Utilize o DOM para adicionar uma função ao clique do botão. Ao clicar no botão, um novo item deve ser adicionado ao container. Por enquanto, o item não precisa de estilização. Ele pode ter apenas um texto, para facilitar sua visualização.
const main = document.getElementById("container");
const adicionaItem = (event) => {
  event.preventDefault();
  const itemNovo = document.createElement("div");
  const conteudoNovo = document.createTextNode("texto");
  itemNovo.appendChild(conteudoNovo);
  main.appendChild(itemNovo);
  itemNovo.setAttribute("class", "item");
  itemNovo.setAttribute("onclick", "removeItem(event)");
  console.log("funciona");
};

// # Exercício 2
// Altere a função criada no exercício 1 para que agora o clique no botão faça a **estilização** do novo item

// # Exercício 3

// Crie a função `removeItem`, que é chamada pelo `onclick` dos itens do container. Esta função deve **remover** o elemento clicado.

// **Dica**: utilize a propriedade `event.target` para pegar o elemento clicado.
// const apagaItem = document.querySelector(".item")
const removeItem = (event) => {
    event.preventDefault();
    event.target.remove()
    console.log(event.target)

};
