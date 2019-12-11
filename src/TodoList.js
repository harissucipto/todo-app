import React from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
  render() {

    const items = [
      { id: 1, title: 'Write React Hooks book', completed: true },
      { id: 2, title: 'Promote book', completed: false }
    ]

    return items.map(item =>
      <TodoItem {...item} key={item.id} />
    )
  }
}