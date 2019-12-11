import React from 'react';

export default class AddTodo extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="enter new task" style={{ width: 350, height: 15 }} />
        <input type="submit" style={{ float: 'right', marginTop: 2 }} value="add" />
      </form>
    )
  }
}