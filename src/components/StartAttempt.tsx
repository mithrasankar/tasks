import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function start(): void {
        setInProgress(true);
        setNumAttempts(numAttempts - 1);
    }
    function stop(): void {
        setInProgress(false);
    }
    function mulligan(): void {
        setNumAttempts(numAttempts + 1);
    }
    return (
        <div>
            <Button onClick={start} disabled={inProgress || numAttempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stop} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            {numAttempts}
        </div>
    );
}
