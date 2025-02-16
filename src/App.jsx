import { useState, useEffect } from "react";
import TodoPage from "./pages/TodoPage";

const App = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    if (todos.length > 0) {
      saveTodos(todos);
    }
  }, [todos]);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Kom-ihåg-lista!</h1>
      <TodoPage todos={todos} setTodos={setTodos} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
