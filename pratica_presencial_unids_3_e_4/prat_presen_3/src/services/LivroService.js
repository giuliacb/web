const API_URL = 'http://localhost:3000/livros';

async function buscarTodos(){
    const response = await fetch(API_URL, {method: 'GET'});
    return await response.json();
}

async function buscarUm(id) {
    const response = await fetch(`${API_URL}/${id}`, { method: "GET" });
    return await response.json();
}

async function adicionar(livro){
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(livro),
        headers: { "Content-Type": "application/json" }
    });
    return await response.json();
}

async function atualizar(livro) {
    const { id, titulo, nomeAutor, editora, genero, sinopse } = livro;
    const response = await fetch(`${API_URL}/${id}`, {  
        method: "PUT", 
        body: JSON.stringify({ titulo, nomeAutor, editora, genero, sinopse }),
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