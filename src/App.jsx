import { useState } from "react";

import Thumbnail from "./Thumbnail";
function App() {
  return (
    <div className="p-10 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        title
      </h2>
      <div className="relative">
        <div className="p-2 relative flex space-x-2">
          {Array.from(Array(4)).map((_, index) => (
            <Thumbnail key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
