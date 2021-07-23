import React from "react";

const ToDo = ({ removeToDo, task, id }) => {
    return (
        <div>
            <p>{task}</p>
            <button onClick={() => removeToDo(id)}>DEL</button>
        </div>
    );
};

export default ToDo;
