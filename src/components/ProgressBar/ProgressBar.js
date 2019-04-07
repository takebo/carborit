import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.scss';

const ProgressBar = props => {
  return (
    <div className={props.complete ? 'progressbar complete' : 'progressbar'} />
  );
};

ProgressBar.propTypes = {
  complete: PropTypes.bool,
};

export default ProgressBar;
