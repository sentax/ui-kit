import React from "react";
import PropTypes from "prop-types";

class Tab extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    return (
      <div
        className={`s3-tab-list-item ripple ${
          this.props.activeTab === this.props.label ? ` active` : ``
        }`}
        onClick={this.onClick}
      >
        {this.props.label}
      </div>
    );
  }
}


export default Tab;
