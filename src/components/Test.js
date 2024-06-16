import React from 'react';
import { Form } from 'react-bootstrap';

const Test = ({ name, question, text, label1, label2, label3, handleChange, index, result }) => {
    const getClass = (label) => {
        if (!result) return '';
        const answer = result[`q${index}`];
        if (!answer) return '';
        if (answer.userAnswer === label) {
            return answer.isRight ? 'text-success' : 'text-danger';
        }
        return '';
    };

    return (
        <div className="test-item mb-4">
            <h2 className="test-name">{name}</h2>
            <h3 className="test-question">{question}</h3>
            <p className="test-text">{text}</p>
            <Form>
                <Form.Check
                    type="radio"
                    label={label1}
                    name={`question${index}`}
                    id={`question${index}option1`}
                    value={label1}
                    onChange={handleChange}
                    className={getClass(label1)}
                    disabled={!!result}
                />
                <Form.Check
                    type="radio"
                    label={label2}
                    name={`question${index}`}
                    id={`question${index}option2`}
                    value={label2}
                    onChange={handleChange}
                    className={getClass(label2)}
                    disabled={!!result}
                />
                <Form.Check
                    type="radio"
                    label={label3}
                    name={`question${index}`}
                    id={`question${index}option3`}
                    value={label3}
                    onChange={handleChange}
                    className={getClass(label3)}
                    disabled={!!result}
                />
            </Form>
        </div>
    );
};

export default Test;