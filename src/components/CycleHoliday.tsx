import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const HOLIDAYSALPHA = ["🎄", "🎃", "🏮", "🍀", "💘"];
    const HOLIDAYSDATE = ["🏮", "💘", "🍀", "🎃", "🎄"];
    const [holiday, setHoliday] = useState<string>(HOLIDAYSALPHA[0]);
    const [isAlpha, setIsAlpha] = useState<boolean>(true);

    function cycleHoliday(): void {
        if (isAlpha) {
            const index = HOLIDAYSALPHA.indexOf(holiday);
            setHoliday(HOLIDAYSALPHA[(index + 1) % HOLIDAYSALPHA.length]);
        } else {
            const index = HOLIDAYSDATE.indexOf(holiday);
            setHoliday(HOLIDAYSDATE[(index + 1) % HOLIDAYSDATE.length]);
        }
    }
    function toggleAlpha(): void {
        setIsAlpha(true);
        cycleHoliday();
    }

    function toggleDate(): void {
        setIsAlpha(false);
        cycleHoliday();
    }

    return (
        <div>
            <h2>Cycle Holiday</h2>
            <Button
                onClick={() => {
                    toggleAlpha();
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    toggleDate();
                }}
            >
                Advance by Year
            </Button>
            <h3>Holiday: {holiday}</h3>
        </div>
    );
}
