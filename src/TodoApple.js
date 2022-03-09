import React from "react";
import { useState } from "react";

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const handleToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    return (
        <>
            <h1>Todo App</h1>
            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
            <AddTodo onAddTodo={handleAddTodo} />
        </>
    );
}

export default TodoApp;