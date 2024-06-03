import Navbar from './Navbar';
import './Layout.css'
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <>
            <header>
                <h1>Meu Acervo de Livros</h1>
                <Navbar/>
            </header>
            <main><Outlet/></main>
            <footer>
                <p>Copyright 2024</p>
            </footer>
        </>
    );
}

export default Layout;