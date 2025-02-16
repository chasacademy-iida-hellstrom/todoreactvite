import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ setTodos }) => {
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };



    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });

    setTodoText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={handleInputChange}
        placeholder="Sak att komma ihåg"
      />
      <button type="submit">Lägg till</button>
    </form>
  );
};


TodoForm.propTypes = {
  setTodos: PropTypes.func.isRequired,
};

export default TodoForm;
