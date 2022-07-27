import React from "react";
import "./style.css";

export default function Todo ({ todo, onDelete, onComplete }) {
  return (
    <div className="todo-container">
        <div className="todo-mission">             
            <h2 className="todo-title">{todo.title}</h2>
            <div>{todo.body}</div>
        </div>
        <div className="button-set">
            <button
            className="del-btn button"
            onClick={() => onDelete(todo.id)}>
            Del
            </button>
            <button className="doit-btn button" 
            onClick={() => onComplete(todo.id)}> 
                {todo.isDone ? "cancel" : "Finish"}  
            </button>
        </div>
    </div>
  );
}
