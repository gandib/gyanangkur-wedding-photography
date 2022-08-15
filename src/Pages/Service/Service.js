import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './Service';

const Service = ({ product }) => {
    const { id, name, feature1, feature2, feature3, feature4, price, description, img } = product;
    const navigate = useNavigate();


    const handleBooking = () => {
        navigate(`/checkout/${id}`);
    }

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{feature1}</ListGroup.Item>
                    <ListGroup.Item>{feature2}</ListGroup.Item>
                    <ListGroup.Item>{feature3}</ListGroup.Item>
                    <ListGroup.Item>{feature4}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Button onClick={handleBooking} variant="primary">Booking now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;