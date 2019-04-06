import React from 'react';
import Filters from '../Filters/Filters';
import Details from '../Details/Details';
import ProgressBar from '../ProgressBar/ProgressBar';

class Home extends React.Component {
  state = {
    selectedVehicle: { brand: null, model: null, year: null },
    vehicle: {},
    inprogress: false,
    complete: true,
  };

  setVehicle = data => {
    this.setState({ selectedVehicle: data });
  };

  progressBar = status => {
    status
      ? this.setState({ inprogress: true, complete: false })
      : this.setState({ inprogress: false, complete: true });
  };

  render() {
    return (
      <>
        {this.state.inprogress && (
          <ProgressBar complete={this.state.complete} />
        )}

        <div className="content">
          <div className="page-title">
            <h1>Select a Vehicle</h1>
            <Filters
              setVehicle={this.setVehicle}
              selectedVehicle={this.state.selectedVehicle}
            />
          </div>
          <div className="main">
            <Details
              selectedVehicle={this.state.selectedVehicle}
              progressBar={this.progressBar}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
