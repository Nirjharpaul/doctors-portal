import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './infoCard.css'

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 text-white">
            <div className={`d-flex justify-content-center info-container info-${info.background}`}>
                <div className="me-3">
                    <FontAwesomeIcon className='info-icon' icon={info.icon} />
                </div>
                <div>
                    <h4>{info.title}</h4>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;