import { useState, useContext } from "react";
import LivrosContext from "../contexts/LivrosContext";
import { useNavigate } from "react-router-dom";
function Novo(){
    const [titulo, setTitulo] = useState("");
    const [nomeAutor, setNomeAutor] = useState("");
    const [editora, setEditora] = useState("");
    const [genero, setGenero] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [erroTitulo, setErroTitulo] = useState("");
    const [erroNomeAutor, setErroNomeAutor] = useState("");
    const [erroEditora, setErroEditora] = useState("");
    const [erroGenero, setErroGenero] = useState("");
    const [erroSinopse, setErroSinopse] = useState("");

    const {incluirLivro} = useContext(LivrosContext);
    const navigate = useNavigate();

    function handleSubmit(event){
        const novo = {
            titulo: titulo,
            nomeAutor: nomeAutor,
            editora: editora,
            genero: genero,
            sinopse: sinopse
        };

        event.preventDefault();

        if(titulo == ""){
            setErroTitulo("Titulo é obrigatório");
            return;
        }

        if(nomeAutor == ""){
            setErroNomeAutor("Nome do(a) autor(a) é obrigatório");
            return;
        }

        if(editora == ""){
            setErroEditora("Editora é obrigatória");
            return;
        }

        if(genero == ""){
            setErroGenero("Gênero é obrigatório");
            return;
        }

        incluirLivro(novo);
        navigate('/');
    }


    return (
        <> 
            <h2>Novo Livro</h2>
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
}

export default Novo;