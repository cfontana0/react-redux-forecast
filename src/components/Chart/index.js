import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';


class Chart extends Component {
    average(data) {
        return _.round(_.sum(data) / data.length);
    }
    render() {
        const data = this.props.data;
        const color = this.props.color;
        const unit = this.props.unit;

        if (data) {
            return (
                <div>
                    <Sparklines data={data}>
                        <SparklinesLine height={120} width={180} color={color} />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <div>{this.average(data)}{unit}</div>
                </div>
            )
        }

        return <div></div>;
    }
}

export default Chart;