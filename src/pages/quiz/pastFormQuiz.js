import React from 'react';
import QuizLogic from './QuizLogic';
import QuizMenu from "../../components/QuizMenu";

const pastFormsQuestions = [
    {
        name: "Задание № 1",
        question: "Выберите верное предложение",
        text: "",
        label1: "She forgot everything she studied at a driving school.",
        label2: "First I had taken off my coat, then I went to the bathroom.",
        label3: "Kim was dancing when her husband opened the door."
    },
    {
        name: "Задание № 2",
        question: "Выберите правильный глагол для предложения: I ... volleyball when the ball hit my head.",
        text: "",
        label1: "was playing",
        label2: "played",
        label3: "had played"
    },
    {
        name: "Задание № 3",
        question: "Выберите правильный глагол для предложения: His clothes were smudgy because he  painting the walls.",
        text: "",
        label1: "finished",
        label2: "had finished",
        label3: "was finished"
    },
    {
        name: "Задание № 4",
        question: "Выберите предложение, в котором глагол употреблен неверно",
        text: "",
        label1: "She looked tired. She had been planting flowers all morning.",
        label2: "His clothes were smudgy because he had finished painting the walls.",
        label3: "When I was five my parents were buying a piano for me."
    },
    {
        name: "Задание № 5",
        question: "Выберите правильный глагол для предложения: He ... the grass for an hour when suddenly the lawn-mower broke down.",
        text: "",
        label1: "cut",
        label2: "was cutting",
        label3: "had been cutting"
    }
];

const PastFormQuiz = () => {
    return (
        <div className="quiz-container">
            <QuizMenu />
            <QuizLogic quizId="past-forms-quiz" questions={pastFormsQuestions} title="Past Forms" />
        </div>
    );
};

export default PastFormQuiz;
