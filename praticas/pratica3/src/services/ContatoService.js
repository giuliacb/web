const API_URL = 'http://localhost:3000/contatos';

async function buscarTodos() {
    const response = await fetch(API_URL, { method: "GET" });
    return await response.json();
}

async function buscarUm(id) {
    const response = await fetch(`${API_URL}/${id}`, { method: "GET" });
    return await response.json();
}

async function adicionar(contato) {
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(contato),
        headers: { "Content-Type": "application/json" }
    });
    return await response.json();
}

async function atualizar(contato) {
    const { id, nome, telefone } = contato;
    const response = await fetch(`${API_URL}/${id}`, {  // Certifique-se de que a URL inclua o ID
        method: "PUT", 
        body: JSON.stringify({ nome, telefone }),
        headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    
    return await response.json();
}

async function remover(id) {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return await response.json();
}

export default { buscarTodos, buscarUm, adicionar, atualizar, remover };