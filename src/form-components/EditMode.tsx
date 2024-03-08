import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function editing(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="edit-switch"
                label="Edit?"
                checked={edit}
                onChange={updateEdit}
            />
            {edit ? (
                <>
                    <Form.Group controlId="EditName">
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={editing}
                            placeholder="edit name"
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a student?"
                        checked={student}
                        onChange={updateStudent}
                    />
                </>
            ) : (
                <div>
                    {name} is {!student ? "not a student" : "a student"}.
                </div>
            )}
        </div>
    );
}
