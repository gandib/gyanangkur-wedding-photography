import React, { useEffect, useState } from 'react';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('photos.json')
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, []);
    return (
        <div>
            <h2 className='container text-start ps-5 mt-5 mb-2 '>My Works</h2>
            {
                photos.map(photo => <div className=' container mb-3 '>
                    <img style={{ width: '900px', height: '500px' }} className=' border rounded' src={photo.img} alt="" />
                </div>)
            }
        </div>
    );
};

export default Photos;