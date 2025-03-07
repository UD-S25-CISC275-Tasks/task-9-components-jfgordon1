import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    enum Holiday {
        Christmas = "🎄",
        Halloween = "🎃",
        LanternFestival = "🏮",
        NewYear = "🎉",
        StPatricksDay = "🍀"
    }

    const holidayOrders = {
        alphabetical: [
            Holiday.Christmas,
            Holiday.Halloween,
            Holiday.LanternFestival,
            Holiday.NewYear,
            Holiday.StPatricksDay
        ],
        byYear: [
            Holiday.NewYear,
            Holiday.LanternFestival,
            Holiday.StPatricksDay,
            Holiday.Halloween,
            Holiday.Christmas
        ]
    };

    const [holiday, setHoliday] = useState(holidayOrders.alphabetical[0]);

    function cycleHoliday(current: Holiday, listOfDays: Holiday[]): void {
        const index = listOfDays.indexOf(current);
        setHoliday(listOfDays[(index + 1) % listOfDays.length]);
    }
    function toggleAlpha(): void {
        cycleHoliday(holiday, holidayOrders.alphabetical);
    }

    function toggleDate(): void {
        cycleHoliday(holiday, holidayOrders.byYear);
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
