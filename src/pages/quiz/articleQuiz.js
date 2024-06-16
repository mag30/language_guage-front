import React from 'react';
import QuizLogic from './QuizLogic';
import QuizMenu from "../../components/QuizMenu";

const quizQuestions = [
    {
        name: "Задание № 1",
        question: "Выберите предложение, в котором артикль употреблен верно",
        text: "",
        label1: "My aunt and my uncle are teachers.",
        label2: "There is a cheese on the plate.",
        label3: "Next to the window there is door."
    },
    {
        name: "Задание № 2",
        question: "Выберите правильный артикль для предложения: I need ... answer.",
        text: "",
        label1: "an",
        label2: "the",
        label3: "-"
    },
    {
        name: "Задание № 3",
        question: "Выберите правильный артикль для предложения: ... capital of the USA is Washington.",
        text: "",
        label1: "A",
        label2: "The",
        label3: "-"
    },
    {
        name: "Задание № 4",
        question: "Выберите предложение, в котором артикль употреблен неверно",
        text: "",
        label1: "There is a lamp on the desk.",
        label2: "We don't go to school on the Sunday.",
        label3: "After breakfast I go to school."
    },
    {
        name: "Задание № 5",
        question: "Выберите предложение, в котором не требуется артикль",
        text: "",
        label1: "... dinosaurs lived long ago.",
        label2: "I have got ... nice plan.",
        label3: "She has ... new phone."
    }
];

const ArticleQuiz = () => {
    return (
        <div className="quiz-container">
            <QuizMenu />
            <QuizLogic quizId="articleQuiz" questions={quizQuestions} title="Артикль" />
        </div>
    );
};

export default ArticleQuiz;
