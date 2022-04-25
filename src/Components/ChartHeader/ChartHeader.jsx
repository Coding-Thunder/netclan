import React from "react";

const ChartHeader = ({ Text }) => {
  return (
    <div className="absolute w-11/12 h-22  bg-gradient rounded-xl -top-14 text-white p-8">
      {Text}
    </div>
  );
};

export default ChartHeader;
