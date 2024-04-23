import Titulo from '../components/Titulo';
function Home(){
    const itens= ["Item1", "Item2", "Item3", "Item4"];
    return <>
    <Titulo text = "Home"/>
    <ul>
        {/* <li>{itens[0]}</li>
        <li>{itens[1]}</li>
        <li>{itens[2]}</li>
        <li>{itens[3]}</li> */}
        {itens.map(elemento => 
            <li>{elemento}</li>
        )}
    </ul>
    </>;
}

export default Home;