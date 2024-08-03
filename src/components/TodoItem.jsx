import React, { useState } from "react";
import IconDelete from "./IconDelete";
import IconSave from "./IconSave";
import IconEdit from "./IconEdit";
import { useTodo } from "../context/TodoContext";
const TodoItem = ({ todo }) => {

  const [todoMsg, setTodoMsg] = useState(todo.title);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const updateTodo = () => {
    editTodo({ ...todo, title: todoMsg }, todo.id);
    setIsTodoEditable(false);
  };
  const { editTodo, removeTodo, toggleComplete } = useTodo();

  return (
    <div
      className={`flex border w-full border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-green-400" : "bg-slate-300"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-md  ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            updateTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? <IconSave /> : <IconEdit />}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => removeTodo(todo.id)}
      >
        <IconDelete />
      </button>
    </div>
  );
};

export default TodoItem;
