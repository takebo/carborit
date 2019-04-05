import React from 'react';
import PropTypes from 'prop-types';
import './Combobox.scss';

const Combobox = props => {
  return (
    <div className="formgroup">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        id={props.id}
        value={props.value}
        onChange={props.onChangeFunc}
        disabled={props.disabled}
      >
        {props.children}
      </select>
      <i />
    </div>
  );
};

export default Combobox;

Combobox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChangeFunc: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
