import React from 'react';
import PropTypes from 'prop-types';
import fipe from '../../api/fipe';
import ButtonFavorites from '../Favorites/ButtonFavorites';
import Card from '../templates/Card/Card';
import './Details.scss';
import picture from '../../assets/img/car-picture-placeholder.svg';

export default class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicle: {},
    };
  }

  getVehicle = async () => {
    if (
      !Object.values(this.props.selectedVehicle).filter(v => v === null).length
    ) {
      const response = await fipe.get(
        '/carros/marcas/' +
          this.props.selectedVehicle.brand +
          '/modelos/' +
          this.props.selectedVehicle.model +
          '/anos/' +
          this.props.selectedVehicle.year
      );
      this.setState({ vehicle: response.data });
    } else {
      this.setState({ vehicle: {} });
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedVehicle.year !== prevProps.selectedVehicle.year)
      this.getVehicle();
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.vehicle).length ? (
          <Card>
            <div className="details">
              <div className="picture">
                <img src={picture} alt={this.state.vehicle.Modelo} />
              </div>
              <div className="info">
                <div className="col">
                  <p className="brand">{this.state.vehicle.Marca}</p>
                  <p className="model">{this.state.vehicle.Modelo}</p>
                  <div className="data-table">
                    <div className="data-cell">
                      <span>Fuel</span>
                      <p className="fuel">{this.state.vehicle.Combustivel}</p>
                    </div>
                    <div className="data-cell">
                      <span>Year</span>
                      <p className="year">{this.state.vehicle.AnoModelo}</p>
                    </div>
                    <div className="data-cell">
                      <span>Fipe</span>
                      <p className="fipe">{this.state.vehicle.CodigoFipe}</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <p className="value">{this.state.vehicle.Valor}</p>
                  <p className="reference">
                    ref month -&nbsp;{this.state.vehicle.MesReferencia}
                  </p>
                  <ButtonFavorites vehicle={this.state.vehicle} />
                </div>
              </div>
            </div>
          </Card>
        ) : null}
      </div>
    );
  }
}

Details.propTypes = {
  selectedVehicle: PropTypes.object.isRequired,
};
