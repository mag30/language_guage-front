import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import TheoryMenu from '../../components/TheoryMenu';

export default class FutureForm extends Component {
    render() {
        return (
            <div className="theory-page">
                <TheoryMenu />
                <Container className="about" style={{ marginLeft: '350px', padding: '2rem' }}>
                    <Row>
                        <Col md={12}>
                            <h1 className="text-uppercase font-weight-bold text-center my-4" style={{ fontSize: '3rem' }}>Future Forms</h1>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                В английском языке существует несколько способов говорить о будущем. В статье вас ждет информация о разных формах выражения будущего времени и актуальные примеры.
                            </p>
                            <h2 className="text-center m-2" style={{ fontSize: '2rem' }}>Future Simple</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                <em>Future Simple Tense</em> (простое будущее время в английском языке) — это время указывает на действие, которое, вероятно, произойдет в ближайшем или неопределенном будущем. Давайте рассмотрим схему его образования.
                            </p>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Утвердительное предложение:</p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    Подлежащее + вспомогательный глагол<em> will</em> + смысловой глагол без частицы <em>to</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I<strong> will</strong> (I’ll) <strong> read</strong> this novel soon</em>. — Я скоро <strong> прочту</strong> этот роман.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>I promise I <strong>will take care of</strong> your cat.</em> — Я обещаю, что <strong>позабочусь</strong> о твоем коте.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Отрицательное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    Подлежащее + вспомогательный глагол <em>will</em> + частица<em> not</em> + смысловой глагол без частицы <em>to</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>She<strong> will not (won’t) pass</strong> the exam.</em> — Она <strong>не сдаст</strong> экзамен.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Вопросительное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    Вспомогательный глагол <em>will</em> + подлежащее + смысловой глагол без частицы <em>to</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em><strong>Will</strong> they <strong>help</strong> us choose the furniture? </em>— Они <strong>помогут</strong> нам выбрать мебель?
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Давайте узнаем, когда используется Future Simple.</p>
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem' }}>
                                    Спонтанные решения, принятые в момент речи
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>Future Simple</em> используется, когда мы что-то обещаем. Часто в таких предложениях употребляется глагол <em>to promise</em> (обещать)
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>Future Simple</em> используется для выражения предложения что-то сделать. Напомним, что в данной функции в вопросительных предложениях может встречаться глагол <em>shall</em>
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>Future Simple</em> используется для предсказаний, которые основываются исключительно на опыте и мнении говорящего. Когда мы используем <em>will</em>, говоря о будущем, у нас нет фактов, подтверждающих то, что действие произойдет.
                                </ListGroup.Item>
                            </ListGroup>

                            <h2 className="text-center m-2" style={{ fontSize: '2rem' }}>Future Continuous</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                Время <em>Future Continuous</em> указывает на процесс, который будет длиться в определенный момент в будущем. В отличие от времени <em>Future Simple</em>, этот момент в будущем должен быть назван прямо<em> (tomorrow at 4 o'clock, when we meet)</em> или быть очевидным из контекста.
                            </p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem' }}>
                                    Используем <em>Future Continuous</em>, когда говорим о продолжительном действии, которое будет происходить в будущем в какой-то период времени. Это время может быть указано или понятно из контекста.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>Future Continuous</em> употребляется в вежливых вопросах.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Утвердительное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    Подлежащее + вспомогательные глаголы <em>will be</em> + смысловой глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I <strong>will be driving</strong> all day tomorrow to get there in time</em>. — Я <strong>буду ехать</strong> весь день завтра, чтобы прибыть туда вовремя.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>Sir, you <strong>will be giving</strong> your speech at the end of the ceremony. Please, be ready.</em> — Сэр, вы <strong>будете произносить речь </strong>в конце церемонии. Пожалуйста, будьте готовы.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Отрицательное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    Подлежащее + вспомогательные глаголы <em> will be</em> + частица <em>not</em> + смысловой глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>She <strong>will not be working</strong> on Monday.</em> — Она <strong>не будет работать</strong> в понедельник.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Вопросительное предложение в Future Continuous:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    Вспомогательный глагол <em>will</em> + подлежащее + вспомогательный глагол <em>be</em> + смысловой глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>What <strong>will</strong> you <strong>be doing</strong> when I leave?</em> — Что ты <strong>будешь делать</strong>, когда я уйду?
                                </ListGroup.Item>
                            </ListGroup>

                            <h2 className="text-center m-2" style={{ fontSize: '2rem' }}>Future Perfect Simple</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                <em>Future Perfect Tense (Future Perfect)</em> — это будущее совершенное время в английском языке. Оно используется для описания действия, которое завершится до определенного момента в будущем. Давайте разберем правила его образования.
                            </p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem' }}>
                                    Используем <em>Future Perfect Simple</em> для действий, которые будут завершены до определенного момента в будущем.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Утвердительное предложение в <em>Future Perfect Simple</em></p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    Подлежащее + вспомогательные глаголы <em>will have</em> + смысловой глагол в 3-й форме
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I <strong>will have cleaned</strong> my room by the time mum gets home.</em> — Я <strong>уберу</strong> комнату до того, как мама вернется домой.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>I <strong>will have got</strong> my driver’s license <strong>by</strong> June.</em> — Я <strong>получу</strong> свое водительское удостоверение к июню.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Отрицательное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    Подлежащее + вспомогательный глагол <em>will</em> + частица <em>not</em> + вспомогательный глагол <em>have</em> + смысловой глагол в 3-й форме
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I <strong>will not have finished reading</strong> this book by evening. Give me more time!</em> — Я <strong>не закончу читать</strong> эту книгу до вечера. Дай мне больше времени!
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Вопросительное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    Вспомогательный глагол <em>will</em> + подлежащее + вспомогательный глагол <em>have </em>+ смысловой глагол в 3-й форме
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em><strong>Will </strong>you <strong>have introduced </strong>us to your fiance before your wedding?</em> — Ты <strong>познакомиш</strong>ь нас со своим женихом до свадьбы?
                                </ListGroup.Item>
                            </ListGroup>

                            <h2 className="text-center m-2" style={{ fontSize: '2rem' }}>Future Perfect Continuous</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                <em>Future Perfect Continuous</em> — одна из самых редкоупотребляемых форм в английском языке. Она не так часто встречается в письме, а в устной речи — и того реже. Но все же, будет не лишним знать как она образуется и уметь правильно ее применить.
                            </p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem' }}>
                                    Используем <em>Future Perfect Continuous</em>, когда говорим о действии, которое будет продолжаться до определенного момента в будущем или другого действия.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Используем <em>Future Perfect Continuous</em>, когда необходимо указать причину какого-либо действия в будущем. В таких предложениях присутствует союз <em>so</em> (поэтому) или <em>because</em> (потому что).
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Утвердительное предложение в <em>Future Perfect Continuous</em></p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    Подлежащее + вспомогательные глаголы <em>will have been</em> + смысловой глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>By the evening it <strong>will have been snowing</strong> for 18 hours.</em> — К вечеру <strong>снег будет идти</strong> уже 18 часов.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>I <strong>will have been teaching</strong> her Spanish for a year by the time she visits Spain.</em> — Я <strong>буду обучать</strong> ее испанскому год к тому времени, как она поедет в Испанию.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Отрицательное предложение:</p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    Подлежащее + вспомогательный глагол <em>will</em> + частица <em>not</em> + вспомогательные глаголы <em>have been</em> + смысловой глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>She <strong>will not have been working</strong> long enough by April to participate in a conference.</em> — До апреля она <strong>не проработает</strong> достаточно, чтобы участвовать в конференции.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Вопросительное предложение в <em>Future Perfect Continuous</em></p>
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    Вспомогательный глагол <em>will</em> + подлежащее + вспомогательные глаголы <em>have been</em> + смысловой глагол с окончанием <em>-ing</em>
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em><strong>Will</strong> you <strong>have been studying</strong> German for three years next month?</em> — В следующем месяце ты <strong>будешь изучать</strong> немецкий уже три года?
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
