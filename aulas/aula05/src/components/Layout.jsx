import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function Layout(){
    const {logout} = useContext(AuthContext);

    const navigate = useNavigate();

    function handleClick(event){
        logout();
        navigate("/login");
    }

    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/perfil/1'>Perfil</NavLink></li>
                    <li><button onClick={handleClick}>Sair</button></li>
                </ul>
            </nav>
            <main><Outlet/></main>;
        </>
    );
}

export default Layout;