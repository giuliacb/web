import { useContext, useEffect } from "react";
import ContatosContext from "../contexts/ContatosContext";
import {useNavigate} from "react-router-dom";


function Home() {
    const { meusContatos } = useContext(ContatosContext);
    

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