import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
      <AddTodo onAddTodo={handleAddTodo} />
    </div>
  );
}

function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" checked={todo.completed} onChange={() => onToggleTodo(index)} />
          {todo.text}
          <button onClick={() => onDeleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function AddTodo({ onAddTodo }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo({ text: todo, completed: false });
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)} />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoApp;