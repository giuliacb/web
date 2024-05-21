import { createContext, useState } from "react";
import service from '../services/ContatoService';
const ContatoContext = createContext({});

function ContatoContextProvider(props){
    const [contatos, setContatos] = useState([]);

    async function buscarTodos(){
        const result = await service.listar();
        setContatos(result);
    }

    async function buscarUm(id){
        return await service.consultar(id);
    }

    async function inserir(contato){
        return await service.criar(contato);
    }

    async function alterar(contato){
        return await service.editar(contato);
    }

    async function excluir(id){
        return await service.remover(id);
    }

    const contexto = {
        meusContatos: contatos,
        inserirContatos: inserir,
        alterarContato: alterar,
        listarContatos: buscarTodos,
        consultarContato: buscarUm,
        excluirContato: excluir
    }
    return(
        <ContatoContext.Provider value={contexto}>
            {props.children}
        </ContatoContext.Provider>
    );
}

export {ContatoContext, ContatoContextProvider};