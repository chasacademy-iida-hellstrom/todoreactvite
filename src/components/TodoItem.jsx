import PropTypes from "prop-types";

const TodoItem = ({ todo, index, toggleComplete, handleDelete }) => {
  return (
    <li className="todo-item">
      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </span>
      <button
        className={`toggle-btn ${todo.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(index)}
      >
        ✔
      </button>
      <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
        🗑️
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoItem;
