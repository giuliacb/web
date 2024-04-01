const form = document.querySelector("#form");
const inputTitulo = document.querySelector("#titulo");
const inputNome = document.querySelector("#nome");
const inputEditora = document.querySelector("#editora");
const selectGenero = document.querySelector("#genero");
const textareaSinopse = document.querySelector("#sinopse");

const livros = [{
    titulo: "Título do Livro",
    nome: "Autor(a)",
    editora: "Editora",
    genero: "Gênero",
    sinopse: "Sinopse"
}];

const root = document.getElementById('root');

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    //verificar se o titulo ta vazio  
     if(inputTitulo.value.trim() === ""){
        alert("Por favor, informe o título do livro.");
        return;
     }

     //se o nome tem menos de 3 caracteres
     if (inputNome.value.trim().length < 3) {
        alert("Nome deve ter no mínimo 3 caracteres.");
        return;
    }

     //verificar se o editora ta vazia
     if(inputEditora.value.trim() === ""){
        alert("Por favor, preencha esse campo.");
        return;
     }

     //verifica se genero foi selecionado 
     if(selectGenero.value === ""){
        alert("Por favor, selecione o gênero da livro.");
        return;
     }

     //sinopse não necessaria

     //se todos os campos estiverem corretamente preenchidos, envie o formulário
     form.submit();
     NovoLivro();
     NavegaPara('Meus Livros');
});

function ListaLivro() {
    const table = document.createElement('table');
    const headerLinha = document.createElement('tr');
    const tituloHeader = document.createElement('th');
    tituloHeader.textContent = 'Título';
    const nomeHeader = document.createElement('th');
    nomeHeader.textContent = 'Autor(a)';
    const editoraHeader = document.createElement('th');
    editoraHeader.textContent = 'Editora';
    const generoHeader = document.createElement('th');
    generoHeader.textContent = 'Gênero';
    const sinopseHeader = document.createElement('th');
    sinopseHeader.textContent = 'Sinopse';

    headerLinha.appendChild(tituloHeader);
    headerLinha.appendChild(nomeHeader);
    headerLinha.appendChild(editoraHeader);
    headerLinha.appendChild(generoHeader);
    headerLinha.appendChild(sinopseHeader);
    table.appendChild(headerLinha);

    livros.forEach(livro => {  // Itera sobre cada livro no array de livros
     const linha = document.createElement('tr');
     const tituloCell = document.createElement('td');
     tituloCell.textContent = livro.titulo;
     const nomeCell = document.createElement('td');
     nomeCell.textContent = livro.nome;
     const editoraCell = document.createElement('td');
     editoraCell.textContent = livro.editora;
     const generoCell = document.createElement('td');
     generoCell.textContent = livro.genero;
     const sinopseCell = document.createElement('td');
     sinopseCell.textContent = livro.sinopse;
     linha.appendChild(tituloCell);
     linha.appendChild(nomeCell);
     linha.appendChild(editoraCell);
     linha.appendChild(generoCell);
     linha.appendChild(sinopseCell);
     table.appendChild(linha);
    });

    return table;
}


function MeusLivros(){
    const listaLivros = ListaLivro();
    root.appendChild(listaLivros);
}

function NovoLivro() {
    const novoLivro = {
        titulo: inputTitulo.value.trim(),
        nome: inputNome.value.trim(),
        editora: inputEditora.value.trim(),
        genero: selectGenero.value,
        sinopse: textareaSinopse.value.trim()
    };

    // Adiciona o novo livro ao array de livros
    livros.push(novoLivro);

    // Limpa os campos do formulário após o cadastro
    inputTitulo.value = "";
    inputNome.value = "";
    inputEditora.value = "";
    selectGenero.value = "";
    textareaSinopse.value = "";

    alert("Livro cadastrado com sucesso!");
}

function LimpaConteudo() {
    const root = document.getElementById('root');
    const filhos = Array.from(root.children);// Converte os filhos de root em um array
    // Remove cada filho de root
    filhos.forEach(filho => {
        root.removeChild(filho);
    });
}

function AtivaLink(rota) {
    const links = document.querySelectorAll('a'); // Seleciona todos os elementos <a>

    links.forEach(link => {
        if (link.textContent === rota) { // Se o texto interno do link for igual à rota
            link.classList.add('ativo'); // Adiciona a classe 'ativo' ao link
        } else {
            link.classList.remove('ativo'); // Remove a classe 'ativo' do link
        }
    });
}


function NavegaPara(rota){
    LimpaConteudo();
    AtivaLink(rota);

    const root = document.getElementById('root');

    if(rota === 'Meus Livros'){
        const listaLivros = ListaLivro();
        root.appendChild(listaLivros);
    } else if (rota === 'Novo Livro'){
        const erroElement = document.createElement('p');
        erroElement.classList.add('erro');
        root.appendChild(erroElement);
    }
}

function AdicionaClickListener() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão de clicar no link

            const rota = link.textContent.trim(); // Obtém o texto do link e remove espaços em branco extras
            NavegaPara(rota); // Chama a função navegaPara() com o texto do link como parâmetro
        });
    });
}

AdicionaClickListener();