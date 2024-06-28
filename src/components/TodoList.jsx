const TodoList = (props) => {
    const tempTodos = ['first', 'second', 'third', 'fourth'];

    return (
      <ul>
        {tempTodos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    );
  };
  
  export default TodoList;
  