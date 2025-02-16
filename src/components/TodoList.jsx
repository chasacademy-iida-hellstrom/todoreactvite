import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const [allCompleted, setAllCompleted] = useState(false);  // Ny state för att hålla koll på om alla todos är klara

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, [setTodos]);

  // Kontrollera om alla todos är slutförda
  useEffect(() => {
    const checkAllCompleted = todos.every(todo => todo.completed);
    setAllCompleted(checkAllCompleted);
  }, [todos]);

  const saveTodosToLocalStorage = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id || index}
            todo={todo}
            index={index}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
     
      {allCompleted && <div className="feedback">Du har inget som måste göras!</div>}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoList;
