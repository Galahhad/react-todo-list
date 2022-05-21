import React, { useState } from "react";
import Todo from "./Todo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const todoArray = [];

  const [text, setText] = useState("");

  const [todo, setTodo] = useState(todoArray);

  const [error, setError] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    const some = todo.some(
      (todo) => todo.text.toUpperCase() === text.toUpperCase()
    );
    if (text.trim().length === 0 || some) {
      setText("");
      text.trim().length === 0 ? setError(false) : setError(true);
    } else {
      setTodo([
        {
          text: text,
          checked: false,
        },
        ...todo,
      ]);
      setText("");
      setError(false);
      toast.success("Дело добавлено", {
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const deleteTodo = (id) => {
    toast.success("Дело удалено", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    setError(false);
    setTodo(todo.filter((todo, index) => index !== id));
  };

  const addCheck = (id) => {
    setError(false);
    setTodo(
      todo.map((todo, index) => {
        if (index === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <form className="Form" onSubmit={addTodo}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Введите текст"
        />
        <button title="добавить" type="submit">
          Add
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      {error && <p className="added">Такое дело уже добавлено</p>}
      <Todo
        text={text}
        todo={todo}
        deleteTodo={deleteTodo}
        addCheck={addCheck}
      />
    </>
  );
};

export default Form;
