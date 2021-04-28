import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Opening Hours',
        description: '7 days a week',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Our Location',
        description: 'Brooklyn NY 10036 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact Us',
        description: '+1235689321',
        icon: faPhone,
        background: 'primary'
    }
]


const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard info={info} />)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;