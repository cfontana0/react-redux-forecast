import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions/'

class SearchBar extends Component {
    constructor (params) {
        super(params);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onInputChange (event) {
        this.setState({term: event.target.value});
    }

    onSubmit (event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onSubmit}>
                <input 
                    value={this.state.term} 
                    onChange={this.onInputChange}
                    className="form-control"
                    placeholder="Get a five-day forecast in your favorite cities"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);