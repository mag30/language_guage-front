import React, { useEffect, useState } from 'react';
import { Nav, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance'; // Импортируем наш axiosInstance
import '../css/CustomSidebar.css'; // Импортируем файл стилей

const CustomSidebar = ({ topics }) => {
    const location = useLocation();
    const [userLevel, setUserLevel] = useState(null);

    useEffect(() => {
        // Функция для получения данных пользователя
        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get('user/retrieve');
                setUserLevel(response.data.user.level);
            } catch (error) {
                console.error('Ошибка получения данных пользователя', error);
            }
        };

        fetchUser();
    }, []);

    // Функция для отображения заблокированных пунктов меню
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Нужно поднять уровень, чтобы открыть эту тему.
        </Tooltip>
    );

    const renderListItem = (topic, index) => {
        let isLocked = false;

        if (userLevel === 'Intermediate' && index > 1) {
            isLocked = true;
        } else if (userLevel === 'Elementary' && index > 3) {
            isLocked = true;
        }

        return isLocked ? (
            <OverlayTrigger
                key={topic.href}
                placement="right"
                delay={{ show: 300, hide: 400 }}
                overlay={renderTooltip}
            >
                <ListGroup.Item
                    href={topic.href}
                    className="locked-item"
                >
                    <i className={topic.icon}></i>{topic.text}
                </ListGroup.Item>
            </OverlayTrigger>
        ) : (
            <ListGroup.Item
                action
                href={topic.href}
                key={topic.href}
                className={location.pathname === topic.href ? "active-item" : "normal-item"}
            >
                <i className={topic.icon}></i>{topic.text}
            </ListGroup.Item>
        );
    };

    return (
        <header>
            <Nav className="sidebar">
                <ListGroup variant="flush" className="menu-list">
                    {topics.map((topic, index) => renderListItem(topic, index))}
                </ListGroup>
            </Nav>
        </header>
    );
};

export default CustomSidebar;