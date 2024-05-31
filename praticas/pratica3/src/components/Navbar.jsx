import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return (
        <>
            <ul>
                <li><NavLink to ='/'>Meus Contatos</NavLink></li>
                <li><NavLink to ='/novo'>Novo Contato</NavLink></li>
            </ul>
        </>
    );
}

export default Navbar;