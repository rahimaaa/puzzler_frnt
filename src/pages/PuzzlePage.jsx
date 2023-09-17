import React from "react";
import NavBar from "../components/NavBar";


function PuzzlePage() {
  return (
    <div className="bg-teal-700 overflow-hidden">
      <div className=" h-screen flex flex-col justify-center items-center">
        <div>
          <NavBar />
        </div>

        <div className="bg-teal-300  rounded m-10 mx-auto pt-20 p-12 mt-16 w-96 h-72">
          <h1>lsghgkjhldjkhslhlglvdfu</h1>
        </div>
      </div>
    </div>
  );
}

export default PuzzlePage;
