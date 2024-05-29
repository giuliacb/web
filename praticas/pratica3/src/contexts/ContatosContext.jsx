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

function ContatosContextProvider(props) {
    const [contatos, setContatos] = useState([]);

    async function incluir(contato) {
        try {
            const novoContato = await service.adicionar(contato);
            setContatos([...contatos, novoContato]);
            return novoContato;
        } catch (error) {
            console.error('Erro ao incluir contato:', error);
        }
    }

    async function listar() {
        try {
            const result = await service.buscarTodos();
            setContatos(result);
        } catch (error) {
            console.error('Erro ao listar contatos:', error);
        }
    }

    async function consultar(id) {
        try {
            return await service.buscarUm(id);
        } catch (error) {
            console.error('Erro ao consultar contato:', error);
        }
    }

    async function alterar(contato) {
        try {
            const contatoAtualizado = await service.atualizar(contato);
            setContatos(contatos.map(c => (c.id === contato.id ? contatoAtualizado : c)));
            return contatoAtualizado;
        } catch (error) {
            console.error('Erro ao alterar contato:', error);
        }
    }

    async function excluir(id) {
        try {
            await service.remover(id);
            setContatos(contatos.filter(c => c.id !== id));
        } catch (error) {
            console.error('Erro ao excluir contato:', error);
        }
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