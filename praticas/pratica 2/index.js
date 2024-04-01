const contatos = [{ nome: "NOME DO CONTATO", fone: "FONE DO CONTATO" }];

const root = document.getElementById("root");

function Titulo(nome) {
  const h2 = document.createElement("h2");
  h2.innerText = nome;
  return h2;
}

function InputText() {
  const inputNome = document.createElement("input");
  inputNome.setAttribute("name", "nome");
  inputNome.setAttribute("type", "text");
  inputNome.setAttribute("placeholder", "Nome");
  inputNome.setAttribute("required", true);
  return inputNome;
}

function InputTel() {
  const inputTel = document.createElement("input");
  inputTel.setAttribute("name", "fone");
  inputTel.setAttribute("type", "tel");
  inputTel.setAttribute("placeholder", "Telefone");
  inputTel.setAttribute("required", true);
  return inputTel;
}

function InputSubmit() {
  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Salvar Dados");
  return submitButton;
}

function validateForm(campos) {
  if (campos && campos.nome && campos.nome.length >= 3) {
    return true;
  } else {
    var padraoTel = /^\(\d{2}\)\d{5}-\d{4}$/;
    if (campos.fone && padraoTel.test(campos.fone)) {
      return true;
    }
  }
  return false;
}

function handleSubmit(event) {
  event.preventDefault();
  const msgErro = document.querySelector("p.erro");
  msgErro.innerText = ""; //limpa o texto do elemento

  const formData = new FormData(event.target);
  console.log(formData);
  const campos = Object.fromEntries(formData);
  const formularioValido = validateForm(campos);

  if (!formularioValido) {
    //se não for válido
    msgErro.innerText =
      "Nome deve conter pelo menos 3 caracteres e Telefone deve estar no formato (99)99999-9999.";
    return;
  }

  const nomeContato = campos.nome;
  const foneContato = campos.fone;

  contatos.push({ nome: nomeContato, fone: foneContato });

  navegaPara("Meus Contatos");
}

function FormContato() {
  const formElement = document.createElement("form");
  formElement.appendChild(InputText());
  formElement.appendChild(document.createElement("br")); // Adiciona uma quebra de linha
  formElement.appendChild(InputTel());
  formElement.appendChild(document.createElement("br")); // Adiciona uma quebra de linha
  formElement.appendChild(InputSubmit());
  formElement.addEventListener("submit", handleSubmit);
  return formElement;
}

function ListaContato() {
  const tableElement = document.createElement("table"); // Criando o elemento <table>
  const headerLinha = document.createElement("tr"); // Criando uma linha de cabeçalho (<tr>)
  const nomeHeader = document.createElement("th");
  nomeHeader.textContent = "Nome";
  const foneHeader = document.createElement("th");
  foneHeader.textContent = "Telefone";
  headerLinha.appendChild(nomeHeader);
  headerLinha.appendChild(foneHeader);
  tableElement.appendChild(headerLinha);

  // Adicionando os dados dos contatos como linhas (<tr>) e células (<td>)
  contatos.forEach((contato) => {
    const linha = document.createElement("tr");
    const nomeCell = document.createElement("td");
    nomeCell.textContent = contato.nome;
    const foneCell = document.createElement("td");
    foneCell.textContent = contato.fone;
    linha.appendChild(nomeCell);
    linha.appendChild(foneCell);
    tableElement.appendChild(linha);
  });

  return tableElement;
}

function MeusContatos() {
  const titulo = Titulo("Meus Contatos");
  const listaContatos = ListaContato();
  root.appendChild(titulo);
  root.appendChild(listaContatos); // Adicionando o título e a lista de contatos à constante root
}

function NovoContato() {
  const titulo = Titulo("Novo Contato");
  const erroElement = document.createElement("p");
  erroElement.classList.add("erro");

  const formularioContato = FormContato();
  root.appendChild(titulo);
  root.appendChild(erroElement);
  root.appendChild(formularioContato);
}

function limpaConteudo() {
  const root = document.getElementById("root");
  root.innerHTML = '';
//   const filhos = Array.from(root.children); // Converte os filhos de root em um array
//   // Remove cada filho de root
//   filhos.forEach((filho) => {
//     root.removeChild(filho);
//   });
}

function ativaLink(rota) {
  const links = document.querySelectorAll("a"); // Seleciona todos os elementos <a>

  links.forEach((link) => {
    if (link.textContent === rota) {
      // Se o texto interno do link for igual à rota
      link.classList.add("ativo"); // Adiciona a classe 'ativo' ao link
    } else {
      link.classList.remove("ativo"); // Remove a classe 'ativo' do link
    }
  });
}

function navegaPara(rota) {
  limpaConteudo(); // Limpa o conteúdo da página
  ativaLink(rota); // Ativa o link correspondente à rota

  const root = document.getElementById("root");

  if (rota === "Meus Contatos") {
    const titulo = Titulo("Meus Contatos");
    const listaContatos = ListaContato();
    root.appendChild(titulo);
    root.appendChild(listaContatos);
  } else if (rota === "Novo Contato") {
    const titulo = Titulo("Novo Contato");
    const erroElement = document.createElement("p");
    erroElement.classList.add("erro");
    const formularioContato = FormContato();
    root.appendChild(titulo);
    root.appendChild(erroElement);
    root.appendChild(formularioContato);
  }
}

function adicionaClickListener() {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Previne o comportamento padrão de clicar no link

      const rota = link.textContent.trim(); // Obtém o texto do link e remove espaços em branco extras
      navegaPara(rota); // Chama a função navegaPara() com o texto do link como parâmetro
    });
  });
}

adicionaClickListener();
navegaPara("Meus Contatos");
