import React from 'react';
import PropTypes from 'prop-types';
import fipe from '../../api/fipe';
import Combobox from '../templates/Combobox/Combobox';

export default class Model extends React.Component {
  constructor(props) {
    super(props);

    this.state = { models: [], isLoading: true };
  }

  fetchModels = async () => {
    this.setState({ models: [], isLoading: true });
    if (this.props.filters.brand) {
      await fipe
        .get('/carros/marcas/' + this.props.filters.brand + '/modelos')
        .then(response =>
          this.setState({ models: response.data.modelos, isLoading: false })
        )
        .catch(err => {
          console.error('Fetching Models: ', err);
          this.setState({ models: [], isLoading: true });
        });
    } else {
      this.setState({ models: [], isLoading: true });
    }
  };

  setModel = event => {
    const filters = { ...this.props.filters, year: null };
    filters.model = event.target.value;
    this.props.setFilters(filters);
  };

  listModels = data => {
    return data.map(model => {
      return (
        <option value={model.codigo} key={model.codigo}>
          {model.nome}
        </option>
      );
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.filters.brand !== prevProps.filters.brand) {
      this.fetchModels();
    }
  }

  render() {
    return (
      <Combobox
        id="model"
        label=""
        onChangeFunc={this.setModel}
        disabled={this.state.isLoading}
      >
        {this.state.isLoading ? (
          <option>Model</option>
        ) : (
          this.listModels(this.state.models)
        )}
      </Combobox>
    );
  }
}

Model.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
};
