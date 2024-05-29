const API_URL = 'http://localhost:3000/contatos';

export const adicionar = async (contato) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    });
    return response.json();
};

export const buscarTodos = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const buscarUm = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};

export const atualizar = async (contato) => {
    const response = await fetch(`${API_URL}/${contato.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    });
    return response.json();
};

export const remover = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
};

export default {
    adicionar,
    buscarTodos,
    buscarUm,
    atualizar,
    remover
};