import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

const Input = (props) => {
  const { type, className, name, placeholder, id } = props;
  return (
    <div className="s3-input-group field">
      <input
        type={type}
        {...props}
        className={`s3-input-base s3-input-field ${className || ``}`}
        name={name}
        placeholder={placeholder}
        id={id}
      />
      <label className="s3-input-label" for={name}>
        {name}
      </label>
    </div>
  );
};

Input.propTypes = {};

export default Input;
