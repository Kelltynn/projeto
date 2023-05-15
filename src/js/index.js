// pegar item por id
const botaoAlterarTema = document.getElementById("botao-alterar-tema")

// pegar item por tag ou class usando o "."
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// função de seta
botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivo) {

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
    
         imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")}

})



 