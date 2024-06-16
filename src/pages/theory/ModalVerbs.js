import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import TheoryMenu from '../../components/TheoryMenu';

export default class ModalVerbs extends Component {
    render() {
        return (
            <div className="theory-page">
                <TheoryMenu/>
                <Container className="about" style={{marginLeft: '350px', padding: '2rem'}}>
                    <Row>
                        <Col md={12}>
                            <h1 className="text-uppercase font-weight-bold text-center my-4"
                                style={{fontSize: '3rem'}}>Модальные глаголы</h1>
                            <p style={{fontSize: '1.25rem', lineHeight: '1.75'}}>
                                Модальные глаголы <em>(modal verbs)</em> — это особая группа глаголов. Они обозначают
                                возможность, вероятность, необходимость или способность совершить какое-то действие.
                                Есть модальные глаголы, используя которые, вы можете рассказать об умениях
                                человека <em>(can/could)</em>, запретить или приказать кому-либо что-то
                                делать <em>(must)</em>, дать совет <em>(should)</em>.
                            </p>
                            <p style={{fontSize: '1.25rem', lineHeight: '1.75'}}>Рассмотрим несколько примеров модальных
                                глаголов:</p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-success text-center"
                                                style={{fontSize: '1.25rem'}}>
                                    <em>I <strong>must</strong> finish this article till Wednesday.</em> —
                                    Я <strong>должен</strong> закончить эту статью до среды.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1"
                                                style={{fontSize: '1.25rem'}}>
                                    <em>You <strong>should</strong> follow your doctor’s advice!</em> —
                                    Тебе <strong>следует</strong> слушать советы доктора!
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1"
                                                style={{fontSize: '1.25rem'}}>
                                    <em>She <strong>can’t</strong> swim so she isn’t coming with us to the river.</em> —
                                    Она <strong>не умеет</strong> плавать, поэтому она не идет с нами на реку.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1"
                                                style={{fontSize: '1.25rem'}}>
                                    <em>What languages <strong>can</strong> he speak?</em> — На каких языках
                                    он <strong>может</strong> говорить?
                                </ListGroup.Item>
                            </ListGroup>
                            <h5 className="p m-2" style={{fontSize: '1.5rem'}}>Правила употребления модальных
                                глаголов</h5>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-primary text-center"
                                                style={{fontSize: '1.25rem'}}>
                                    Модальный глагол всегда употребляется со смысловым глаголом, который стоит в
                                    начальной форме (<em>must do, could see</em>).
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary m-1 text-center"
                                                style={{fontSize: '1.25rem'}}>
                                    Модальные глаголы имеют одну форму во всех лицах и числах. Исключением будет
                                    лишь <em>have to</em>, который принимает форму <em>has</em> после местоимений <em>he,
                                    she, it</em>.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary m-1 text-center"
                                                style={{fontSize: '1.25rem'}}>
                                    Модальные глаголы всегда стоят в настоящем времени (даже в контексте будущего
                                    времени), однако некоторые из них могут принимать прошедшую форму: <em>can — could;
                                    may — might, must — had to</em>.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary m-1 text-center"
                                                style={{fontSize: '1.25rem'}}>
                                    В отрицательных и вопросительных предложениях модальные глаголы не употребляются со
                                    вспомогательными, за исключением <em>have to.</em>
                                </ListGroup.Item>
                            </ListGroup>
                            <p style={{fontSize: '1.25rem', lineHeight: '1.75'}}>Пример:</p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-success text-center"
                                                style={{fontSize: '1.25rem'}}>
                                    <em>I <strong>can’t</strong> do it.</em> — Я <strong>не могу</strong> этого сделать.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1"
                                                style={{fontSize: '1.25rem'}}>
                                    <em><strong>May</strong> I use your laptop?</em> — <strong>Могу</strong> я
                                    воспользоваться вашим ноутбуком.
                                </ListGroup.Item>
                            </ListGroup>
                            <p className="m-2" style={{fontSize: '1.25rem', lineHeight: '1.75'}}>Рассмотрим, как
                                строится утвердительное предложение с модальным глаголом:</p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-light text-center"
                                                style={{fontSize: '1.25rem'}}>
                                    Подлежащее + модальный глагол + смысловой глагол в начальной форме
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-danger text-center m-1"
                                                style={{fontSize: '1.25rem'}}>
                                    Обратите внимание, что для соединения модального и смыслового глаголов не нужна
                                    частица <em>to</em>. За исключением <em>ought to</em> и <em>have to</em>,
                                    где <em>to</em> — часть модального глагола.
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}



