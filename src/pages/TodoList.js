import React, { useState } from 'react';
import Header from '../components/header/Header';
import Form from '../components/form/Form';
import List from '../components/list/List';
import Layout from '../components/layout/Layout';




const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "항해 완주하기",
            body: "완성코드 따라치며 이해하기",
            isDone: false,
        },
        {
            id: 2,
            title: "주말 수면시간 확보",
            body: "하루는 푹 자자",
            isDone: false,
        },


    ]);


  return (
    <Layout >
        <Header />
        <Form setTodos={setTodos} todos={todos} />
        <List todos={todos} setTodos={setTodos} /> 
    </Layout>
  ) 
}

export default TodoList;