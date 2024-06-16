import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../api/axiosInstance";

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get('user/retrieve');
                setUser(response.data.user);
            } catch (error) {
                console.error('Ошибка получения данных пользователя', error);
                window.location.href = "/login"
            }
        };

        fetchUser();
    },[]);

    if (!user) {
        return <p>Загрузка...</p>;
    }

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Профиль пользователя</Card.Title>
                    <Card.Text>
                        <strong>Имя:</strong> {user.name}<br />
                        <strong>Email:</strong> {user.email}<br />
                        <strong>Уровень:</strong> {user.level} <Button variant="primary" onClick={() => window.location.href='/EntranceTest'}>
                        Повысить уровень
                    </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserProfile;
