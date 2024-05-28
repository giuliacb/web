import { useContext, useEffect } from "react";
import ContatosContext from "../contexts/ContatosContext";

function Home() {
    const { meusContatos, listarContatos, incluirContato } = useContext(ContatosContext);
    useEffect(()=> {
        listarContatos();
    }, []);

    return (
        <>
            <h2>Meus Contatos</h2>
            <ul>
                {meusContatos.map((contato, key) => 
                    <li id={key}>
                        {contato.nome} - {contato.telefone}
                        <Link to = "/editar/${contato.id}">Editar</Link>|
                        <Link to = "/remover/${contato.id}">Remover</Link>
                    </li>)}
            </ul>
        </>
    );
}

export default Home;