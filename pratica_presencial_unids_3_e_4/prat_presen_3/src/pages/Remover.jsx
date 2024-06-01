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
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Nome Autor(a)</th>
                        <th>Editora</th>
                        <th>Gênero</th>
                        <th>Sinopse</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{titulo}</td>
                        <td>{nomeAutor}</td>
                        <td>{editora}</td>
                        <td>{genero}</td>
                        <td>{sinopse}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleRemover}>Remover</button>
        </>
    );



}

export default Remover;