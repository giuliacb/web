import Titulo from '../components/Titulo';
import Container from '../components/Container';
import InputMatricula from '../components/Input';

function Login(props){
    return (
    <> 
    <Container>
        <Titulo text = "Login"/>
        <InputMatricula/>
        <button onClick = {props.onLogar}>Entrar</button>
    </Container>
    </>
    );
}

export default Login;