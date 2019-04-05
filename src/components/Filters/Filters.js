import React from 'react';
import PropTypes from 'prop-types';
import Brand from './Brand';
import Model from './Model';
import Year from './Year';
import './Filters.scss';

export default class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        brand: null,
        model: null,
        year: null,
      },
    };
  }

  setFilters = filters => {
    this.setState({ filters });
  };

  componentDidMount() {}

  componentDidUpdate() {
    if (this.props.selectedVehicle.year !== this.state.filters.year) {
      this.props.setVehicle(this.state.filters);
    }
  }

  render() {
    return (
      <div className="filters">
        <Brand setFilters={this.setFilters} />
        <Model setFilters={this.setFilters} filters={this.state.filters} />
        <Year setFilters={this.setFilters} filters={this.state.filters} />
      </div>
    );
  }
}

Filters.propTypes = {
  selectedVehicle: PropTypes.object.isRequired,
  setVehicle: PropTypes.func.isRequired,
};
