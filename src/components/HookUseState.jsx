import { useState } from "react";

const HookUseState = () => {
  let userName = "Hélio";

  const [name, setName] = useState("Érica");

  const changeNames = () => {
    userName = "Hélio Dourado";

    setName("Érica Ori");

    console.log(userName);
    console.log(name);
  };

  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age)
  };

  return (
    <div>
      <hr />
      <h2>Hook Use State</h2>
      <p>Valor da variável userName: {userName}</p>
      <p>Valor do state name: {name}</p>
      <button onClick={changeNames}>Clicar</button>
      <hr />
      <form onSubmit={handleSubmit}>
        <h2>Hook useState para inputs em campo de formulário</h2>
        <p>Digite sua idade:</p>
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <input type="submit" value="Atualizar" />
      </form>
      <p>Você tem {age} anos</p>
    </div>
  );
};

export default HookUseState;
