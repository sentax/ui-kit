import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button/button";

const Tab = (props) => {
  const onClick = () => {
    props.onClick(props.label);
  };

  return (
    <Button
      className={`s3-tab-list-item ${
        props.activetab === props.label ? ` active` : ``
      }`}
      onClick={onClick}
      style={{ borderRadius: "0" }}
    >
      {props.label}
    </Button>
  );
};

Tab.propTypes = {
  activetab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
