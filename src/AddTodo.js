import React from "react";
import { useState } from "react";

function AddTodo({ onAddTodo }) {
    const [todo, setTodo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTodo({ text: todo, completed: false });
        setTodo("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)} />
            <button>Add Todo</button>
        </form>
    );
}

export default AddTodo;