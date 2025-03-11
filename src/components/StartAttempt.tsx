import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [inProgress, setInProgress] = useState(false);

    function startAttempt() {
        setInProgress(true);
        setAttempts(attempts - 1);
    }

    function stopAttempt() {
        setInProgress(false);
    }

    function mulligan() {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <Button
                onClick={() => {
                    startAttempt();
                }}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    stopAttempt();
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>

            <Button
                onClick={() => {
                    mulligan();
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <div>Trys Remaining: {attempts}</div>
        </div>
    );
}
