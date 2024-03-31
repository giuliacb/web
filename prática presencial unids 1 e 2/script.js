const livros = [{
    titulo: "Título do Livro",
    nome: "Nome do(a) Autor(a)",
    editora: "Editora",
    genero: "Gênero",
    sinopse: "Sinopse",
    nota: "Nota"
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
    inputTitulo.setAttribute('type', 'text');
    inputTitulo.setAttribute('placeholder', 'Título do Livro');
    inputTitulo.setAttribute('required', true);
    return inputTitulo;    
}

function InputNome(){ 
    const inputNome = document.createElement('input');
    inputNome.setAttribute('id', 'nome');
    inputNome.setAttribute('type', 'text');
    inputNome.setAttribute('placeholder', 'Nome do(a) Autor(a)');
    inputNome.setAttribute('required', true);
    return inputNome;
}

function InputEditora(){
    const inputEditora = document.createElement('input');
    inputEditora.setAttribute('id', 'editora');
    inputEditora.setAttribute('type', 'text');
    inputEditora.setAttribute('placeholder', 'Editora');
    inputEditora.setAttribute('required', false);
    return inputEditora;
}

function InputGenero(){
    const inputGenero = document.createElement('input');
    inputGenero.setAttribute('id', 'genero');
    inputGenero.setAttribute('type', 'text');
    inputGenero.setAttribute('placeholder', 'Gênero');
    inputGenero.setAttribute('required', true);
    return inputGenero;
}

function InputSinopse(){
    const inputSinopse = document.createElement('input');
    inputSinopse.setAttribute('id', 'sinopse');
    inputSinopse.setAttribute('type', 'text');
    inputSinopse.setAttribute('placeholder', 'Sinopse');
    inputSinopse.setAttribute('required', false);
    return inputSinopse;
}

function InputNota(){
    const inputNota = document.createElement('input');
    inputNota.setAttribute('id', 'nota');
    inputNota.setAttribute('type', 'number');
    inputNota.setAttribute('min', '1');
    inputNota.setAttribute('max', '5');
    inputNota.setAttribute('placeholder', 'Nota');
    inputNota.setAttribute('required', false);
    return inputNota;
}

function InputSubmit(){
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Cadastrar Livro');
    return submitButton;
}

function validateForm(campos) {
    //alert(campos.nome.length);
    if (campos && campos.nome && campos.nome.length >= 3) {
       return true;
    } else {
        return false; 
    }
}

function handleSubmit(event) {
    event.preventDefault(); // Impede que o formulário seja enviado
    const msgErro = document.querySelector('p.erro'); // Localiza o elemento <p> com a classe erro
    if (msgErro) {
        msgErro.textContent = ''; //limpa o texto do elemento
    } 

    const formData = new FormData(event.target); // Converte o formulário em um objeto FormData
    const campos = Object.fromEntries(formData);
    const formularioValido = validateForm(campos);
    
    if (!formularioValido) { //se nn for valido
        if(msgErro){
            msgErro.textContent = 'Nome do autor deve contes pelo menos 3 caracteres!'
        }
        return;
    }

    // Percorre cada campo do FormData e gera um objeto
    const livro = [{
        titulo: formData.get('titulo'),
        nome: formData.get('nome'),
        editora: formData.get('editora'),
        genero: formData.get('genero'),
        sinopse: formData.get('sinopse'),
        nota: formData.get('nota')
    }];

    livros.push(livro); // Adiciona o objeto ao array de livros
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
    formElement.appendChild(InputNota());
    formElement.appendChild(document.createElement('br')); 
    formElement.appendChild(InputSubmit());
    formElement.addEventListener('submit', handleSubmit); // Adiciona o evento submit ao formulário
    return formElement;
}

function ListaLivro() {
    const table = document.createElement('table');

    livros.forEach(livro => {  // Itera sobre cada livro no array de livros
        const tr = document.createElement('tr'); // Cria uma linha para cada livro

        // Cria células para cada propriedade do livro
        for (const prop in livro) {
            const tdProp = document.createElement('td'); // Cria uma célula para a chave (propriedade)
            const tdValue = document.createElement('td'); // Cria uma célula para o valor

            tdProp.textContent = prop;
            tdValue.textContent = livro[prop];

            tr.appendChild(tdProp);
            tr.appendChild(tdValue);
        }

        table.appendChild(tr); // Adiciona a linha à tabela
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

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão de clicar no link

            const rota = link.textContent.trim(); // Obtém o texto do link e remove espaços em branco extras
            NavegaPara(rota); // Chama a função navegaPara() com o texto do link como parâmetro
        });
    });
}

AdicionaClickListener();
NavegaPara('Meus Livros');