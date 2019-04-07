import React from 'react';
import PropTypes from 'prop-types';
import fipe from '../../api/fipe';
import Combobox from '../templates/Combobox/Combobox';

export default class Year extends React.Component {
  constructor(props) {
    super(props);

    this.state = { years: [], isLoading: true };
  }

  fetchYears = async () => {
    this.setState({ years: [], isLoading: true });
    if (this.props.filters.model) {
      await fipe
        .get(
          '/carros/marcas/' +
            this.props.filters.brand +
            '/modelos/' +
            this.props.filters.model +
            '/anos'
        )
        .then(response => {
          this.setState({ years: response.data, isLoading: false });
        })
        .catch(err => {
          this.setState({ years: [], isLoading: true });
        });
    } else {
      this.setState({ years: [], isLoading: true });
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
        disabled={this.state.isLoading}
      >
        <option value="">Year</option>
        {this.state.isLoading ? null : this.listYears(this.state.years)}
      </Combobox>
    );
  }
}

Year.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
};
