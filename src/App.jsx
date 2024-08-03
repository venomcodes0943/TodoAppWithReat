import { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((preTodos) => [...preTodos, { id: Date.now(), ...todo }]);
  };

  const editTodo = (todo, id) => {
    setTodos((preTodos) =>
      preTodos.map((item) => (item.id === id ? { ...item, ...todo } : item))
    );
  };

  const removeTodo = (id) => {
    setTodos((preTodos) => preTodos.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((pre) =>
      pre.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, editTodo, removeTodo, toggleComplete }}
    >
      <div className="bg-[#2a2a2a] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-[#2e2e2e]">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3 max-h-96 overflow-y-auto">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
