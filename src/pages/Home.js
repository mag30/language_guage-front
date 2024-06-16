import React, { Component } from 'react'
import quiz_photo from "./images/quiz.png";
import theory_photo from "./images/teorija.png";
import cards_photo from "./images/cards.png";
import {Button} from "react-bootstrap";
import Card from "../../src/components/Card"
export default class Home extends Component {
    render() {
        return (
            <div class="container">

                <Card
                    link="/article"
                    name="Теория"
                    text="нужна и важна. Она представляет собой один из ключевых аспектов обучения языку. Изучение грамматики помогает сделать общение между людьми более понятным. Здесь вы поймете, зачем нужны все эти времена и как ими пользоваться."
                    photo={theory_photo}
                />

                <Card
                    link="/Cards"
                    name="Языковые карточки"
                    text="— это один из наиболее эффективных способов изучения иностранного языка. Они позволяют учащимся практиковаться в использовании новых слов и фраз, а также помогают улучшить их словарный запас. Языковые карточки обычно содержат одну сторону на иностранном языке и другую на родном языке учащегося."
                    photo={cards_photo}
                />

                <Card
                    link="/articleQuiz"
                    name="Викторина"
                    text="– это не просто игра, это увлекательный способ изучения нового материала и проверки знаний. Они помогают участникам развивать критическое мышление, тренировать память и анализировать информацию. Приступим?"
                    photo={quiz_photo}
                />

            </div>
            )
    }
}



