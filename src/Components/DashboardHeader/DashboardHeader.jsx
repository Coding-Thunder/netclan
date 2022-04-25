import React from "react";
import Avatar from "../Avatar/Avatar";
import SearchField from "../SearchField/SearchField";
import MySelf from "../../assets/myself.webp";
import { connect } from "react-redux";
import { toogleDrawer } from "../../redux/drawer/drawer.action";
import { CgMenuLeftAlt } from "react-icons/cg";

const DashboardHeader = ({ handleClick, clickable, show, toogle }) => {
  return (
    <div
      onClick={clickable && handleClick}
      className="z-10 bg-firebase w-screen xl:w-full h-64"
    >
      <div className="text-white flex justify-between p-8">
        {" "}
        {show ? (
          <p>DASHBOARD</p>
        ) : (
          <CgMenuLeftAlt
            className="text-2xl cursor-pointer"
            onClick={() => toogle()}
          />
        )}
        <div className="h-11 flex justify-between items-center">
          <SearchField />
          <Avatar img={MySelf} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  show: state.drawer.show,
});
const mapDispatchToProps = (dispatch) => ({
  toogle: () => dispatch(toogleDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
