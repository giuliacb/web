import { createContext, useState } from "react";
import service from '../services/ContatoService';

const ContatosContext = createContext({
    meusContatos: [],
    incluirContato: () => {},
    listarContatos: () => {},
    consultarContato: () => { },
    alterarContato: () => { },
    excluirContato: () => { }
});

function ContatosContextProvider(props){
    const [contatos, setContatos] = useState([]);

    async function incluir(contato){
        return await service.adicionar(contato);
    }

    async function listar(){
        const result = await service.buscarTodos();
        setContatos(result);
    }

    async function consultar(id){
        return await service.buscarUm(id);
    }

    async function alterar(contato){
        return await service.atualizar(contato);
    }

    async function excluir(id){
        return await service.remover(id);
    }

    const contexto = {
        meusContatos: contatos,
        incluirContato: incluir,
        listarContatos: listar,
        consultarContato: consultar,
        alterarContato: alterar,
        excluirContato: excluir
    }   

    return (
    <ContatosContext.Provider value={contexto}>
        {props.children}
    </ContatosContext.Provider>
    );
}

export {ContatosContextProvider};
export default ContatosContext;