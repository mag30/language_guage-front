import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import TheoryMenu from "../../components/TheoryMenu";

export default class Article extends Component {
    render() {
        return (
            <div className="theory-page">
                <TheoryMenu />
                <Container className="about" style={{ marginLeft: '350px', padding: '2rem' }}>
                    <Row>
                        <Col md={12}>
                            <h1 className="text-uppercase font-weight-bold text-center my-4" style={{ fontSize: '3rem' }}>Артикль</h1>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>
                                Основная функция артикля — указывать на определенность или неопределенность существительного. Поэтому и артиклей в английском языке два — неопределенный артикль <em>a/an (indefinite article)</em> и определенный артикль <em>the (definite article)</em>. Также есть такое понятие, как нулевой артикль <em>(zero article)</em>.
                            </p>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Выбор одного из артиклей связан с <u>исчисляемостью существительного:</u></p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                                    <strong>неопределенный артикль</strong> <em>a/an</em> используется с исчисляемыми существительными в единственном числе;
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                                    <strong>определенный артикль</strong> <em>the</em> может использоваться с исчисляемыми существительными (независимо от их числа) и с неисчисляемыми существительными;
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-primary text-center" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                                    <strong>нулевой артикль</strong> употребляется с неисчисляемыми существительными или с исчисляемыми во множественном числе.
                                </ListGroup.Item>
                            </ListGroup>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Примеры:</p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                                    <em>I heard <strong>a story</strong></em> (исчисляемое существительное в единственном числе). — Я услышал <strong>историю.</strong>
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                                    <em>I liked <strong>the films</strong></em> (исчисляемое существительное во множественном числе). — Мне понравились <strong>фильмы.</strong>
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                                    <em>It is good <strong>advice</strong></em> (неисчисляемое существительное). — Это хороший <strong>совет.</strong>
                                </ListGroup.Item>
                            </ListGroup>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.75' }}>Если существительное употребляется с прилагательным, то артикль ставим перед прилагательным.</p>
                            <ListGroup className="mb-4">
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                                    <em>It is <strong>a hot day</strong></em>. — Сегодня <strong>жаркий день</strong>
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-success text-center" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                                    <em>It is <strong>the hottest day</strong> of this week</em>. — Это <strong>самый жаркий день</strong> на этой неделе.
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
