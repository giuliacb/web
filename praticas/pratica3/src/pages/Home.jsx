import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ContatosContext from "../contexts/ContatosContext";

function Home() {
    const { meusContatos, listarContatos } = useContext(ContatosContext);

    useEffect(() => {
        listarContatos();
    }, [listarContatos]);

    return (
        <>
            <h2>Meus Contatos</h2>
            <ul>
                {meusContatos.map((contato, key) => (
                    <li key={key}>
                        {contato.nome} - {contato.telefone}
                        <Link to={`/editar/${contato.id}`}>Editar</Link> |
                        <Link to={`/remover/${contato.id}`}>Remover</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Home;