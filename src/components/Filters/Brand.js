import React from 'react';
import PropTypes from 'prop-types';
import fipe from '../../api/fipe';
import Combobox from '../templates/Combobox/Combobox';

export default class Brand extends React.Component {
  constructor(props) {
    super(props);

    this.state = { brands: [] };
  }

  fetchBrands = async () => {
    const response = await fipe.get('/carros/marcas');
    this.setState({ brands: response.data });
  };

  setBrand = event => {
    const filters = { brand: null, model: null, year: null };
    filters.brand = event.target.value;
    this.props.setFilters(filters);
  };

  listOptions = data => {
    return data.map(brand => {
      return (
        <option value={brand.codigo} key={brand.codigo}>
          {brand.nome}
        </option>
      );
    });
  };

  componentDidMount() {
    this.fetchBrands();
  }

  render() {
    return (
      <Combobox id="brand" label="" onChangeFunc={this.setBrand}>
        <option value="">Brand</option>
        {this.listOptions(this.state.brands)}
      </Combobox>
    );
  }
}

Brand.propTypes = {
  setFilters: PropTypes.func.isRequired,
};
