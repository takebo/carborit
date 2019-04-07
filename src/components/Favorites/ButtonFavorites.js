import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonFavorites extends React.Component {
  state = {
    favorites: [],
    favorited: false,
  };

  validateFavorite = event => {
    let validFavorites = [];

    if (localStorage.getItem('favorites')) {
      validFavorites = JSON.parse(localStorage.getItem('favorites'));

      if (
        validFavorites.filter(
          k =>
            k['Modelo'] === this.props.vehicle.Modelo &&
            k['AnoModelo'] === this.props.vehicle.AnoModelo
        ).length
      ) {
        this.removeFavorite(validFavorites);
      } else {
        validFavorites.push(this.props.vehicle);
        this.addFavorite(validFavorites);
      }
    } else {
      validFavorites.push(this.props.vehicle);
      this.addFavorite(validFavorites);
    }
    this.isFavorited();
  };

  addFavorite = data => {
    localStorage.setItem('favorites', JSON.stringify(data));
  };

  removeFavorite = data => {
    const newData = data.filter(
      k =>
        k['Modelo'] !== this.props.vehicle.Modelo &&
        k['AnoModelo'] !== this.props.vehicle.AnoModelo
    );
    localStorage.setItem('favorites', JSON.stringify(newData));
  };

  isFavorited = () => {
    if (localStorage.getItem('favorites')) {
      JSON.parse(localStorage.getItem('favorites')).filter(
        a => a.Modelo === this.props.vehicle.Modelo
      ).length
        ? this.setState({ favorited: true })
        : this.setState({ favorited: false });
    }
  };

  componentDidMount() {
    this.setState({ favorites: this.props.vehicle });
    this.isFavorited();
  }

  render() {
    return (
      <button
        className={
          this.state.favorited ? 'btn-favorite favorited' : 'btn-favorite'
        }
        onClick={this.validateFavorite}
      >
        <i>❤</i>
        <span>
          {this.state.favorited && this.props.vehicle
            ? ' Favorited'
            : ' add to favorites'}
        </span>
      </button>
    );
  }
}

ButtonFavorites.propTypes = {
  vehicle: PropTypes.object.isRequired,
};
