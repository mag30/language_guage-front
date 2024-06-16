import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import TheoryMenu from '../../components/TheoryMenu';

export default class PastForm extends Component {
    render() {
        return (
            <div className="theory-page">
                <TheoryMenu />
                <Container className="about" style={{ marginLeft: '350px', padding: '2rem' }}>
                    <Row>
                        <Col md={12}>
                            <h1 className="text-uppercase font-weight-bold text-center my-4" style={{ fontSize: '3rem' }}>Past Forms</h1>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                Времена группы <em>Past</em> в английском языке необходимы для описания действий, произошедших в прошлом. В статье разберем случаи и примеры использования <strong><em>Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous</em></strong>.
                            </p>
                            <h2 className="text-center m-2" style={{ fontSize: '2rem' }}>Past Simple</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Past Simple — самое простое из прошедших времен в английском языке. Давайте рассмотрим схему его образования.</p>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Утвердительное предложение:</p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I/He/She/It/You/We/They</em> + глагол с окончанием <em>-ed</em> / 2-я форма глагола
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>He <strong>liked</strong> my photo on Instagram.</em> — Он<strong> лайкнул</strong> мое фото в Instagram.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>They<strong> got up</strong> and <strong>left</strong> the room.</em> — Они <strong>встали</strong> и<strong> вышли</strong> из комнаты.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Отрицательное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I/He/She/It/You/We/They + did not (didn’t)</em> + начальная форма глагола
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>My parents <strong>didn’t give</strong> me any pocket money when I was a child.</em> — Мои родители <strong>не давали</strong> мне карманных денег, когда я был ребенком.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Вопросительное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>Did + I/he/she/it/you/we/they</em> + начальная форма глагола
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em><strong>Did</strong> you <strong>see</strong> the message on the fridge?</em> — Ты <strong>видел</strong> сообщение на холодильнике?
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Давайте поговорим о случаях использования Past Simple:</p>
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem' }}>
                                    Действия, которые произошли и закончились в прошлом.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Действия, которые происходили одно за другим в прошлом.
                                </ListGroup.Item>
                            </ListGroup>

                            <h2 className="text-center m-2" style={{ fontSize: '2rem' }}>Past Continuous</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}><em>Past Continuous</em> — необходимо для описания длительных действий в прошлом. Давайте ознакомимся с правилами его образования.</p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem' }}>
                                    Продолжительное действие в определенный момент в прошлом.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Продолжительное событие в прошлом, которое было прервано другим событием. В таком случае для продолжительного действия используем <em>Past Continuous</em>, а для действия, которое его прерывает — <em>Past Simple.</em>
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Два или более действий, которые происходили одновременно в прошлом
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Когда описываем обстановку и атмосферу во вступлении или предисловии (перед описанием главных событий) к какому-то рассказу.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Утвердительное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I/He/She/It + was</em> + глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-light text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>You/We/They + were</em> + глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I <strong>was dressing up</strong> when somebody knocked on the door.</em> — Я <strong>одевалась</strong>, когда кто-то постучал в дверь.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>We <strong>were cooking</strong> dinner at 5 o’clock yesterday.</em> — Вчера в 5 часов мы <strong>готовили </strong>ужин.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Отрицательное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I/He/She/It + was not (wasn’t)</em> + глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-light text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>You/We/They + were not (weren’t)</em> + глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>It <strong>wasn’t raining</strong> at night, it was snowing.</em> — Ночью<strong> шел</strong> не дождь, а шел снег.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Вопросительное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>Was + I/he/she/it</em> + глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-light text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>Were + you/we/they</em> + глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em><strong>Was</strong> she <strong>jogging</strong> when she fell and broke her arm?</em> — Она <strong>упала</strong> и сломала руку, когда бегала?
                                </ListGroup.Item>
                            </ListGroup>

                            <h2 className="text-center m-2" style={{ fontSize: '2rem' }}>Past Perfect</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>К временам группы Past также относят Past Perfect. Давайте разберем правила его образования.</p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem' }}>
                                    Когда два события произошли в прошлом, но мы подчеркиваем, что одно из них случилось раньше. Для действия, которое случилось первым, употребляем <em>Past Perfect</em>, а для второго — <em>Past Simple</em>.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Когда действие произошло до определенного момента в прошлом. Этот момент часто обозначается с помощью предлога <em>by</em>, например: <em>by 9 o’clock</em> (к 9-ти часам), <em>by Monday</em> (к понедельнику).
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Утвердительное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I/He/She/It/You/We/They + had</em> + глагол в 3-й форме или с окончанием <em>-ed</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>They <strong>had already talked</strong> it through.</em> — Они уже это полностью <strong>обсудили</strong>.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>I came to pick her up at the office, but she <strong>had gone</strong> home already.</em> — Я приехал, чтобы забрать ее из офиса, но она уже <strong>ушла</strong> домой.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Отрицательное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I/He/She/It/You/We/They + had not (hadn’t)</em> + глагол в 3-й форме или с окончанием <em>-ed</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>She<strong> hadn’t said</strong> a word yet.</em> — Она до сих пор<strong> не сказала</strong> ни слова.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Вопросительное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>Had + I/he/she/it/you/we/they</em> + глагол в 3-й форме или с окончанием<em> -ed</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em><strong>Had</strong> you <strong>booked</strong> the apartment in advance?</em> — Ты <strong>забронировал</strong> квартиру заранее?
                                </ListGroup.Item>
                            </ListGroup>

                            <h2 className="text-center m-2" style={{ fontSize: '2rem' }}>Past Perfect Continuous</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Последнее время из группы <em>Past</em>, о котором мы поговорим — <em>Past Perfect Continuous</em>. Начнем с его образования.</p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem' }}>
                                    Продолжительное действие в прошлом, которое случилось перед другим действием в прошлом. Первое действие используем в <em>Past Perfect Continuous</em>, а второе — в <em>Past Simple</em>.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Продолжительное действие в прошлом, которое завершилось до определенного момента в прошлом. Этот момент часто обозначают словом-маркером <em>by</em>.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Утвердительное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I/He/She/It/You/We/They + had been</em> + глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>By the time I woke her up, she <strong>had been sleeping</strong> for 10 hours!</em> — К тому времени, как я ее разбудил, она <strong>проспала</strong> 10 часов!
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>She <strong>had been crying</strong> all morning when I came back home.</em> — Она <strong>проплакала</strong> все утро до того, как я вернулся домой.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Отрицательное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I/He/She/It/You/We/They + had not (hadn’t) been</em> + глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>We<strong> hadn’t been talking</strong> to each other for a year by the time we met at the airport.</em> — Мы <strong>не разговаривали</strong> друг с другом год до того момента, как встретились в аэропорту.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Вопросительное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>Had + I/he/she/it/you/we/they been</em> + глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em><strong>Had</strong> she <strong>been lying</strong> about her real name?</em> — Она <strong>врала</strong> о своем настоящем имени?
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
