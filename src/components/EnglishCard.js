import React, {useState} from 'react';
import { Card, Button ,Col, Row, Container} from 'react-bootstrap';

const EnglishCard = ({ englishWord, translation }) => {
    const [textTranslation,setTextTranslation] = useState(englishWord)

    let translate = () => {
        if (textTranslation === translation) {
            setTextTranslation(englishWord)
        }else{
            setTextTranslation(translation)
        }
    }

    return (
            <div className="about m-2 rounded-4 container">
                <p className="p-big text-sm-center p-5" onClick={translate}><strong>{textTranslation}</strong></p>
            </div>
    );
};

export default EnglishCard;