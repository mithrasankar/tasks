import React from "react";
import "./App.css";
<<<<<<< HEAD
import computer from "./images/computer.webp";
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

>>>>>>> upstream/task-state
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Introduction to Software Engineering
                <img
                    src={computer}
                    width="150"
                    height="150"
                    alt="A pink computer"
                />
            </header>
<<<<<<< HEAD
            <h1> Mithra Sankar</h1>

            <p>
                Hello World! I am a student in Spring 2024 CISC275. So far, we
                have completed:
            </p>
            <ul>
                <li>Task 1: Environment Setup</li>
                <li>Task 2: Create Your First Branch</li>
                <li>Task 3: HTML and CSS</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        <div className="column" />
                    </Col>
                    <Col>
                        {" "}
                        <div className="column" />
                    </Col>
                </Row>
            </Container>
            <p> </p>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
