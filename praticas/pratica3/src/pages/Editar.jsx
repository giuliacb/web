import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ContatosContext from '../contexts/ContatosContext';

const Editar = () => {
    const { listarContatos, incluirContato, consultarContato, alterarContato } = useContext(ContatosContext);

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [erroNome, setErroNome] = useState("");
    const [erroTelefone, setErroTelefone] = useState("");
        
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        listarContatos();
    }, [listarContatos]);

    useEffect(() => {
        if (id) {
            const fetchContato = async () => {
                try {
                    const contato = await consultarContato(id);
                    setNome(contato.nome);
                    setTelefone(contato.telefone);
                } catch (error) {
                    console.error('Erro ao consultar contato:', error);
                }
            };
            fetchContato();
        }
    }, [id, consultarContato]);

    const handleSubmit = (event) => {
        event.preventDefault();

        let hasError = false;
        if (!nome) {
            setErroNome("Nome é obrigatório");
            hasError = true;
        } else {
            setErroNome("");
        }

        if (!telefone) {
            setErroTelefone("Telefone é obrigatório");
            hasError = true;
        } else {
            setErroTelefone("");
        }

        if (!hasError) {
            if (id) {
                alterarContato({ nome, telefone }).then(() => {
                    navigate('/'); 
                });
            } else {
                incluirContato({ nome, telefone }).then(() => {
                    navigate('/'); 
                });
            }
        }
    };

    return (
        <>
            <h2>Editar Contato</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => {
                        console.log('Nome input change:', e.target.value);
                        setNome(e.target.value)}}
                />
                {erroNome && <p className="erro">{erroNome}</p>}
            
                <label htmlFor="telefone">Telefone:</label>
                <input
                    type="text"
                    id="telefone"
                    value={telefone}
                    onChange={(e) => {
                        console.log('Telefone input change:', e.target.value);
                        setTelefone(e.target.value)}}
                />
                {erroTelefone && <p className="erro">{erroTelefone}</p>}
            
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default Editar;
