import { useReducer } from "react";

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  return (
    <div>
      <hr />
      <h2>Hook Use Reducer</h2>
      <p>O valor de number em useReducer é: {number}</p>
      <button onClick={dispatch}>Dispara UseReducer</button>
    </div>
  );
};

export default HookUseReducer;
