import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Alert } from 'react-bootstrap';
import axiosInstance from "../../api/axiosInstance";
import Test from "../../components/Test";


const QuizLogic = ({ quizId, questions, title }) => {
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const fetchResult = async () => {
        try {
            const response = await axiosInstance.get(`test/${quizId}/get`);
            if (response.data.result.Passed) {
                setResult(JSON.parse(response.data.result.Answer));
            }
        } catch (error) {
            console.error('Ошибка получения данных пользователя', error);
        }
    };

    useEffect(() => {
        fetchResult();
    }, [quizId]);

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
            const response = await axiosInstance.post('test/check', {
                quizId,
                answers,
            });

            if (response) {
                await fetchResult();
            }
        } catch (error) {
            console.error('Error submitting answers:', error);
        }
    };

    const handleRetake = async () => {
        try {
            await axiosInstance.post(`test/${quizId}/restore`);
            setAnswers({});
            setResult(null);
            setError(null);
            window.location.reload();
        } catch (error) {
            console.error('Error retaking the test:', error);
            setError('Ошибка при повторной попытке прохождения теста');
        }
    };

    return (
        <div className="quiz-container">
            <div className="content">
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col xs={12} md={10} lg={8}>
                            <h1 className="text-uppercase font-weight-bold mb-4 text-center">{title}</h1>
                            <form onSubmit={handleSubmit}>
                                {questions.map((question, index) => (
                                    <Test
                                        key={index}
                                        name={question.name}
                                        question={question.question}
                                        text={question.text}
                                        label1={question.label1}
                                        label2={question.label2}
                                        label3={question.label3}
                                        handleChange={handleChange}
                                        index={index + 1}
                                        result={result}
                                    />
                                ))}
                                {!result && (
                                    <Button variant="secondary" type="submit" className="mt-4">Ответить</Button>
                                )}
                            </form>
                            {result && (
                                <>
                                    <Alert variant="info" className="mt-4">
                                        Результаты теста получены. Проверьте свои ответы выше.
                                    </Alert>
                                    <Button variant="primary" onClick={handleRetake} className="mt-4">Пройти тест заново</Button>
                                </>
                            )}
                            {error && (
                                <Alert variant="danger" className="mt-4">
                                    {error}
                                </Alert>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default QuizLogic;
