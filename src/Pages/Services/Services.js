import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    return (
        <div>
            <h2 className='container text-start mt-5 mb-3'>Services</h2>
            <div className='container services-container'>
                {
                    products.map(product => <Service
                        key={product.id}
                        product={product}
                    ></Service>)
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Services;