import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "maroon",
        "orange",
        "coral",
        "olive",
        "lavender",
        "tan",
        "pink",
        "indigo"
    ];
    const [myColor, setMyColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setMyColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    inline
                    key={color}
                    label={color}
                    type="radio"
                    id={color}
                    name="color"
                    value={color}
                    checked={myColor === color}
                    style={{ backgroundColor: color, color: "white" }}
                    onChange={updateColor}
                />
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: myColor ? myColor : "transparent",
                    width: "100px",
                    height: "50px",
                    marginTop: "10px"
                }}
            >
                <div>You have chosen {myColor}.</div>
            </div>
        </div>
    );
}
