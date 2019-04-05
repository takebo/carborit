import React from 'react';
import PropTypes from 'prop-types';
import fipe from '../../api/fipe';
import Combobox from '../templates/Combobox/Combobox';

export default class Year extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      years: [],
    };
  }

  fetchYears = async () => {
    if (this.props.filters.model) {
      const response = await fipe.get(
        '/carros/marcas/' +
          this.props.filters.brand +
          '/modelos/' +
          this.props.filters.model +
          '/anos'
      );
      this.setState({ years: response.data });
    }
  };

  setYear = event => {
    const filters = { ...this.props.filters };
    filters.year = event.target.value;
    this.props.setFilters(filters);
  };

  listYears = data => {
    return data.map(year => {
      return (
        <option value={year.codigo} key={year.codigo}>
          {year.nome}
        </option>
      );
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.filters.model !== prevProps.filters.model) {
      this.fetchYears();
    }
  }

  render() {
    return (
      <Combobox
        id="year"
        label=""
        onChangeFunc={this.setYear}
        disabled={
          !!!this.props.filters.model ||
          !(Array.isArray(this.state.years) && this.state.years.length)
        }
      >
        <option value="">Year</option>
        {this.props.filters.model ? this.listYears(this.state.years) : null}
      </Combobox>
    );
  }
}

Year.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
};
