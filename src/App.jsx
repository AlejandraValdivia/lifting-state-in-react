import { useState } from "react";
import IncrementButton from "./components/IncrementButton";
import NewTodo from "./components/NewTodo";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const addOne = () => {
    setCount(count + 1);
  };

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    console.log('--- New Todo ---', newTodo);
    setTodos(updatedTodos);
  };

  const showTodos = todos.map((todo, index) => <li key={index}>{todo}</li>);

  return (
    <>
      <p>Count: {count}</p>
      <IncrementButton addOne={addOne} />
      <h1>Todo App</h1>
      <NewTodo addTodo={addTodo} />
      <ul>{showTodos}</ul>
    </>
  );
};

export default App;
