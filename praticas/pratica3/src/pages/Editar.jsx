import React from 'react';
import { useEffect, useState, useContext } from 'react';
import ContatosContext from '../contexts/ContatosContext';
import { useParams } from 'react-router-dom';

const Editar = () => {
    const {listarContatos, incluirContato } = useContext(ContatosContext);

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [erroNome, setErroNome] = useState("");
    const [erroTelefone, setErroTelefone] = useState("");
        
    const {id} = useParams();

    useEffect(()=> {
        listarContatos();
    }, [listarContatos]);

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

    const handleSubmit = () => {
        let hasError = false;
        if (!nome) {
            setErroNome(true);
            hasError = true;
        } else {
            setErroNome(false);
        }

        if (!telefone) {
            setErroTelefone(true);
            hasError = true;
        } else {
            setErroTelefone(false);
        }

        if (!hasError) {
            if (id) {
                alterarContato({ id, nome, telefone }); 
            } else {
                incluirContato({ nome, telefone });
            }
            navigate('/'); 
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
                    onChange={(e) => setNome(e.target.value)}
                />
                {erroNome && <p className="erro">{erroNome}</p>}
            
            <label htmlFor="telefone">Telefone:</label>
                <input
                    type="text"
                    id="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
                {erroTelefone && <p className="erro">{erroTelefone}</p>}
            
            <button>Enviar</button>
        </form>
    </>);
};

export default Editar;