import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function answerQuestion(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="CheckAnswer">
                <Form.Label>
                    <h3>Check Answer</h3>
                </Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={answerQuestion}
                    placeholder="enter answer"
                />
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
