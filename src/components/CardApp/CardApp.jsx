import React from "react";
import Card from 'react-bootstrap/Card';
import '../../css/CardApp.css';

export function CardApp({ src, title, text }){
    return(
        <>
            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title className='title_card'>{title}</Card.Title>
                    <Card.Text className='text_card'>{text}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}