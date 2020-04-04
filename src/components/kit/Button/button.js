import React from 'react';

const Button = (props) => {
    const {children, className} = props;

    return (
        <button {...props} className={`s3-btn-base s3-btn-root ${className || ''}`}>
            {children}
        </button>
    );
};

export default Button;