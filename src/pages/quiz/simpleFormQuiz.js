import React from 'react';
import QuizMenu from '../../components/QuizMenu';
import QuizLogic from './QuizLogic';

const presentFormsQuestions = [
    {
        name: "Задание № 1",
        question: "Выберите не верное предложение",
        text: "",
        label1: "He never talks to strangers.",
        label2: "Mike has playing football since morning.",
        label3: "We have been living in Berlin for 10 years."
    },
    {
        name: "Задание № 2",
        question: "Выберите правильный глагол для предложения: They (not be) to Argentina yet.",
        text: "",
        label1: "are",
        label2: "was",
        label3: "haven't been"
    },
    {
        name: "Задание № 3",
        question: "Выберите правильный глагол для предложения: Jane always (do) yoga at sunrise.",
        text: "",
        label1: "does",
        label2: "do",
        label3: "did"
    },
    {
        name: "Задание № 4",
        question: "Выберите неправильное предложение",
        text: "",
        label1: "Alice lived in Italy since 2010.",
        label2: "She goes to the gym on Mondays.",
        label3: "They haven't flown by plane before."
    },
    {
        name: "Задание № 5",
        question: "Выберите подходящий указатель времени для предложения: I'm busy. I'm studying for the exam ...",
        text: "",
        label1: "yet",
        label2: "at the moment",
        label3: "usually"
    }
];

const SimpleFormQuiz = () => {
    return (
        <div className="quiz-container">
            <QuizMenu />
            <QuizLogic quizId="present-forms-quiz" questions={presentFormsQuestions} title="Present Forms" />
        </div>
    );
};

export default SimpleFormQuiz;
