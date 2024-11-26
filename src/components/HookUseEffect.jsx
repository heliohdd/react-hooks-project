import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // Caso de Uso do hook useEffect sem dependências
  // é executado a cada renderização da página
  useEffect(() => {
    console.log("Estou sendo executado!");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // Caso de Uso do hook useEffect com dependência vazia
  // é executado uma única vez
  useEffect(() => {
    console.log("Serei executado apenas uma vez!");
  }, []);

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
