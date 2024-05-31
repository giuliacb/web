import { useState } from "react";
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
                <label htmlFor="titulo">Titulo:</label>
                    <input 
                        type='text'
                        id='titulo'
                        value={titulo}
                        onChange={(event)=>setTitulo(event.target.value)}
                    />
                    {erroTitulo && <p className="erro">{erroTitulo}</p>}
            </form>
        </>
    );
}

export default Novo;