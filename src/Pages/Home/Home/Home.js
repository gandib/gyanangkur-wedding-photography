import React from 'react';
import Opinion from '../../Opinion/Opinion';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='mt-5 mb-5'>Welcome to Gyanangkur Wedding Photography</h2>
            <Services></Services>
            <Opinion></Opinion>
        </div>
    );
};

export default Home;