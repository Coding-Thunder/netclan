import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchField = () => {
  return (
    <div className="bg-input   p-4  rounded-lg h-full w-9/12 flex justify-between items-center">
      <AiOutlineSearch className=" text-3xl mr-2" />
      <input
        placeholder="Search"
        type="text"
        className={`text-white bg-transparent  placeholder-white border-none outline-none `}
      />
    </div>
  );
};

export default SearchField;
