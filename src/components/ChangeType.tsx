import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeType(): void {
        const type =
            questionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question";
        setQuestionType(type);
    }

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
        </div>
    );
}
