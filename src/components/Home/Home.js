import React from 'react';
import Header from '../templates/Header/Header';
import Footer from '../templates/Footer/Footer';
import Filters from '../Filters/Filters';
import Details from '../Details/Details';

class Home extends React.Component {
  state = {
    selectedVehicle: { brand: null, model: null, year: null },
    vehicle: {},
  };

  setVehicle = data => {
    this.setState({ selectedVehicle: data });
  };

  render() {
    return (
      <>
        <Header />
        <div className="content">
          <div className="page-title">
            <h1>Select a Vehicle</h1>
            <Filters
              setVehicle={this.setVehicle}
              selectedVehicle={this.state.selectedVehicle}
            />
          </div>
          <div className="main">
            <Details selectedVehicle={this.state.selectedVehicle} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
