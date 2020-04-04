import React from 'react';

const Card = (props) => {
    const {children, className} = props;

    return (
        <div {...props} className={`s3-card-base ${className || ''}`}>
            {children}
        </div>
    );
};

export default Card;