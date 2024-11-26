import { useState, useReducer } from "react";

const HookUseReducer = () => {
  // 1- Uso básico do hook useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2- Uso do hook useReducer com utilização de actions
  const initialTasks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];

  const [taskText, setTaskText] = useState("");

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = { id: Math.random(), text: taskText };

        setTaskText("");

        return [...state, newTask];

      case "DELETE":
        return state.filter((task) => {
          task.id !== action.id;
        });
      default:
        return state;
    }
  };

  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  // #Investigar motivo de apagar todos os itens da lista com o clique duplo ao invés de um só item
  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };

  return (
    <div>
      {/* 1- Uso básico do hook useReducer */}
      <hr />
      <h2>Hook Use Reducer para disparar uma função</h2>
      <p>O valor de number em useReducer é: {number}</p>
      <button onClick={dispatch}>Dispara UseReducer</button>

      {/* 2- Uso do hook useReducer com utilização de actions */}
      <h2>Hook Use Reducer para disparar uma função</h2>
      <h2>que adiciona tarefa ou outra que exclui tarefa</h2>
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value={"Incluir Tarefa"} />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}
    </div>
  );
};

export default HookUseReducer;
