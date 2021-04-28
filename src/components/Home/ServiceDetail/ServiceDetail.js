import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center mt-5 pt-5">
            <img className='mb-4' style={{ height: '50px' }} src={service.img} alt="" />
            <h5 className='mb-4'>{service.name}</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quibusdam?</p>
        </div>
    );
};

export default ServiceDetail;