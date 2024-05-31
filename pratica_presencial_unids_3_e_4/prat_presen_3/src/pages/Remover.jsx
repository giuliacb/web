import { useContext, useEffect, useState } from "react"
import LivrosContext from "../contexts/LivrosContext"
import { useNavigate, useParams } from "react-router-dom";

const Remover = () => {
    const {listarLivros, consultarLivro, excluirLivro} = useContext(LivrosContext);
    const [titulo, setTitulo] = useState("");
    const [nomeAutor, setNomeAutor] = useState("");
    const [editora, setEditora] = useState("");
    const [genero, setGenero] = useState("");
    const [sinopse, setSinopse] = useState("");

    const {id} = useParams();

    useEffect(() => {
        const fetchLivro = async () => {
            try {
                const livro = await consultarLivro(id);
                setTitulo(livro.titulo);
                setNomeAutor(livro.nomeAutor);
                setEditora(livro.editora);
                setGenero(livro.genero);
                setSinopse(livro.sinopse);
            } catch (error) {
                console.error("Erro ao consultar livro:", error);
            }
        };
        if(id){
            fetchLivro();
        }
    }, [id, consultarLivro]);

    const navigate = useNavigate();

    const handleRemover = async () => {
        try {
            await excluirLivro(id);
            listarLivros();
            navigate('/');
        } catch (error) {
            console.error("Erro ao remover livro:", error);
        }
    };

    return (
        <>
            <h2>Remover Livro</h2>
            <label>Titulo</label>
            <sapn>{titulo}</sapn>
            <label>Nome Autor(a)</label>
            <sapn>{nomeAutor}</sapn>
            <label>Editora</label>
            <sapn>{editora}</sapn>
            <label>Gênero</label>
            <sapn>{genero}</sapn>
            <label>Sinopse</label>
            <sapn>{sinopse}</sapn>
            <button onClick={handleRemover}>Remover</button>
        </>
    );



}

export default Remover;