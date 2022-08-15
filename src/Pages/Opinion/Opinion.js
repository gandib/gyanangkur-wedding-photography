import React, { useEffect, useState } from 'react';
import './Opinion.css';
import Card from 'react-bootstrap/Card';

const Opinion = () => {
    const [opinions, setOpinions] = useState([]);
    useEffect(() => {
        fetch('opinion.json')
            .then(res => res.json())
            .then(data => setOpinions(data));
    }, []);
    return (
        <div>
            <h2 className='container text-start mt-5'>Customer Opinions</h2>
            <div className='container opinion-container mt-4'>
                {
                    opinions.map(opinion => <Card
                        key={opinion.id}>
                        <Card.Img variant="top" src={opinion.img} />
                        <Card.Body>
                            <Card.Title>{opinion.name}</Card.Title>
                            <Card.Text>
                                {opinion.opinion}
                            </Card.Text>
                        </Card.Body>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default Opinion;