import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  renderList = () => {
    return this.props.cities.map(city => {
      return <City key={city.name} id={city.name} />
    });
  }

  render() {
    return (
      <div className="cities">
        <div className="list-group-item">
        {this.renderList()}
        </div>
      </div>
    );
  }
}

export default CityList;
