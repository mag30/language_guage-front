import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import TheoryMenu from '../../components/TheoryMenu';

export default class PresentForm extends Component {
    render() {
        return (
            <div className="theory-page">
                <TheoryMenu />
                <Container className="about" style={{ marginLeft: '350px', padding: '2rem' }}>
                    <Row>
                        <Col md={12}>
                            <h1 className="text-uppercase font-weight-bold text-center my-4" style={{ fontSize: '3rem' }}>Present Forms</h1>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                Здесь мы предлагаем поближе познакомиться с настоящими временами в английском языке — <em><strong>Simple, Present Continuous, Present Perfect и Present Perfect Continuous.</strong></em>
                            </p>
                            <h2 className="text-center m-2" style={{ fontSize: '2rem' }}>Present Simple</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                Это простое настоящее время, обозначающее действие в самом широком смысле этого слова. Одна из самых распространенных и простых форм в английском языке для описания действий.
                                Действия могут быть связаны с привычками, хобби, ежедневным событием вроде подъема по утрам или чем-то, что случается регулярно.
                            </p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem' }}>
                                    Постоянные и повторяющиеся действия в настоящем
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Последовательные действия, например в сюжете книги или фильма
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Для описания действия, которое происходит согласно определенному графику.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>I go to work every day</em> — Я хожу на работу каждый день.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>They usually play tennis every weekend</em> — Они обычно играют в теннис каждые выходные.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>She brings me coffee every morning</em> — Она приносит мне кофе каждое утро.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-danger m-2 text-center" style={{ fontSize: '1.25rem' }}>
                                    ВАЖНО: В Present Simple форма глагола практически всегда совпадает с изначальной. Исключение составляет третье лицо единственного числа (he / she / it) к нему прибавляется окончание -s
                                </ListGroup.Item>
                            </ListGroup>

                            <div className="text-center">
                                <Image src='https://u.foxford.ngcdn.ru/uploads/tinymce_file/file/56273/d7d70aa51f1ec78c.png' style={{ maxWidth: '300px', maxHeight: '300px' }} rounded />
                            </div>

                            <h2 className="text-center m-2" style={{ fontSize: '2rem' }}>Present Continuous</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                Present Continuous Tense (или Present Progressive Tense) переводится с английского языка как «настоящее длительное время». В английской речи оно употребляется наравне с Present Simple, с той же частотой, и занимает важное место в грамматике.
                            </p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem' }}>
                                    Время <em>Present Continuous</em> используется для описания действия, которое происходит в текущий момент времени
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>Present Continuous</em> используется для описания длительных действий в настоящем, даже если они не происходят в момент речи. То есть на протяжении какого-то времени мы периодически выполняем это действие
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>Present Continuous</em> используется для описания изменений, происходящих в какой-то ситуации, и процесса развития. В таких конструкциях действие часто передается глаголами <em>to get (становиться), to increase (увеличивать/увеличиваться), to decrease (уменьшать/уменьшаться), to rise (подниматься), to fall (падать), to start (начинать/начинаться), to change (менять/меняться)</em> и т. д.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>Present Continuous</em> может использоваться для обозначения событий ближайшего будущего, но только в том случае, если это касается запланированных действий.
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>Listen! The music <strong>is playing.</strong></em> — Слушай! Музыка <strong>играет</strong>.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>Steve <strong>is watching</strong> TV at the moment</em>. — Сейчас Стив <strong>смотрит</strong> телевизор.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>Jessica <strong>is learning</strong> French.</em> — Джессика <strong>учит</strong> французский. (<em>она занимается изучением французского уже какое-то время и будет продолжать учить его, но она не занята изучением французского прямо сейчас</em>)
                                </ListGroup.Item>
                            </ListGroup>

                            <div className="text-center m-1">
                                <Image src='https://lh6.googleusercontent.com/TolerCmRBekE4qywc90YdA3YBaOasiNgQ6XfuCCUSdehxUtRDkheanEyW0jDoAoHge3ua1Fgc6gPpM45GBkf21aYFXidfaPjeJD-xyWqfaIq7zmkqV84zllvQHIAs7IP2ee1Et0I' style={{ maxWidth: '300px', maxHeight: '300px' }} rounded />
                            </div>

                            <h2 className="text-center m-2" style={{ fontSize: '2rem' }}>Present Perfect</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                Present Perfect Tense (Present Perfect) — это настоящее совершенное время в английском языке. Оно обозначает действие, которое завершилось в настоящий момент времени.
                            </p>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75', margin: '1rem 0' }}>
                                В этом и состоит основная сложность времени Present Perfect для изучающих. В русском языке нет времени аналогичного Present Perfect. Для нас если что-то происходит сейчас — это и есть настоящее, а если совершилось — это уже прошлое.
                            </p>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75', margin: '1rem 0' }}>
                                Но не для англичан. Они воспринимают время немного по-другому. По логике носителей языка, действие вполне может закончиться и в настоящем или близко к настоящему моменту. Для выражения такой связи прошлого с настоящим и существует Present Perfect.
                            </p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem' }}>
                                    Завершенные действия, у которых есть результат в настоящем. Если действие произошло в прошлом, но у него есть связь с настоящим, используем <em>Present Perfect.</em>
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Чтобы поделиться недавними новостями, мы употребляем <em>Present Perfect</em>.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Действия, которые многократно повторялись до настоящего момента
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Действия, которые начались в прошлом и все еще продолжаются
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>I <strong>have already done</strong> my homework</em> — Я <strong>уже сделал</strong> домашнее задание
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>She<strong> has not finished</strong> her tasks</em> — Она <strong>не выполнила</strong> свои задачи
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em><strong>Has</strong> she <strong>just arrived</strong> home?</em> — Она <strong>только что приехала</strong> домой?
                                </ListGroup.Item>
                            </ListGroup>

                            <div className="text-center m-1">
                                <Image src='https://englsecrets.ru/wp-content/uploads/2020/01/present-perfect-2-min.jpg' style={{ maxWidth: '300px', maxHeight: '300px' }} rounded />
                            </div>

                            <h2 className="text-center m-2" style={{ fontSize: '2rem' }}>Present Perfect Continuous</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                <em>Present Perfect Continuous Tense</em> (или <em>Present Perfect Progressive</em>) — настоящее длительное совершенное время. Употребление <em>Present Perfect Continuous</em> уместно для выражения действий, которые начались в прошлом и длились до сих пор. Это время используется в речи сравнительно нечасто, но тем не менее есть случаи, в которых обойтись без него не получится. Правильное употребление предложений в <em>Present Perfect Continuous</em> подтверждает высокий уровень знаний языка говорящего.
                            </p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem' }}>
                                    Завершенные действия, у которых есть результат в настоящем. Если действие произошло в прошлом, но у него есть связь с настоящим, используем <em>Present Perfect.</em>
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Чтобы поделиться недавними новостями, мы употребляем <em>Present Perfect</em>.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Действия, которые многократно повторялись до настоящего момента
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    Действия, которые начались в прошлом и все еще продолжаются
                                </ListGroup.Item>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Например:</p>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>It <strong>has been raining</strong> all day long. I’m sick and tired of this weather.</em> — Дождь <strong>идет</strong> весь день. Меня достала эта погода.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>Sorry, I <strong>haven’t been listening</strong> to you. Now I’m all ears.</em> — Извини, я тебя <strong>не слушала</strong>. Теперь я вся во внимании.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em><strong>Has</strong> he <strong>been watching</strong> series all day?</em> — Он что, <strong>смотрел</strong> сериалы весь день?
                                </ListGroup.Item>
                            </ListGroup>

                            <div className="text-center m-1">
                                <Image src='https://avatars.dzeninfra.ru/get-zen_doc/3828869/pub_5f5ebc964c4030243837cbcb_5f5ee10d354535081ecb6708/scale_1200' style={{ maxWidth: '300px', maxHeight: '300px' }} rounded />
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
    );
    }
    }
