import './TodoCounter.css';

function TodoCounter({ total, completed }){
    return (
        <h1>
        <span className="todo-counter-text">Has completado </span>
        <span className="bold-text">{completed}</span>
        <span className="todo-counter-text"> de tus </span>
        <span className="bold-text">{total}</span>
        <span className="todo-counter-text"> ToDos</span>
    </h1>
    );
}
export {TodoCounter};
