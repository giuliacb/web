import { useContext } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from './pages/Perfil';
import Novo from './pages/Novo';

function App() {
  const {user} = useContext(AuthContext);

  return (
    //cadeia de navegação
    <BrowserRouter>
      <Routes>
        {user.logado ? (
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path="/novo" element={<Novo/>}/>
          <Route path='/perfil/:id' element={<Perfil/>}/>
        </Route>
      ) : ( 
        <Route path='/login' element={<Login/>}/>
      )}
      <Route path='*' element={<h1>Não Existe!</h1>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
