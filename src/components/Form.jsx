import { useState } from "react";
import React from "react";

const Form = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todos) => {
        if (todos.id === id) {
          return { ...todos, completed };
        }

        return todos;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todos) => todos.id !== id);
    });
  }

  return (
    <div className="text-white">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex flex-col justify-center"
      >
        <label className="block my-1.5" htmlFor="todoText">
          Add new item
        </label>
        <input
          className="h-10 rounded-lg font-bold border-1 border-white text-2xl focus:border-2 focus:border-amber-500"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          id="todoText"
        />
        <button
          className="text-black font-bold w-30 py-1 px-3 my-5 rounded-2xl mx-auto outline-2 outline-amber-500 bg-amber-500 cursor-pointer"
          type="submit"
        >
          Add
        </button>

        <div className="py-2 px-1 rounded-md">
          <h2 className="font-bold  text-3xl">Todo List:</h2>
          <ul className="flex flex-col gap-3 py-3">
            {todos.length === 0 && "No Todos"}
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <label className="text-1xl">
                    <input
                      className="w-5 h-5 mx-1 cursor-pointer"
                      type="checkbox"
                      checked={todo.completed}
                      onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                    />
                    {todo.title}
                  </label>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="border-1 mx-3 px-1 font-bold text-red-600 border-red-600 rounded cursor-pointer"
                    type="button"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Form;
