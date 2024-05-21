import { createContext, useState } from "react";

const ContatosContext = createContext({
    meusContatos: [],
    incluirContato: () => {}
});

function ContatosContextProvider(props){
    const [contatos, setContatos] = useState([]);

    function incluir(contato){
        setContatos([...contatos, contato]);
    }

    const contexto = {
        meusContatos: contatos,
        incluirContato: incluir,
    }   

    return (
    <ContatosContext.Provider value={contexto}>
        {props.children}
    </ContatosContext.Provider>
    );
}

export {ContatosContextProvider};
export default ContatosContext;