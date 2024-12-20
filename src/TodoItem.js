import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todo-item">
      <span className="check-icon">V</span>
      <p className={`todo-text ${props.completed ? 'completed' : ''}`}>{props.text}</p>
      <span className="delete-icon">X</span>
    </li>
  );
}

export { TodoItem };