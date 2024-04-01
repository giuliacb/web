const livros = [{
    titulo: "Título do Livro",
    nome: "Nome do(a) Autor(a)",
    editora: "Editora",
    genero: "Gênero",
    sinopse: "Sinopse"
}];

const root = document.getElementById('root');

function Titulo(nome){
    const h2 = document.createElement('h2');
    h2.innerText = nome;
    return h2;
}

function InputTitulo(){
    const inputTitulo = document.createElement('input');
    inputTitulo.setAttribute('id', 'titulo');
    inputTitulo.setAttribute('name', 'titulo');
    inputTitulo.setAttribute('type', 'text');
    inputTitulo.setAttribute('placeholder', 'Título do Livro');
    inputTitulo.setAttribute('required', true);
    return inputTitulo;    
}

function InputNome(){ 
    const inputNome = document.createElement('input');
    inputNome.setAttribute('id', 'nome');
    inputNome.setAttribute('name', 'nome');
    inputNome.setAttribute('type', 'text');
    inputNome.setAttribute('placeholder', 'Nome do(a) Autor(a)');
    inputNome.setAttribute('required', true);
    return inputNome;
}

function InputEditora(){
    const inputEditora = document.createElement('input');
    inputEditora.setAttribute('id', 'editora');
    inputEditora.setAttribute('name', 'editora');
    inputEditora.setAttribute('type', 'text');
    inputEditora.setAttribute('placeholder', 'Editora');
    inputEditora.setAttribute('required', false);
    return inputEditora;
}

function InputGenero(){
    const inputGenero = document.createElement('select');
    inputGenero.setAttribute('id', 'genero');
    inputGenero.setAttribute('name', 'genero');
    inputGenero.setAttribute('required', true);

    // Adicione a opção de placeholder
    const opcaoPlaceholder = document.createElement('option');
    opcaoPlaceholder.value = '';
    opcaoPlaceholder.innerText = 'Selecione o gênero';
    opcaoPlaceholder.disabled = true;
    opcaoPlaceholder.selected = true;
    inputGenero.appendChild(opcaoPlaceholder);

    const opcaoAcao = document.createElement('option');
    opcaoAcao.value = 'acao';
    opcaoAcao.innerText = 'Ação';
    inputGenero.appendChild(opcaoAcao);

    const opcaoBiografia = document.createElement('option');
    opcaoBiografia.value = 'biografia';
    opcaoBiografia.innerText = 'Biografia';
    inputGenero.appendChild(opcaoBiografia);

    const opcaoDistopia = document.createElement('option');
    opcaoDistopia.value = 'distopia';
    opcaoDistopia.innerText = 'Distopia';
    inputGenero.appendChild(opcaoDistopia);

    const opcaoFantasia = document.createElement('option');
    opcaoFantasia.value = 'fantasia';
    opcaoFantasia.innerText = 'Fantasia';
    inputGenero.appendChild(opcaoFantasia);

    const opcaoFiccao = document.createElement('option');
    opcaoFiccao.value = 'ficcao';
    opcaoFiccao.innerText = 'Ficção';
    inputGenero.appendChild(opcaoFiccao);

    const opcaoGatronomia = document.createElement('option');
    opcaoGatronomia.value = 'gastronomia';
    opcaoGatronomia.innerText = 'Gastronomia';
    inputGenero.appendChild(opcaoGatronomia);

    const opcaoInfantil = document.createElement('option');
    opcaoInfantil.value = 'infantil';
    opcaoInfantil.innerText = 'Infantil';
    inputGenero.appendChild(opcaoInfantil);

    const opcaoTerror = document.createElement('option');
    opcaoTerror.value = 'terror';
    opcaoTerror.innerText = 'Terror';
    inputGenero.appendChild(opcaoTerror);

    const opcaoRomance = document.createElement('option');
    opcaoRomance.value = 'romance';
    opcaoRomance.innerText = 'Romamce';
    inputGenero.appendChild(opcaoRomance);

    const opcaoSuspense = document.createElement('option');
    opcaoSuspense.value = 'suspense';
    opcaoSuspense.innerText = 'Suspense';
    inputGenero.appendChild(opcaoSuspense);

    const opcaoOutro = document.createElement('option');
    opcaoOutro.value = 'outro';
    opcaoOutro.innerText = 'Outro';
    inputGenero.appendChild(opcaoOutro);

    return inputGenero;
}

function InputSinopse(){
    const inputSinopse = document.createElement('input');
    inputSinopse.setAttribute('id', 'sinopse');
    inputSinopse.setAttribute('name', 'sinopse');
    inputSinopse.setAttribute('type', 'text');
    inputSinopse.setAttribute('placeholder', 'Sinopse');
    inputSinopse.setAttribute('required', false);
    return inputSinopse;
}

function InputSubmit(){
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Cadastrar Livro');
    return submitButton;
}

function validateForm(campos) {
    if (campos && campos.nome && campos.nome.length >= 3) {
       return true;
    } else {
        return false; 
    }
}

function handleSubmit(event) {
    event.preventDefault(); // Impede que o formulário seja enviado
    const msgErro = document.querySelector('p.erro'); // Localiza o elemento <p> com a classe erro
    msgErro.textContent = ''; //limpa o texto do elemento
    

    const formData = new FormData(event.target); // Converte o formulário em um objeto FormData
    const campos = Object.fromEntries(formData);
    const formularioValido = validateForm(campos);
    
    if (!formularioValido) { //se nn for valido
        msgErro.textContent = 'Nome do autor deve contes pelo menos 3 caracteres!'
        return;
    }

    const tituloLivro = campos.titulo;
    const nomeLivro = campos.nome;
    const editoraLivro = campos.editora;
    const generoLivro = campos.genero;
    const sinopseLivro = campos.sinopse;

    livros.push({
        titulo: tituloLivro,
        nome: nomeLivro,
        editora: editoraLivro,
        genero: generoLivro,
        sinopse: sinopseLivro
    }); // Adiciona o objeto ao array de livros
    
    NavegaPara('Meus Livros'); // Chama a função navegaPara() para carregar os 'Meus Livros'
}

function FormLivro() {
    const formElement = document.createElement('form');
    formElement.appendChild(InputTitulo());
    formElement.appendChild(document.createElement('br')); // Adiciona uma quebra de linha
    formElement.appendChild(InputNome());
    formElement.appendChild(document.createElement('br')); 
    formElement.appendChild(InputEditora());
    formElement.appendChild(document.createElement('br')); 
    formElement.appendChild(InputGenero());
    formElement.appendChild(document.createElement('br')); 
    formElement.appendChild(InputSinopse());
    formElement.appendChild(document.createElement('br')); 
    formElement.appendChild(InputSubmit());
    formElement.addEventListener('submit', handleSubmit); // Adiciona o evento submit ao formulário
    return formElement;
}

function ListaLivro() {
    const table = document.createElement('table');
    const headerLinha = document.createElement('tr');
    const tituloHeader = document.createElement('th');
    tituloHeader.innerText = 'Título';
    const nomeHeader = document.createElement('th');
    nomeHeader.innerText = 'Autor(a)';
    const editoraHeader = document.createElement('th');
    editoraHeader.innerText = 'Editora';
    const generoHeader = document.createElement('th');
    generoHeader.innerText = 'Gênero';
    const sinopseHeader = document.createElement('th');
    sinopseHeader.innerText = 'Sinopse';
    headerLinha.appendChild(tituloHeader);
    headerLinha.appendChild(nomeHeader);
    headerLinha.appendChild(editoraHeader);
    headerLinha.appendChild(generoHeader);
    headerLinha.appendChild(sinopseHeader);
    table.appendChild(headerLinha);

    livros.forEach((livro) => {
        const linha = document.createElement('tr');
        const tituloCell = document.createElement('td');
        tituloCell.innerText = livro.titulo;
        const nomeCell = document.createElement('td');
        nomeCell.innerText = livro.nome;
        const editoraCell = document.createElement('td');
        editoraCell.innerText = livro.editora;
        const generoCell = document.createElement('td');
        generoCell.innerText = livro.genero;
        const sinopseCell = document.createElement('td');
        sinopseCell.innerText = livro.sinopse;
        linha.appendChild(tituloCell);
        linha.appendChild(nomeCell);
        linha.appendChild(editoraCell);
        linha.appendChild(generoCell);
        linha.appendChild(sinopseCell);
        table.appendChild(linha);
    });

    return table;
}

function MeusLivros() {
    const titulo = Titulo('Meus Livros');
    const listaLivros = ListaLivro();
    root.appendChild(titulo);
    root.appendChild(listaLivros);  // adicionando o título e a lista de livros à constante root
}

function NovoLivro() {
    const titulo = Titulo('Novo Livro');
    const erroElement = document.createElement('p');
    erroElement.classList.add('erro');
    
    const formularioLivro = FormLivro();
    root.appendChild(titulo);
    root.appendChild(erroElement);
    root.appendChild(formularioLivro);
}

function LimpaConteudo() {
    const root = document.getElementById('root');
    root.innerText = '';
}

function AtivaLink(rota) {
    const links = document.querySelectorAll('a'); // Seleciona todos os elementos <a>

    links.forEach((link) => {
        if (link.textContent === rota) { // Se o texto interno do link for igual à rota
            link.classList.add('ativo'); // Adiciona a classe 'ativo' ao link
        } else {
            link.classList.remove('ativo'); // Remove a classe 'ativo' do link
        }
    });
}

function NavegaPara(rota) {
    LimpaConteudo(); // Limpa o conteúdo da página
    AtivaLink(rota); // Ativa o link correspondente à rota

    const root = document.getElementById('root');

    if (rota === 'Meus Livros') {
        const titulo = Titulo('Meus Livros');
        const listaLivros = ListaLivro();
        root.appendChild(titulo);
        root.appendChild(listaLivros);
    } else if (rota === 'Novo Livro') {
        const titulo = Titulo('Novo Livro');
        const erroElement = document.createElement('p');
        erroElement.classList.add('erro');
        const formularioLivro = FormLivro();
        root.appendChild(titulo);
        root.appendChild(erroElement);
        root.appendChild(formularioLivro);
    }
}

function AdicionaClickListener() {
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão de clicar no link

            const rota = link.textContent.trim(); // Obtém o texto do link e remove espaços em branco extras
            NavegaPara(rota); // Chama a função navegaPara() com o texto do link como parâmetro
        });
    });
}

AdicionaClickListener();
NavegaPara('Novo Livro');