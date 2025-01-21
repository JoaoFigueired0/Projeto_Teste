const removerMain = document.getElementById("removeMain")
const imgXis = document.createElement("img");



document.addEventListener("DOMContentLoaded", function () {
    const syncButton = document.getElementById("btt_sync");

    if (syncButton) {
        syncButton.addEventListener("click", sincronizacao);
    } else {
        console.error("O botão de sincronização não foi encontrado.");
    }
});

function sincronizacao() {
    removeMain.remove();
    console.log("Foi clicado");
    criarItem();
}

function criarItem() {
    const nomeDoProjeto = localStorage.getItem("nomeProjeto") || "Projeto sem nome";
    const descricaoDoProjeto = localStorage.getItem("descricaoProjeto") || "Sem descrição disponível";
    const tagsProjeto = JSON.parse(localStorage.getItem("tagsProjeto")) || [];
    const imagemProjeto = localStorage.getItem("imagemProjeto");

    // Criar a nova section e divs
    const novaSection = document.createElement("section");
    novaSection.classList.add("container_all_projects");

    const novaDiv = document.createElement("div");
    novaDiv.classList.add("container_projects");

    const divImg = document.createElement("div");

    // Criar e configurar a imagem do projeto
    const imgProjeto = document.createElement("img");
    imgProjeto.src = imagemProjeto || "../assets/Pagina de Registro/imagem1.png"; // Usar imagem padrão se não houver

    // Criar a div para as informações do projeto
    const divInfo = document.createElement("div");
    divInfo.classList.add("projeto_info");

    const spanNome = document.createElement("span");
    const spanDescricao = document.createElement("span");

    // Criar a lista de tags
    const ulTag = document.createElement("ul");

    // Se houver tags, adicionar à lista de tags
    if (tagsProjeto.length > 0) {
        tagsProjeto.forEach(tagTexto => {
            const liTag = document.createElement("li");
            liTag.innerHTML = `<p>${tagTexto}</p>`; // Criar o item da lista de tags com o texto
            ulTag.appendChild(liTag);
        });
    }

    // Criar o parágrafo do nome do projeto
    const pNome = document.createElement("p");
    pNome.textContent = nomeDoProjeto; // Definir o nome do projeto

    // Criar o parágrafo da descrição do projeto
    const pDescricao = document.createElement("p");
    pDescricao.textContent = descricaoDoProjeto; // Definir a descrição do projeto

    // Montar a estrutura: adicionar elementos à section
    novaSection.appendChild(novaDiv);
    novaSection.appendChild(imgXis)
    novaDiv.appendChild(divImg);
    novaDiv.appendChild(divInfo);
    divImg.appendChild(imgProjeto);
    divInfo.appendChild(spanNome);
    divInfo.appendChild(spanDescricao);
    divInfo.appendChild(ulTag);
    spanNome.appendChild(pNome);
    spanDescricao.appendChild(pDescricao);

    // Agora, adicionar a nova section ao DOM
    document.body.appendChild(novaSection);
}

const itens = document.querySelectorAll("novaSection");
const mensagem = document.getElementsByClassName("mensageSemProjeto")
