import React from 'react';
import QuizLogic from './QuizLogic';
import QuizMenu from "../../components/QuizMenu";

const modalVerbsQuestions = [
    {
        name: "Задание № 1",
        question: "Выберите предложение, в котором глагол употреблен верно",
        text: "",
        label1: "Can you see anything in this dark room?",
        label2: "You mustn’t buy mineral water, we have plenty.",
        label3: "We needn’t stay up late."
    },
    {
        name: "Задание № 2",
        question: "Выберите правильный глагол для предложения: You ... not smoke here.",
        text: "",
        label1: "must",
        label2: "may",
        label3: "can"
    },
    {
        name: "Задание № 3",
        question: "Выберите правильный глагол для предложения: It ... rain soon.",
        text: "",
        label1: "must",
        label2: "may",
        label3: "need"
    },
    {
        name: "Задание № 4",
        question: "Выберите предложение, в котором глагол употреблен неверно",
        text: "",
        label1: "Sonia must practise so much if she wants to take part in the marathon.",
        label2: "If you want to improve your English, you need work very hard.",
        label3: "You need not come to help them tomorrow: the work is done."
    },
    {
        name: "Задание № 5",
        question: "Выберите предложение, в котором подходящий модальный глагол 'may'",
        text: "",
        label1: "I’m not sure but perhaps Roberto ... leave for Australia soon.",
        label2: "You ... talk to your daughter about her future.",
        label3: "You ... have a visa to travel to some countries."
    }
];

const ModalVerbsQuiz = () => {
    return (
        <div className="quiz-container">
            <QuizMenu />
            <QuizLogic quizId="modal-verbs-quiz" questions={modalVerbsQuestions} title="Модальные глаголы" />
        </div>
    );
};

export default ModalVerbsQuiz;
