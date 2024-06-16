import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import TheoryMenu from '../../components/TheoryMenu';
import passive_photo from "../images/passive.png";

export default class PassiveVoice extends Component {
    render() {
        return (
            <div className="theory-page">
                <TheoryMenu />
                <Container className="about" style={{ marginLeft: '350px', padding: '2rem' }}>
                    <Row>
                        <Col md={12}>
                            <h1 className="text-uppercase font-weight-bold text-center my-4" style={{ fontSize: '3rem' }}>Пассивный залог</h1>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                Далеко не всегда мы можем уточнить, кто выполняет действие, а порой нам это и вовсе не нужно. В таких случаях уместно употреблять пассивный или страдательный залог, который в английском языке называют <em>passive voice.</em>
                            </p>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                В английском языке существует два залога — активный <em>(active voice)</em> и пассивный или страдательный <em>(passive voice)</em>. В активном залоге действие выполняет подлежащее. В пассивном залоге действие происходит над подлежащим. Давайте сравним:
                            </p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>Mary <strong>cleans</strong> the office every morning.</em> — Мэри <strong>убирает</strong> офис каждое утро. <em>(активный залог)</em>
                                </ListGroup.Item>
                            </ListGroup>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Подлежащее (Мэри) выполняет действие (убирает).</p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-light text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>The office <strong>is cleaned</strong> every morning.</em> — Офис <strong>убирают</strong> каждое утро. <em>(пассивный залог)</em>
                                </ListGroup.Item>
                            </ListGroup>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                Неизвестно, кто выполняет действие. Подлежащее (офис) подвергается действию (его убирают).
                            </p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem' }}>
                                    <em>She <strong>asked</strong> her students to come earlier.</em> — Она <strong>попросила</strong> студентов прийти раньше. <em>(активный залог)</em>
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center m-1" style={{ fontSize: '1.25rem' }}>
                                    <em>The students <strong>were asked</strong> to come earlier.</em> — Студентов <em>попросили</em> прийти раньше. (пассивный залог)
                                </ListGroup.Item>
                            </ListGroup>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                Страдательный залог в английском языке образуется с помощью вспомогательного глагола to be и смыслового глагола в третьей форме. На месте подлежащего в утвердительных предложениях будет стоять человек или предмет, над которым будет производиться действие. Посмотрите на схеме ниже, как активный залог можно преобразовать в пассивный.
                            </p>
                            <div className="text-center">
                                <Image src={passive_photo} alt="Passive Voice Diagram" rounded style={{ maxHeight: '400px', maxWidth: '400px' }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
