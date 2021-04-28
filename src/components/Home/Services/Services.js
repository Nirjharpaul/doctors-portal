import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/filling.png'
import teeth from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: teeth
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center mt-5">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h1>Services We Provide</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <div className="w-75 row">
                    {
                        servicesData.map(service => <ServiceDetail service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;