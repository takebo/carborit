import React from 'react';
import RemoveFavorites from './RemoveFavorites';
import Card from '../templates/Card/Card';
import Placeholder from '../templates/Placeholder/Placeholder';
import './Favorites.scss';
import favoritesPlaceholder from '../../assets/img/favorites-placeholder.svg';

export default class Favorites extends React.Component {
  state = {
    favorites: [],
  };

  listFavorites = () => {
    if (this.state.favorites.length > 0) {
      return this.state.favorites.map(fav => {
        return (
          <Card key={fav.Modelo + fav.AnoModelo}>
            <div className="data-row">
              <div className="data-cell">
                <p>{fav.Marca}</p>
              </div>
              <div className="data-cell">
                <p>{fav.Modelo}</p>
              </div>
              <div className="data-cell">
                <p>{fav.Valor}</p>
              </div>
              <div className="data-cell">
                <RemoveFavorites
                  value={fav.Modelo + fav.AnoModelo}
                  deleteFav={this.deleteFav}
                  vehicle={fav}
                />
              </div>
            </div>
          </Card>
        );
      });
    }
  };

  deleteFav = id => {
    const newData = JSON.parse(localStorage.getItem('favorites')).filter(
      k => k['Modelo'] + k['AnoModelo'] !== id
    );
    this.setState({ favorites: newData });
    localStorage.setItem('favorites', JSON.stringify(newData));
  };

  componentDidMount() {
    localStorage.getItem('favorites')
      ? this.setState({
          favorites: JSON.parse(localStorage.getItem('favorites')),
        })
      : localStorage.setItem('favorites', '[]');
  }

  render() {
    return (
      <>
        <div className="content">
          <div className="page-title">
            <h1>Favorites</h1>
          </div>
          <div className="main">
            {this.state.favorites.length > 0 ? (
              <div className="data-header">
                <div className="data-cell">Brand</div>
                <div className="data-cell">Model</div>
                <div className="data-cell">Value</div>
                <div className="data-cell" />
              </div>
            ) : (
              <Placeholder
                placeholderImage={favoritesPlaceholder}
                placeholderText="Your favorite list is empty."
              />
            )}
            {this.listFavorites()}
          </div>
        </div>
      </>
    );
  }
}
