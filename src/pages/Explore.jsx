import React from "react";
import NavBar from "../components/NavBar";

function Explore() {
  
  return (
    <div className = "bg-teal-700 overscroll-contain overflow-hidden">
      <div className="h-screen">
      <NavBar />
    
    <div className="text-center">
      <h1 className="text-6xl p-16 font-bold text-white">PUZZLER</h1>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 hover:scale-110 text-black dark:bg-gray-700 rounded-full px-3 py-1 text-xl font-semibold mt-4"
        />
      </div>
    </div>
    </div>
      
    </div>
  );
}

export default Explore;
