import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axiosInstance from "../api/axiosInstance";
import {setAccessToken, setRefreshToken} from "../shared/helpers/localStorageHelpers";

const LoginForm = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('user/login', {
                email: userData.email,
                password: userData.password,
            });
            const token = response.data.token;
            const refreshToken = response.data.refreshToken;
            setAccessToken(token)
            setRefreshToken(refreshToken)
            console.log('Вход успешен', response.data);
            window.location.href = '/';
        } catch (error) {
            console.error('Ошибка входа', error);
            alert('Ошибка входа');
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} className='about p-3 rounded-2'>
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

                <Button variant="primary" type="submit">
                    Войти
                </Button>
            </Form>
        </Container>
    );
};

export default LoginForm;