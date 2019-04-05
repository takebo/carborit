import React from 'react';
import PropTypes from 'prop-types';
import fipe from '../../api/fipe';
import Combobox from '../templates/Combobox/Combobox';

export default class Model extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      models: [],
    };
  }

  fetchModels = async () => {
    if (this.props.filters.brand) {
      const response = await fipe.get(
        '/carros/marcas/' + this.props.filters.brand + '/modelos'
      );
      this.setState({ models: response.data.modelos });
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
        disabled={
          !!!this.props.filters.brand ||
          !(Array.isArray(this.state.models) && this.state.models.length)
        }
      >
        <option>Model</option>
        {this.props.filters.brand ? this.listModels(this.state.models) : null}
      </Combobox>
    );
  }
}

Model.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
};
