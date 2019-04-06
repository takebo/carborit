import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.scss';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inprogress: false,
    };
  }

  render() {
    return (
      <div
        className={this.props.complete ? 'progressbar complete' : 'progressbar'}
      />
    );
  }
}

ProgressBar.propTypes = {
  complete: PropTypes.bool,
};
