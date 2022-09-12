import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: JSON.parse(localStorage.getItem('todoList')) };
  }

  savelocalStorage = () => {
    const { todos } = this.state;
    localStorage.setItem('todoList', JSON.stringify(todos));
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      })),
    }), this.savelocalStorage);
  };

  delTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => (todo.id !== id)),
    }), this.savelocalStorage);
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }), this.savelocalStorage);
  };

  setUpdate = (updatedTitle, id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => ({
        ...todo,
        title: todo.id === id ? updatedTitle : todo.title,
      })),
    }), this.savelocalStorage);
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo handleSubmit={this.addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
