const API_URL = 'http://localhost:3000/contatos';

async function buscarTodos(){
    const response = await fetch (API_URL, {
        method: "GET"
    });
    return await response.json();
}

async function buscarUm(id){
    const response = await fetch(`${API_URL}/${id}`,{
        method: "GET"
    });
    return await response.json();
}

async function adicionar(contato){
    const reponse = await fetch(API_URL,{
        method:"POST",
        body: JSON.stringify(contato),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await reponse.json();
}

async function atualizar(contato){
    const {id, nome, telefone} = contato;
    const response = await fetch(API_URL,{
        method: "PUT", 
        body: JSON.stringify({nome, telefone}),
        headers: {
            "Content-Type": "application/json"
        }
    });
   return await response.json();
}

async function remover(id){
    const response = await fetch(`${API_URL}/${id}`,{
        method: "DELETE"
    });
    return await response.json();
}

export default {buscarTodos, buscarUm, adicionar, atualizar, remover};