import React from 'react';

import QuizLogic from './QuizLogic';
import QuizMenu from "../../components/QuizMenu";

const futureQuizQuestions = [
    {
        name: "Задание № 1",
        question: "Выберите предложение, в котором глагол употреблен верно",
        text: "",
        label1: "By the time Teddy comes home Pamela will eat all the apple jam.",
        label2: "It’s still not clear if the weather will have change for the better.",
        label3: "When Sandra enters a Design College she will have been studying Drawing for 5 years there."
    },
    {
        name: "Задание № 2",
        question: "Выберите правильный глагол для предложения: We ... to lake Baikal in 2 months.",
        text: "",
        label1: "will travel",
        label2: "will have travelled",
        label3: "will have been travelling"
    },
    {
        name: "Задание № 3",
        question: "Выберите правильный глагол для предложения: She ... tennis tomorrow afternoon.",
        text: "",
        label1: "will be playing",
        label2: "will have played",
        label3: "will have been playing"
    },
    {
        name: "Задание № 4",
        question: "Выберите предложение, в котором глагол употреблен неверно",
        text: "",
        label1: "My dear granny will have become a pensioner by 2018.",
        label2: "When you come to the station I will wait for you by the central entrance.",
        label3: "By the time he returns, we will have been starving here for 3 days!"
    },
    {
        name: "Задание № 5",
        question: "Выберите правильный глагол для предложения: We ... to lake Baikal in 2 months.",
        text: "",
        label1: "will travel",
        label2: "will have travelled",
        label3: "will have been travelling"
    }
];

const FutureQuiz = () => {
    return (
        <div className="quiz-container">
            <QuizMenu />
            <QuizLogic quizId="future-forms-quiz" questions={futureQuizQuestions} title="Future Forms" />
        </div>
    );
};

export default FutureQuiz;
