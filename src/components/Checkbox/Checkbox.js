import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { checkboxChange, label } = this.props;
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
    checkboxChange(label);
  }

  render() {
    const { label, src } = this.props;
    // const { isChecked } = this.state;

    return (
      <div className="radio">
        <label>
          <input
            type="radio"
            value={label}
            // checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />

          {label}
          <img src={src} alt="Avatar"/>
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checkboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
