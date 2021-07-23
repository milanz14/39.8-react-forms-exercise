import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import ToDo from "./ToDo";
import { v4 as uuid } from "uuid";

const TodoList = () => {
    const INITIAL_STATE = [
        { id: 1, task: "Mow the lawn" },
        { id: 2, task: "Bathe the dog" },
    ];

    const [todos, setTodos] = useState(INITIAL_STATE);

    const createToDo = (task) => {
        setTodos((todos) => [...todos, { task, id: uuid() }]);
    };

    const removeToDo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <NewTodoForm createToDo={createToDo} />
            {todos.map((todo) => (
                <ToDo
                    task={todo.task}
                    removeToDo={removeToDo}
                    id={todo.id}
                    key={todo.id}
                />
            ))}
        </div>
    );
};

export default TodoList;
