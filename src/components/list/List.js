import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

export default function List({ todos, setTodos }) {


  const onDelete = (todoId) => {
    const newTodos = todos.filter((todo) => {
        return todo.id !== todoId;
    });

    setTodos(newTodos);
  };


  const onComplete = (todoId) => {
    const newTodos = todos.map((todo) => {
        if (todo.id === todoId) {
            return {
            ...todo, isDone: !todo.isDone,
            };
        } else {
            return { ...todo };
        }
    }
    );

    setTodos(newTodos);
  };



  return (
    <div className="list-container">
        <h2 className="list-title"> 가보자고 🐜</h2>
        <div className="list-wrapper">

            {todos.map((todo) => {
            if (!todo.isDone) {
                return (
                <Todo
                    todo={todo}
                    key={todo.id}
                    setTodos={setTodos}
                    onDelete={onDelete}
                    onComplete={onComplete} />
                );
            } else {
                return null;
            }})}
            
        </div>
        <h2 className="list-title">내가해냄 😎</h2>
        <div className="list-wrapper">
            {todos.map((todo) => {
            if (todo.isDone) {
                return (
                <Todo
                    todo={todo}
                    key={todo.id}
                    setTodos={setTodos}
                    onDelete={onDelete}
                    onComplete={onComplete} />
                );
            } else {
                return null;
            }})}

        </div>

    </div>
  );
}
