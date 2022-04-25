import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetch50 } from "../../redux/data/data.action";
import { toogleDrawer } from "../../redux/drawer/drawer.action";
import AreaChartChart from "../Charts/AreaChartChart/AreaChartChart";
import BarGraph from "../Charts/BarGraph/BarGraph";
import BiaxialLineChart from "../Charts/BiaxialLineChart/BiaxialLineChart";
import SimpleLineChart from "../Charts/SimpleLineChart/SimpleLineChart";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Drawer from "../Drawer/Drawer";
import Main from "../Main/Main";

const Dashboard = ({ classes, toogle, fetch }) => {
  useEffect(() => {
    fetch();
  });
  return (
    <div className={`${classes} overflow-x-hidden`}>
      <Drawer />
      <Main>
        <DashboardHeader handleClick={() => toogle()} />

        <div className="p-8">
          <div className="flex flex-col lg:flex-row w-full justify-between h-fit flex-wrap">
            <SimpleLineChart Top={56} />
            <BarGraph />
            <BiaxialLineChart />
            <AreaChartChart />
          </div>
        </div>
      </Main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toogle: () => dispatch(toogleDrawer()),
  fetch: () => dispatch(fetch50()),
});

export default connect(null, mapDispatchToProps)(Dashboard);
