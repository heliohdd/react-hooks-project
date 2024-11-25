import { useState } from "react";

const HookUseState = () => {
    let userName = "Hélio"

    const [name, setName] = useState("Érica")

    const changeNames = () => {
        userName = "Hélio Dourado"

        setName("Érica Ori")

        console.log(userName)
        console.log(name)
    }
    
  return (
    <div>
      <hr />
      <h2>Hook Use State</h2>
      <p>Valor da variável userName: {userName}</p>
      <p>Valor do state name: {name}</p>
      <button onClick={changeNames}>Clicar</button>
    </div>
  );
};

export default HookUseState;
