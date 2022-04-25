import React from "react";

const DrawerItem = ({ text, Icon, active, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`flex w-10/12 m-auto rounded-xl mb-4  items-center p-3 cursor-pointer  ${
        active ? "bg-firebase text-white" : "text-gray-600"
      }`}
    >
      <Icon className="mr-4 text-2xl" />
      <p>{text}</p>
    </div>
  );
};

export default DrawerItem;
