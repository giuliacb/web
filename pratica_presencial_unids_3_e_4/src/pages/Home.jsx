import { useContext, useEffect } from "react";
import LivrosContext from "../contexts/LivrosContext";
import { Link } from "react-router-dom";

function Home(){
    const {meusLivros, listarLivros} = useContext(LivrosContext);

    useEffect(() => {
        listarLivros();
    }, [listarLivros]);

    return (
        <> 
            <h2>Meus Livros</h2>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Nome do Autor</th>
                        <th>Editora</th>
                        <th>Gênero</th>
                        <th>Sinopse</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {meusLivros.map((livro, key) => (
                        <tr key={key}>
                            <td>{livro.titulo}</td>
                            <td>{livro.nomeAutor}</td>
                            <td>{livro.editora}</td>
                            <td>{livro.genero}</td>
                            <td>{livro.sinopse}</td>
                            <td>
                                <Link to={`/editar/${livro.id}`} className="link-editar">Editar</Link>
                                {' | '}
                                <Link to={`/remover/${livro.id}`} className="link-remover">Remover</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Home;