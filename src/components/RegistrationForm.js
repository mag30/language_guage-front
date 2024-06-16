import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axiosInstance from "../api/axiosInstance";

const RegistrationForm = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            alert('Пароли не совпадают');
            return;
        }

        try {
            const response = await axiosInstance.post('user/register', {
                name: userData.name,
                email: userData.email,
                password: userData.password,
            });
            console.log('Регистрация успешна', response.data);
            window.location.href = '/login';
        } catch (error) {
            console.error('Ошибка регистрации', error);
            alert('Ошибка регистрации');
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} className='about p-3'>
                <Form.Group className="mb-3">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Введите имя"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email адрес</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Введите email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Подтвердите пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Подтвердите пароль"
                        name="confirmPassword"
                        value={userData.confirmPassword}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Зарегистрироваться
                </Button>
            </Form>
        </Container>
    );
};

export default RegistrationForm;