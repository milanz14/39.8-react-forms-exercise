import React from "react";
import "./Box.css";

function Box({ height, width, color, id, remove, name }) {
    return (
        <>
            <h3>Box Name: {name}</h3>
            <div
                className="Box"
                style={{
                    height: `${height}px`,
                    width: `${width}px`,
                    backgroundColor: color,
                }}
            >
                <button onClick={(e) => remove(id)}>X</button>
            </div>
        </>
    );
}

export default Box;
