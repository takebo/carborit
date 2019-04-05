import React from 'react';
import PropTypes from 'prop-types';

const RemoveFavorites = props => {
  return (
    <button
      className="remove-favorites"
      value={props.value}
      onClick={event => props.deleteFav(event.target.value)}
    >
      remove
    </button>
  );
};

export default RemoveFavorites;

RemoveFavorites.propTypes = {
  value: PropTypes.string.isRequired,
  deleteFav: PropTypes.func.isRequired,
};
