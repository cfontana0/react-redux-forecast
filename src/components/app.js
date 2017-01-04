import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div>
          <h3>Weather Forecast</h3>
          <br />
          <SearchBar />
          <WeatherList />
      </div>
    );
  }
}
