import './TodoCounter.css';

function TodoCounter({ total, completed }){
    return (
        <h1>
            Has completado {completed} de tus {total} ToDos
        </h1>
    );
}
export {TodoCounter};
