import PropTypes from "prop-types";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const TodoPage = ({ todos, setTodos, removeTodo }) => {
  return (
    <div className="todo-container">
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} removeTodo={removeTodo} />
    </div>
  );
};

TodoPage.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoPage;
