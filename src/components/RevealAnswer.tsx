import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visibility, setVisitbility] = useState(false);

    function setSeen() {
        setVisitbility(!visibility);
    }
    return (
        <div>
            <Button
                onClick={() => {
                    setSeen();
                }}
            >
                Reveal Answer
            </Button>
            {visibility && <div>42</div>}
        </div>
    );
}
