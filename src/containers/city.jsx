import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <p>{this.props.city.name}</p>
    );
  }
}

export default City;
