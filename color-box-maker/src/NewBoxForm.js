import React, { useState } from "react";

function NewBoxForm({ createBox }) {
    const INITIAL_STATE = {
        height: "",
        width: "",
        color: "",
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.width || !formData.height || !formData.color) {
            alert("Required inputs are missing");
        } else {
            createBox(formData.width, formData.height, formData.color);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Input Color</label>
                    <input
                        type="text"
                        name="color"
                        id="color"
                        placeholder="Color"
                        value={formData.color}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Input Height</label>
                    <input
                        type="text"
                        name="height"
                        id="height"
                        placeholder="Height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Input Width</label>
                    <input
                        type="text"
                        name="width"
                        id="width"
                        placeholder="Width"
                        value={formData.width}
                        onChange={handleChange}
                    />
                </div>
                <button>Make a new Box</button>
            </form>
        </div>
    );
}

export default NewBoxForm;
