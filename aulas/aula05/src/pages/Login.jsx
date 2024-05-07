import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Login(){
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    function handleClick(event){
        login("giulia@email.com", "1234");
        navigate("/");

    }

    return (
        //fazer link renderiza a pagina toda, ou seja, perde rendimento
        //<a href='/'>...<a/>
        //usar import {Link} from 'react-router-dom';
        //EXEMPLO <Link to='/'>Entrar</Link>
        <>
            <h1>Login</h1>
            <button onClick = {handleClick}>Entrar</button>
        </>
    );
}

export default Login;