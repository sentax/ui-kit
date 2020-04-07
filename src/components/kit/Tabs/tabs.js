import React from "react";
import Tab from "./Tab/tab";
import "./tabs.scss";
import PropTypes from "prop-types";

class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { children, className } = this.props;
    return (
      <div>
        <div className={`s3-tab-base ${className || ""}`}>
          {children.map((child) => {
            return (
              <Tab
                label={child.props.label}
                key={child.props.label}
                activeTab={this.state.activeTab}
                onClick={this.onClickTabItem}
              />
            );
          })}
        </div>
        <div className="tab-content">
          {children.map((child) => {
            return child.props.label === this.state.activeTab
              ? child.props.children
              : null;
          })}
        </div>
      </div>
    );
  }
}


export default Tabs;
