import React from 'react';

const ServiceData = ({ serviceData }) => {
    const { title, icon, description } = serviceData;
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-1">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceData;