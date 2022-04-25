import React from "react";

const Avatar = ({ width = 10, height = 10, img }) => {
  return (
    <img
      className={`w-${width} h-${height} rounded-full`}
      src={img}
      alt="Rounded avatar"
    />
  );
};

export default Avatar;
