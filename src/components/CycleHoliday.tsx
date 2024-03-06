import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "👩🏽‍⚖️" | "💘" | "🪔" | "🎨" | "🌾";
    const Holidays: Holiday[] = ["👩🏽‍⚖️", "💘", "🪔", "🎨", "🌾"];
    const [holiday, setHoliday] = useState<Holiday>(Holidays[0]);
    const alphaOrder: Record<Holiday, Holiday> = {
        "🪔": "🎨",
        "🎨": "🌾",
        "🌾": "👩🏽‍⚖️",
        "👩🏽‍⚖️": "💘",
        "💘": "🪔"
    };
    function changeToAlpha(): void {
        const newHoliday = alphaOrder[holiday];
        setHoliday(newHoliday);
    }
    const chronoOrder: Record<Holiday, Holiday> = {
        "🌾": "💘",
        "💘": "👩🏽‍⚖️",
        "👩🏽‍⚖️": "🎨",
        "🎨": "🪔",
        "🪔": "🌾"
    };
    function changeToChrono(): void {
        const newHoliday = chronoOrder[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <Button onClick={changeToAlpha}>Alphabet</Button>
            {"Holiday: " + holiday}
            <Button onClick={changeToChrono}>Year</Button>
            {"Holiday: " + holiday}
        </div>
    );
}
