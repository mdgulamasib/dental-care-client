import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services' className='container'>
            <h1 className=' service-title'>Dental Care Services</h1>
            <div className="row">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>

        </div>
    );
};

export default Services;