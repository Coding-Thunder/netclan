import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

import ChartHeader from "../../ChartHeader/ChartHeader";

class BarGraph extends PureComponent {
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
        <ChartHeader Text="Bar Graphs Bases on likelihood" />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={this.props.data}>
            <Tooltip />
            <Bar label={"hello"} dataKey="likelihood" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  data: data.data,
});

export default connect(mapStateToProps)(BarGraph);
