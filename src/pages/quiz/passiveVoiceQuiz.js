import React from 'react';
import QuizMenu from '../../components/QuizMenu';
import QuizLogic from './QuizLogic';

const passiveVoiceQuestions = [
    {
        name: "Задание № 1",
        question: "Выберете не верное предложение",
        text: "",
        label1: "The news programme watched by millions of people every day.",
        label2: "The Mona Liza was painted by Leonardo da Vinchi.",
        label3: "The new cinema will be built next year."
    },
    {
        name: "Задание № 2",
        question: "Выберите правильный глагол для предложения: The book ... by Hardy.",
        text: "",
        label1: "write",
        label2: "wrote",
        label3: "was written"
    },
    {
        name: "Задание № 3",
        question: "Выберите правильный глагол для предложения: I ... last Friday.",
        text: "",
        label1: "arrived",
        label2: "arrive",
        label3: "was arrived"
    },
    {
        name: "Задание № 4",
        question: "Выберите неправильное предложение",
        text: "",
        label1: "The room will be cleaned later.",
        label2: "Tom has lost his key.",
        label3: "London visited by hundreds of tourists every year."
    },
    {
        name: "Задание № 5",
        question: "Выберите предложение без пассивного залога",
        text: "",
        label1: "English (speak) all over the world.",
        label2: "She (invite) me to a party.",
        label3: "My dress is clean now. It (wash)."
    }
];

const PassiveVoiceQuiz = () => {
    return (
        <div className="quiz-container">
            <QuizMenu />
            <QuizLogic quizId="passive-voice-quiz" questions={passiveVoiceQuestions} title="Пассивный залог" />
        </div>
    );
};

export default PassiveVoiceQuiz;
