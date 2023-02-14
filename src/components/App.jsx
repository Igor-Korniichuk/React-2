import React, {Component} from "react";
import Counter from "./Counter/Counter";
import TodoList from "./TodoList";
import TodoEditor from "./TodoEditor";
import initialTodos from "../todos.json";
import shortid from "shortid";
import Filter from "./Filter";
import Form from "./Form";


class App extends Component {
  state = {
    todos: initialTodos, 
    filter: '',    
  };

  addTodo = text => {    
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({todos}) => ({
      todos: [todo, ...todos],
    }))
  }

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  }

  toggleCompleted = todoId => {
    console.log(todoId);

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Нашли тот туду, который нужно!')
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }))

    this.setState(({ todos }) => ({
      todos: todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed, } : todo,),
    }));
  };

  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value});
  }

  getVisibleTodos = () => {
  const { filter, todos } = this.state;
  const normalizedFilter = filter.toLowerCase();

  return todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter),)
  }

  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // }

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // }
  
  
  formSubmitHandler = data => {
    console.log(data);
}
  

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
  const complitedTodosCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
  const visibleTodos = this.getVisibleTodos();
    return (
    <div>
        <Counter initialValue={110} />

        <div>
          <p>Общее количество: {totalTodoCount}</p>
          <p>Количество выполненных: {complitedTodosCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} /> 
        <Filter value={filter} onChange={ this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        
        <Form onSubmit={this.formSubmitHandler} /> 
    </div>
  );
  }
  
};

export default App;
