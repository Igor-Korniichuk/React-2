import React, {Component} from "react";
import Counter from "./Counter/Counter";
import TodoList from "./TodoList";


class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: 'false' },
      { id: 'id-2', text: 'Разобраться с React Router', completed: 'false' },
      { id: 'id-3', text: 'Пережить Redux', completed: 'false' },      
    ], 
  };
  render() {
    const { todos } = this.state;
    return (
    <div>
      <Counter initialValue={110} />
        <TodoList todos={todos} />
    </div>
  );
  }
  
};

export default App;
