import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LivrosContext from "../contexts/LivrosContext";

const Editar = () => {
    const { listarLivros, incluirLivro, consultarLivro, alterarLivro } = useContext(LivrosContext);

    const [titulo, setTitulo] = useState("");
    const [nomeAutor, setNomeAutor] = useState("");
    const [editora, setEditora] = useState("");
    const [genero, setGenero] = useState("");
    const [erroTitulo, setErroTitulo] = useState("");
    const [erroNomeAutor, setErroNomeAutor] = useState("");
    const [erroEditora, setErroEditora] = useState("");
    const [erroGenero, setErroGenero] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect (() => {
        listarLivros();
    }, [listarLivros]);

    useEffect(() => {
        if(id){
            const fetchLivro = async () => {
                try {
                    const livro = await consultarLivro(id);
                    setTitulo(livro.titulo);
                    setNomeAutor(livro.nomeAutor);
                    setEditora(livro.editora);
                    setGenero(livro.genero);
                    setSinopse(livro.sinopse);
                } catch (error) {
                    console.error("Erro consultar livro", error)
                }
            };
            fetchLivro();
        }
    }, [id, consultarLivro]);

    const handleSubmit = (event) => {
        event.preventDefault();

        let hasError = false;
        if(!titulo){
            setErroTitulo("Titulo é obrigatório");
            hasError = true;
        } else {
            setErroTitulo("");
        }

        if(!nomeAutor) {
            setErroNomeAutor("Nome do(a) autor(a) é obrigatório");
            hasError = true;
        } else {
            setErroNomeAutor("");
        }

        if(!editora){
            setErroEditora("Editora é obrigatória");
            hasError = true;
        } else {
            setErroEditora("");
        }

        if(!genero){
            setErroGenero("Gênero é obrigatório");
            hasError = true;
        } else {
            setErroGenero("");
        }

        // sinopse não é obrigatoria ent nn tem essa verificação

        if(!hasError){ //se nn tiver erro vai alterar o livro
            if(id){
                alterarLivro({id, titulo, nomeAutor, editora, genero, sinopse}).then(() => {
                    navigate('/');
                });
            } else {
                incluirLivro({titulo, nomeAutor, editora, genero, sinopse}).then(() => {
                    navigate('/');
                });
            }
        }
    };

    return (
        <>
            <h2>Editar Livro</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titulo"></label>
                    <input 
                        type='text'
                        id='titulo'
                        placeholder='Título do Livro'
                        value={titulo}
                        onChange={(event)=>setTitulo(event.target.value)}
                    />
                    {erroTitulo && <p className="erro">{erroTitulo}</p>}
                    
                <label htmlFor="nomeAutor"></label>
                    <input 
                        type='text'
                        id='nomeAutor'
                        placeholder='Nome do(a) Autor(a)'
                        value={nomeAutor}
                        onChange={(event)=>setNomeAutor(event.target.value)}
                    />
                    {erroNomeAutor && <p className="erro">{erroNomeAutor}</p>}
                
                <label htmlFor="editora"></label>
                    <input 
                        type='text'
                        id='editora'
                        placeholder='Editora'
                        value={editora}
                        onChange={(event)=>setEditora(event.target.value)}
                    />
                    {erroEditora && <p className="erro">{erroEditora}</p>}
                
                <label htmlFor="genero"></label>
                    <select 
                        id="genero" 
                        value={genero} 
                        onChange={(event) => setGenero(event.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="acao">Ação</option>
                        <option value="biografia">Biografia</option>
                        <option value="distopia">Distopia</option>
                        <option value="fantasia">Fantasia</option>
                        <option value="ficcao">Ficção</option>
                        <option value="gastronomia">Gastronomia</option>
                        <option value="infantil">Infantil</option>
                        <option value="terror">Terror</option>
                        <option value="romance">Romance</option>
                        <option value="suspense">Suspense</option>
                        <option value="Outro">Outro</option>
                    </select>
                    {erroGenero && <p className="erro">{erroGenero}</p>}
                
                <label htmlFor="sinopse"></label>
                    <textarea 
                        id='sinopse'
                        placeholder='Sinopse'
                        value={sinopse}
                        onChange={(event)=>setSinopse(event.target.value)}
                    />
                    {erroSinopse && <p className="erro">{erroSinopse}</p>}
                
                <button type="submit">Salvar Livro</button>
            </form>
        </>
    );

};

export default Editar;