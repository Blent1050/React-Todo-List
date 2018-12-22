import React from "react";

class Todo extends React.Component {
  render(props) {
    return (
      <div className="todo">
        <input type="checkbox" />
        <h3>{props.item.text}</h3>
      </div>
    );
  }
}

export default Todo;
