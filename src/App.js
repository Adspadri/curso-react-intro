// Importaciones necesarias
import logo from './platzi.webp'; // Importa un logo en formato .webp
import { TodoCounter } from './TodoCounter'; // Componente para mostrar el contador de tareas completadas
import { TodoSearch } from './TodoSearch'; // Componente para buscar tareas
import { TodoList } from './TodoList'; // Componente para listar tareas
import { CreateTodoButton } from './CreateTodoButton'; // Componente para el botón de creación de nuevas tareas
import { TodoItem } from './TodoItem'; // Componente individual para cada tarea en la lista
import React from 'react'; // Importa React para usar JSX y crear componentes

// Lista de tareas por defecto (mock data)
const defaultTodos = [
  { text: "Cortar cebolla", completed: true }, // Tarea completada
  { text: "Llorar con la Llorona", completed: false }, // Tarea pendiente
  { text: "Cortarme el Cabello", completed: false }, // Tarea pendiente
  { text: "Finalizar el curso de React.js", completed: false }, // Tarea pendiente
];

// Componente principal de la aplicación
function App() {
  return (
    // React.Fragment agrupa elementos sin añadir nodos extra al DOM
    <>
      {/* Componente que muestra el contador de tareas completadas */}
      <TodoCounter completed={16} total={25} />

      {/* Componente para buscar tareas */}
      <TodoSearch />

      {/* Componente que contiene la lista de tareas */}
      <TodoList>
        {/* Itera sobre las tareas por defecto y renderiza cada una con el componente TodoItem */}
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} // Clave única para optimización del renderizado
            text={todo.text} // Texto de la tarea
            completed={todo.completed} // Estado de completado de la tarea
          />
        ))}
      </TodoList>

      {/* Componente para el botón de creación de nuevas tareas */}
      <CreateTodoButton />
    </>
  );
}

// Exporta el componente principal para su uso en otros archivos
export default App;

