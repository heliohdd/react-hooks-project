import { useEffect, useState } from "react";

const HookUseEffect = () => {
    // Caso de Uso do hook useEffect sem dependências
    useEffect(() => {console.log("Estou sendo executado!") }, [])
    
const [number, setNumber] = useState(1)

const changeSomething = () => {
    setNumber(number + 1)
}
    
  return (
    <div>
        <hr />
      <h1>Caso de Uso do hook useEffect sem dependências</h1>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
    </div>
  );
};

export default HookUseEffect;
