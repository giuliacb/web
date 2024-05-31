import React from 'react';
import { useState, useEffect, useContext } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import ContatosContext from '../contexts/ContatosContext';

const Remover = () => {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const {id} = useParams();
    const { listarContatos, consultarContato, excluirContato } = useContext(ContatosContext);
    

    useEffect(() => {
        const fetchContato = async () => {
            try {
                const contato = await consultarContato(id); 
                setNome(contato.nome);
                setTelefone(contato.telefone);
            } catch (error) {
                console.error('Erro ao consultar contato:', error);
            }
        };
        if (id) {
            fetchContato();
        }
    }, [id, consultarContato]);

    const navigate = useNavigate();

    const handleRemover = async () => {
        try {
            await excluirContato(id);
            listarContatos();
            navigate('/');
        } catch (error) {
            console.error('Erro ao remover contato:', error);
        }
    };


    return (
    <>
        <h2>Remover Contato</h2>
        <label>Nome</label>
        <span>{nome}</span>
        <label>Telefone</label>
        <span>{telefone}</span>
        <button onClick={handleRemover}>Remover</button>
    </>);
};

export default Remover;