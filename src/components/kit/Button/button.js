import React from 'react';
import Ripple from "./ripple";


const Button = (props) => {
    const {children, className, onClick} = props;



    return (
        <button {...props} onClick={onClick} className={`s3-btn-base s3-btn-root ${className || ''}`}>
            {children}
            <Ripple />
        </button>
    );
};

export default Button;

