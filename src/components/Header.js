import React, { Component } from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import logo from './logo.png';
import axiosInstance from "../api/axiosInstance";
import {getRefreshToken, removeAccessToken, removeRefreshToken} from "../shared/helpers/localStorageHelpers";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        this.fetchUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.fetchUser();
        }
    }

    fetchUser = async () => {
        const { location } = this.props;

        try {
            const response = await axiosInstance.get('user/retrieve');
            this.setState({ user: response.data.user });
            if (response.data.user.level === "None" && location.pathname !== '/EntranceTest'){
                window.location.href = "/EntranceTest"
            }
        } catch (error) {
            if (location.pathname === '/registration' ||
                location.pathname === '/login' ||
                location.pathname === "/about" ){
                return;
            }
            console.error('Ошибка получения данных пользователя', error);
            window.location.href = "/login"
        }
    };

    handleLogout = async () => {
        try {
            const response = await axiosInstance.post('user/logout',{
                "refreshToken": getRefreshToken()
            });
            this.setState({user: null});
        } catch (error) {
            console.error('Ошибка выхода пользователя', error);
        }
        removeRefreshToken()
        removeAccessToken()
        window.location.href = '/login';
    };

    render() {
        const { user } = this.state;

        console.log(user)

        return (
            <div className="pb-3">
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/" >
                            <img
                                src={logo}
                                height="40"
                                width="40"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Brand href="/" >
                            LANGUAGE.GUIDE
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {user ? (
                                        <>
                                    <Nav.Link href="/">Главная страница</Nav.Link>
                                        </>
                                ):(
                                    <></>
                                )}
                                <Nav.Link href="/about">О нас</Nav.Link>
                            </Nav>

                            <Nav>
                                {user ? (
                                    <>
                                        <Nav.Link href="/userProfile">
                                            {user.name}
                                        </Nav.Link>
                                        <Nav.Link as={Button} onClick={this.handleLogout}>
                                            Выйти
                                        </Nav.Link>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link href="/registration">Регистрация</Nav.Link>
                                        <Nav.Link href="/login">Войти</Nav.Link>
                                    </>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(Header);
