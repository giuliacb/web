import { useState, useContext } from "react";
import ContatosContext from "../contexts/ContatosContext";
import { useNavigate } from "react-router-dom";

function Novo(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [erroNome] = useState("");
    const [erroTelefone] = useState("");

    const incluirContato = useContext(ContatosContext);
    const navigate = useNavigate();

    const novo = {
        nome: nome,
        telefone: telefone
    };

    function handleSubmit(){
        preventDefault();
        incluirContato(novo);
        navigate('/');
    }

    return (
        <>
            <h2>Novo Contato</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />
                {erroNome && <p className="erro">{erroNome}</p>}

            <label htmlFor="telefone">Telefone:</label>
                <input
                    type="text"
                    id="telefone"
                    value={telefone}
                    onChange={(event) => setTelefone(event.target.value)}
                />
                {erroTelefone && <p className="erro">{erroTelefone}</p>}
            
            <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default Novo;