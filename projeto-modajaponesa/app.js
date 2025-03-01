function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa){
        section.innerHTML = "<p> O que você pesquisou não foi encontrado</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";
let imagem = "";
let link_video = "";

for(let dado of dados){
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se no titulo incudes campoPesquisa
    if (titulo.includes(campoPesquisa)  || descricao.includes(campoPesquisa)  || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
       
            <h2>
                 <a href="${dado.link_video}" target="_blank">${dado.titulo}</a>
            </h2>

               <div>
               <img src="${dado.imagem}">
               </div>

            
        <p class="descricao-meta">${dado.descricao}</p>

        <a href=${dado.link} target="_blank">Mais Informações</a>
        
        </div>`
            
            
    }
          
}
if (!resultados){
    resultados = "<p>Nada foi encontrado</p>"
}
    // entao faça...
    section.innerHTML = resultados
}

