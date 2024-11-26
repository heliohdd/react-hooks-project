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

  // Caso de Uso do hook useEffect com item/itens na dependência
  // é executado quando algum item é alterado
  const [anotherNumber, setAnotherNumber] = useState(0);
  useEffect(() => {
    if (anotherNumber) {
      console.log("Sou executado apenas quando o anotherNumber muda!");
    }
  }, [anotherNumber]);

  // Cleanup no useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello world!!!");

      // setAnotherNumber(anotherNumber + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <hr />
      <h1>Caso de Uso do hook useEffect sem dependências</h1>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <hr />
      <h2>Caso de Uso do hook useEffect com itens na dependência</h2>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Use Effect
      </button>
    </div>
  );
};

export default HookUseEffect;
