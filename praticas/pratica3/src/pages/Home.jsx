import { useContext } from "react";
import ContatosContext from "../contexts/ContatosContext";

function Home(){
    const {meusContatos} = useContext(ContatosContext);
   
    return (
        <>
            <h2>Meus Contatos</h2>
            <ul>
                {meusContatos.map((contato, key) => 
                    <li id={key}>
                        {contato.nome} - {contato.telefone}
                    </li>)}
            </ul> 
        </>
    );
}

export default Home;