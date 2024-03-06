import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsAsked, setAttemptsAsked] = useState<string>(" ");
    const attemptsTotal = (parseInt(attemptsAsked) || 0) + attemptsLeft;
    function askForAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsAsked(event.target.value);
    }
    function toUse(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function toGain(): void {
        setAttemptsLeft(attemptsTotal);
    }
    return (
        <div>
            <Form.Group controlId="GiveAttempts">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsAsked}
                    onChange={askForAttempts}
                    placeholder="enter # attempts"
                />
            </Form.Group>
            <h3>Give Attempts</h3>
            <Button onClick={toUse} disabled={attemptsLeft === 0}>
                Use
            </Button>
            <Button onClick={toGain}>Gain</Button>
            {attemptsLeft}
        </div>
    );
}
