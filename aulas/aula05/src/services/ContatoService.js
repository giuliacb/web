const url= "http://localhost:3000/contatos";

async function criar(contato){
    const response = await fetch(url,{
        method: "POST",
        body: JSON.stringify(contato),
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
}

async function listar(){
    const response = await fetch(url,{
        method:"GET"
    });

    return await response.json();
}

async function consultar(id){
    const response = await fetch(`${url}/${id}`,{
        method:"GET"
    });
    return await response.json();
}

async function editar(contato){
    const {id, nome, telefone} = contato;
    const response = await fetch(`${url}/${id}`,{
        method:"PUT",
        body: JSON.stringify({nome, telefone}),
        headers:{
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}

async function remover(id){
    const response = await fetch(`${url}/${id}`,{
        method:"DELETE"
    });
    return await response.json();
}

export default {criar, listar, consultar, editar, remover};