import React from 'react';
import { useEffect, useContext } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import ContatosContext from '../contexts/ContatosContext';

const Remover = () => {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const {id} = useParams();
    const { listarContatos } = useContext(ContatosContext);
    

    useEffect(() => {
        if (id) {
            const fetchContato = async () => {
                try {
                    const contato = await consultarContatos(id);
                    setNome(contato.nome);
                    setTelefone(contato.telefone);
                } catch (error) {
                    console.error('Erro ao consultar contato:', error);
                }
            };
            fetchContato(id);
        }
    }, [id]);

    const navigate = useNavigate();

    const handleRemover = async () => {
        try {
            await removerContato(id);
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