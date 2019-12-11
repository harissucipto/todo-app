import React from 'react';
export default class TodoItem extends React.Component {

  render() {
    const { title, completed } = this.props;

    return (
      <div style={{ width: 400, height: 25 }}>
        <input type="checkbox" checked={completed} />
        {title}
        <button style={{ float: 'right' }}>x</button>
      </div>
    )
  }
}