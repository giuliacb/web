const contatos = {nome: "NOME DO CONTATO", fone: "fone docontato"};

const root = document.getElementById('root');

function Titulo(nome){
    const h2 = document.createElement('h2');
    h2.innerText = nome;
    return h2;
}

function InputText(){
    const inputNome = document.createElement('input');
    inputNome.setAttribute('type', 'text');
    inputNome.setAttribute('placeholder', 'Nome');
    inputNome.setAttribute('required', true);
    return inputNome;    
}



