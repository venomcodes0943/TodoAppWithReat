import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo(todo);

  const handleTodo = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ title: todo, completed: false });
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleTodo} className="flex">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-md px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button
          type="submit"
          className="rounded-r-md px-6 py-1 bg-slate-300 hover:bg-slate-400 transition-all duration-150 text-black focus:ring ring-slate-500"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
