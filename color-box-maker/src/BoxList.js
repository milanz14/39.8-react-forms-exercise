import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

function BoxList() {
    const INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const [areAnyBoxes, setAreAnyBoxes] = useState(false);

    const remove = (id) => {
        setBoxes(boxes.filter((box) => box.id !== id));
    };

    const createBox = (width, height, color) => {
        setBoxes([...boxes, { width, height, color, id: uuid() }]);
        setAreAnyBoxes(true);
    };

    return (
        <div>
            <NewBoxForm createBox={createBox} />
            {areAnyBoxes ? <h2>Your Added Boxes </h2> : <h2>Add Box Below</h2>}
            {boxes.map((box) => (
                <Box
                    id={box.id}
                    key={box.id}
                    height={box.height}
                    width={box.width}
                    color={box.color}
                    remove={remove}
                    name={box.color}
                />
            ))}
        </div>
    );
}

export default BoxList;
