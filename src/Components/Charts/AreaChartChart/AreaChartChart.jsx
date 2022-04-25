import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

import ChartHeader from "../../ChartHeader/ChartHeader";

class AreaChartChart extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      console.log(this.props.data);
    }, 2000);
  }
  render() {
    return (
      <div
        className={`relative pt-12 pb-4 flex flex-col justify-between items-center  h-96 -top-20 w-4/12  bg-white shadow-lg rounded-lg`}
      >
        <ChartHeader Text="Chart Bases on city intensity and region" />
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={this.props.data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="city" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="region"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="start_year" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="topic" stroke="#ff7300" />
            <Scatter dataKey="intensity" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  data: data.data,
});

export default connect(mapStateToProps)(AreaChartChart);
