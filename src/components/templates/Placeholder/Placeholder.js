import React from 'react';
import PropTypes from 'prop-types';
import './Placeholder.scss';

const Placeholder = props => {
  const bgImg = props.placeholderImage
    ? {
        backgroundImage: 'url(' + props.placeholderImage + ')',
      }
    : '';
  return (
    <div className="page-placeholder" style={bgImg}>
      <p>{props.placeholderText}</p>
    </div>
  );
};

export default Placeholder;

Placeholder.propTypes = {
  placeholderText: PropTypes.string.isRequired,
  placeholderImage: PropTypes.string,
};
