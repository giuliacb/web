import { createContext, useState } from "react";
import service from '../services/LivroService';

const LivrosContext = createContext({
    meusLivros: [],
    incluirLivro: () => {},
    listarLivros: () => {},
    consultarLivro: () => {},
    alterarLivro: () => {},
    excluirLivro: () => {}
});

function LivrosContextProvider(props){
    const [livros, setLivros] = useState([]);

    async function incluir(livro){
        try {
            const novoLivro = await service.adicionar(livro);
            setLivros([...livros, novoLivro]);
            return novoLivro;
        } catch (error){
            console.error("Erro ao incluir livro:", error);
        }
    }

    async function listar(){
        try {
            const result = await service.buscarTodos();
            setLivros(result);
        } catch (error) {
            console.error("Erro ao listar livros:", error);
        }
    }

    async function consultar(id){
        try {
            return await service.buscarUm(id);
        } catch (error){
            console.error("Erro ao consultar livro:", error);
        }
    }

    async function alterar(livro){
        try {
            const livroAtualizado = await service.atualizar(livro);
            setLivros(livros.map(c => (c.id === livro.id ? livroAtualizado : c)));
            return livroAtualizado;
        } catch (error) {
            console.error("Erro ao alterar livro:", error);
        }
    }

    async function excluir(id){
        try {
            await service.remover(id);
            setLivros(livros.filter(c => c.id !== id));
        } catch (error) {
            console.error("Erro ao excluir livro:", error);
        }
    }

    const contexto = {
        meusLivros: livros,
        incluirLivro: incluir,
        listarLivros: listar,
        consultarLivro: consultar,
        alterarLivro: alterar,
        excluirLivro: excluir
    }

    return (
        <LivrosContext.Provider value={contexto}>
            {props.children}
        </LivrosContext.Provider>
    );

}

export {LivrosContextProvider};
export default LivrosContext;