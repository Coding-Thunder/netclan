import React, { useState } from "react";
import { connect } from "react-redux";
import DrawerItem from "../DrawerItem/DrawerItem";
import { MdDashboard, MdFingerprint } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoListSharp, IoMapSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { toogleDrawer } from "../../redux/drawer/drawer.action";

const Drawer = ({ show, toogle }) => {
  const [state, setState] = useState({
    items: [
      {
        text: "Dashboard",
        Icon: MdDashboard,
      },
      {
        text: "Settings",
        Icon: IoMdSettings,
      },
      {
        text: "Tables",
        Icon: IoListSharp,
      },
      {
        text: "Maps",
        Icon: IoMapSharp,
      },
      {
        text: "Login",
        Icon: MdFingerprint,
      },
      {
        text: "Profile",
        Icon: FaUserCircle,
      },
    ],
    active: 0,
  });

  return (
    <div
      className={`fixed z-50  top-0 left-0 ${
        show ? "translate-x-0" : "-translate-x-full"
      } h-full transition-all  delay-100 w-10/12 md:w-7/12 lg:w-5/12 xl:w-2/12 2xl:w-2/12 bg-white  shadow-lg`}
    >
      <div className="w-full">
        <div className="mb-5 h-fit m-auto flex justify-center items-center w-10/12 p-6 border-b-2">
          <p className="text-2xl text-black font-bold">Netclan</p>
        </div>
        {state.items.map((item, i) => (
          <DrawerItem
            handleClick={() => setState({ ...state, active: i })}
            text={item.text}
            Icon={item.Icon}
            key={i}
            active={state.active === i}
          />
        ))}
        <DrawerItem
          handleClick={() => toogle()}
          text={"Close"}
          Icon={IoIosArrowBack}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
