import React from "react";

function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li /* key={index} */>
                    <input type="checkbox" checked={todo.completed} onChange={() => onToggleTodo(index)} />
                    {todo.text}
                    <button onClick={() => onDeleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}