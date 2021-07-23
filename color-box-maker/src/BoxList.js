import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

function BoxList() {
    const INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const remove = (id) => {
        setBoxes(boxes.filter((box) => box.id !== id));
    };

    const createBox = (width, height, color) => {
        setBoxes([...boxes, { width, height, color, id: uuid() }]);
    };

    return (
        <div>
            <NewBoxForm createBox={createBox} />
            {boxes.map((box) => (
                <Box
                    id={box.id}
                    key={box.id}
                    height={box.height}
                    width={box.width}
                    color={box.color}
                    remove={remove}
                />
            ))}
        </div>
    );
}

export default BoxList;
