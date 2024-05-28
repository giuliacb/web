import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { ContatosContext } from '../contexts';
import { useParams } from 'react-router-dom';

const Editar = () => {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [erroNome, setErroNome] = useState("");
    const [erroTelefone, setErroTelefone] = useState("");
    
    const {id} = useParams();

    return (
        <h2>Editar Contato</h2>
    );
};

export default Editar;