import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import ChartHeader from "../../ChartHeader/ChartHeader";

class SimpleLineChart extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      console.log(this.props.data);
    }, 2000);
  }
  render() {
    return (
      <div
        className={`relative pt-12 pb-4 flex flex-col justify-between items-center mb-24  h-96 -top-20 w-full lg:w-7/12  bg-white shadow-lg rounded-lg`}
      >
        <ChartHeader Text="Line Chart Bases on country start year and relevance" />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={this.props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="relevance" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="start_year"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="country"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  data: data.data,
});

export default connect(mapStateToProps)(SimpleLineChart);
