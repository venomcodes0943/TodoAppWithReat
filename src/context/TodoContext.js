import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  editTodo: (todo, id) => {},
  removeTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
