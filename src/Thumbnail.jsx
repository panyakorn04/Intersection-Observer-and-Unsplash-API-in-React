import React, { useState } from "react";
import { FaPlus, FaMinus, FaPlay, FaChevronDown } from "react-icons/fa";
import poster from "./assets/img/Fah.png";
import { Link } from "react-router-dom";
const Thumbnail = () => {
  return (
    <div className="group relative shadow-md duration-200 ease-out cursor-pointer hover:scale-105  ...">
      <img
        src={poster}
        alt="poster"
        className="h-full w-full rounded-md ... "
      />
      <div
        className={`bg-gradient-to-t from-stone-700 rounded-md opacity-0 bottom-0 left-0 right-0 top-2/4 absolute p-2 group-hover:opacity-100  ...`}
      >
        <div className="flex absolute flex-col items-start bottom-2">
          <div className="flex">
            <Link
              to="#"
              className="inline-flex p-2 rounded-full text-xl mr-3 bg-transparent hover:bg-gray-200 hover:text-gray-800 text-white border-solid border-2 border-gray-200 hover:border-gray-500"
            >
              <FaPlay />
            </Link>
            <button
              type="button"
              className="inline-flex p-2 rounded-full text-xl mr-3 bg-transparent hover:bg-gray-200 hover:text-gray-800 text-white border-solid border-2 border-gray-200 hover:border-gray-500"
            >
              <FaPlus />
            </button>
          </div>
          <div className="text-sm lg:text-lg font-bold p-2 break-all  transform text-white ...">
            <h3>fallbackTitlefallbackTitlefallbackTitle</h3>
            <p className="text-sm font-medium">genregenre</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
