import React from 'react';
import PropTypes from 'prop-types';
import './Placeholder.scss';

const Placeholder = props => {
  const bgImg = {
    backgroundImage: 'url(' + props.placeholderImage + ')',
  };
  return (
    <div className="page-placeholder" style={bgImg}>
      <p>{props.placeholderText}</p>
    </div>
  );
};

export default Placeholder;

Placeholder.propTypes = {
  placeholderImage: PropTypes.string,
  placeholderText: PropTypes.string,
};
