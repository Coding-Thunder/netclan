import React from "react";
import { connect } from "react-redux";

const Main = ({ children, show }) => {
  return (
    <div className={` flex justify-end w-screen`}>
      <div
        className={` w-full transition-all  delay-100 min-h-screen max-h-fit  ${
          show ? "sm:w-10/12" : "sm:w-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  show: state.drawer.show,
});

export default connect(mapStateToProps)(Main);
