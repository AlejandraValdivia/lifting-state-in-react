import { useState } from "react";
const NewTodo = (props) => {
const [newTodo, setNewTodo] = useState("");

  const handleChange = (event) => {
    setNewTodo(event.target.value);
    console.log(newTodo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Todo: </label>
      <input
        type="text"
        id="todoInput"
        name="todo"
        onChange={handleChange}
        value={newTodo}
      />
      <br />
      <br />
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default NewTodo;
