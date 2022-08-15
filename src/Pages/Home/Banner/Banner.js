import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src="https://i.ibb.co/m46L3Gg/man-woman-celebrating-their-wedding-beach.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src="https://i.ibb.co/tQ8vnQg/front-view-happy-bride-groom-wedding-clothes-standing-their-friends-kissing-each-other-attractive-2.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src="https://i.ibb.co/Qn45Mdr/bride-groom-their-wedding-ceremony.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;