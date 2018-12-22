import React from "react";
import Todo from "./Todo";
import todosData from "./todoData";

class App extends React.Component {
  render() {
    const todoItems = 
    this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
    return <Todo item={}/>;
  }
}

export default App;
