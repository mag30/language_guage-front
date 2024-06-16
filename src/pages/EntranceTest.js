import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button, Form, Alert, Modal } from 'react-bootstrap';
import axiosInstance from "../api/axiosInstance";

const BigText = "The United Kingdom of Great Britain and Northern Ireland is situated on two large islands called the British Isles. The largest island is Great Britain, which consists of three parts: England, Scotland and Wales. The smaller island is Ireland and there are about five thousand small islands.\n" +
    "\n" +
    "The country's shores are washed by the Atlantic Ocean, the North Sea and the Irish Sea. The English channel separate Great Britain from the continent.\n" +
    "\n" +
    "The total area of the U.K. is 244.000 square kilometers with a population of 56 million. It is one of the most populated countries in the world. The greater part of the population is urban. About 80 percent of people live in numerous towns and cities. More than seven million people live in London area. Very often the inhabitants of The United Kingdom and Northern Ireland are called English.\n" +
    "\n" +
    "The surface of the British Isles varies very much. There are many mountains in Scotland, Wales and northwest of England but they are not very high. Ben Nevis in Scotland is the highest mountain. Scotland is also famous for its beautiful lakes.\n" +
    "\n" +
    "The mountains in Great Britain are not very high. There are many rivers in Great Britain, but they are not very long. The Themes is the deepest, the longest and the most important river in England.\n" +
    "\n" +
    "The United Kingdom is a highly developed industrial country. It produces and exports machinery, electronics, textile. One of the main industries of the country is shipbuilding."
const Test = ({ name, question, text, label1, label2, label3, handleChange, index }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{question}</h3>
            <p>{text}</p>
            <Form>
                <Form.Check
                    type="radio"
                    label={label1}
                    name={`question${index}`}
                    id={`question${index}option1`}
                    value={label1}
                    onChange={handleChange}
                />
                <Form.Check
                    type="radio"
                    label={label2}
                    name={`question${index}`}
                    id={`question${index}option2`}
                    value={label2}
                    onChange={handleChange}
                />
                <Form.Check
                    type="radio"
                    label={label3}
                    name={`question${index}`}
                    id={`question${index}option3`}
                    value={label3}
                    onChange={handleChange}
                />
            </Form>
        </div>
    );
};

const EntranceTest = () => {
    const [answers, setAnswers] = useState({});
    const [level, setLevel] = useState(null);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        if (showModal) {
            const timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            const timeout = setTimeout(() => {
                setShowModal(false);
                window.location.href = '/';
            }, 5000);

            return () => {
                clearInterval(timer);
                clearTimeout(timeout);
            };
        }
    }, [showModal]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAnswers({
            ...answers,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('entranceTest/checking', {
                question1: answers.question1,
                question2: answers.question2,
                question3: answers.question3,
                question4: answers.question4,
                question5: answers.question5,
            });

            if (response) {
                const data = response.data;
                if (data.level === "None") {
                    setLevel(null);
                    setError("К сожалению, уровень поднять не получилось.");
                } else {
                    setLevel(data.level);
                    setError(null);
                    setShowModal(true);
                }
            } else {
                setError("Failed to submit answers");
                setLevel(null);
            }
        } catch (error) {
            console.error('Error submitting answers:', error);
            setError('An error occurred while submitting your answers');
            setLevel(null);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="text-uppercase font-weight-bold mb-4 text-center">Входное тестирование</h1>
                    <form onSubmit={handleSubmit}>
                        <Test name="Задание № 1" question="Выберите правильный ответ на вопрос" text="Where are you from?" label1="I’m France." label2="I’m from France." label3="I’m French." handleChange={handleChange} index="1" />
                        <Test name="Задание № 2" question="Прочитайте текст и выбирите вероное утверждение о нем." text={BigText} label1="The United Kingdom of Great Britain and Northern Ireland is situated on четыре large islands." label2="The largest island is Great Britain." label3="Great Britain consists of three parts: England, Germany, Wales." handleChange={handleChange} index="2" />
                        <Test name="Задание № 3" question="Выберите правильный глагол для предложения:" text="I ... to wearing contact lenses." label1="used" label2="am getting used" label3="would get used" handleChange={handleChange} index="3" />
                        <Test name="Задание № 4" question="Продолжите предложение:" text="I wonder where ..." label1="is the manager's office" label2="the manager's office is" label3="is the manager of the office" handleChange={handleChange} index="4" />
                        <Test name="Задание № 5" question="Выберите верное слово, в следующем предложении:" text="A ... debate ensued, with neither side prepared to give way to the other." label1="warm" label2="heated" label3="hot" handleChange={handleChange} index="5" />
                        <Button variant="secondary" type="submit">Ответить</Button>
                    </form>
                    {level && (
                        <Alert variant="success" className="mt-4">
                            Поздравляем! Вы получили новый уровень: {level}
                        </Alert>
                    )}
                    {error && (
                        <Alert variant="danger" className="mt-4">
                            {error}
                        </Alert>
                    )}
                    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Уведомление</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Поздравляем! Вы получили новый уровень: {level}</p>
                            <p>Перенаправление на главную страницу через {countdown} секунд...</p>
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};

export default EntranceTest;
