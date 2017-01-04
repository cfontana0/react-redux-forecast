import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../../components/Chart';

class WeatherList extends Component {
    renderList() {
        var me = this;

        if (this.props.weather.length === 0) {
            return (
                <tr>
                    <td>No Cities</td>
                </tr>
            )
        }

        return (this.props.weather || []).map((elem) => {
            const temperature = elem.list.map((weather) => { return weather.main.temp; });
            const pressure = elem.list.map((weather) => { return weather.main.pressure; });
            const humidity = elem.list.map((weather) => { return weather.main.humidity; });

            return (
                <tr key={elem.city.name}>
                    <td>{elem.city.name}</td>
                    <td><Chart data={temperature} color="blue" unit="K"/></td>
                    <td><Chart data={pressure} color="green" unit="hPA"/></td>
                    <td><Chart data={humidity} color="red" unit="%"/></td>
                </tr>
            )
        });
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({weather}) => {
    return { weather };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);