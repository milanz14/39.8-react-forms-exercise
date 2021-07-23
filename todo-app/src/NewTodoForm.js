import React, { useState } from "react";

const NewTodoForm = (props) => {
    const INITIAL_STATE = {
        task: "",
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.task) {
            alert("You must enter a task");
        } else {
            props.createToDo(formData.task);
        }
    };

    const handleChange = (e) => {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={formData.task}
                    onChange={handleChange}
                />
                <button>Add New Todo</button>
            </form>
        </div>
    );
};

export default NewTodoForm;
