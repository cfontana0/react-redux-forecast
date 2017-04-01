import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';

export const CHART_COLORS = ['#d34944', '#44d349', '#4944d3', '#44ced3', '#d344ce', '#ced344', '#4487d3', '#44d391', '#9144d3', '#d39144', '#44d34a'];

class Chart extends Component {
    getRandomColor() {
        const position = Math.round(Math.random() * (CHART_COLORS.length - 1));

        return CHART_COLORS[position];
    }
    prepareData() {
        return this.props.data.map((value) => {
            return { value, color: this.getRandomColor()};
        });
    }
    render() {
        if (this.props.data) {
            return (
                <div>
                    <PieChart
                      slices={this.prepareData()}
                    />
                </div>
            )
        }

        return <div></div>;
    }
}

export default Chart;