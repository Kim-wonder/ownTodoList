import React, { useState } from "react";
import "./style.css";

export default function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value, id: todos.length + 1 });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo(initialState);
  };

  return (
    <form onSubmit={onSubmit} className="add-form">
      <div className="input-group">
        <label className="form-label"> 제목 </label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChange}
        />
        <label className="form-label"> 내용 </label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChange}
        />
      </div>
      <button className="add-button">할 쑤 이 쒀 🔥</button>
    </form>
  );
}