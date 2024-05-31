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
            <ul>
                {meusLivros.map((livro, key) => (
                    <li key={key}>
                        {livro.titulo} - {livro.nomeAutor} - {livro.editora} - {livro.genero} - {livro.sinopse}
                        <Link to={`/editar/${livro.id}`}>Editar</Link>
                        <Link to={`/remover/${livro.id}`}>Remover</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Home;