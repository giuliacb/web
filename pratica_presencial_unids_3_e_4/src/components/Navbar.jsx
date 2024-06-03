import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <>
            <ul>
                <li><NavLink to='/'>Meus Livros</NavLink></li>
                <li><NavLink to='/novo'>Novo Livro</NavLink></li>
            </ul>
        </>
    );
}

export default Navbar;