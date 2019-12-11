import React from 'react';
import Header from './Header';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'


export default class App extends React.Component {
  render() {
    return (
      <div style={{ width: 400 }}>
        <Header />
        <AddTodo />
        <hr />
        <TodoList />
        <hr />
        <TodoFilter />
      </div>
    )
  }
}