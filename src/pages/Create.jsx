import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
 
  const handlePuzzle = () => {
    navigate("/puzzle");
  }

  return (
    <div className=" bg-teal-700 overflow-y-hidden">
      <div className="h-screen ">
      <div className="navbar-container  relative z-50">
        <NavBar />
      </div>
        <div className="mt-8 text-center">
          <h1 className="text-6xl  p-16 font-bold text-white">PUZZLER</h1>
          <div>
            <span className="">Drop file here or click to upload</span>
             <input type = "file" name = "myFile" />
          </div>
         
          <button className="bg-gray-200 hover:scale-110 text-black dark:bg-gray-700 rounded-full px-3 py-1 text-xl font-semibold mt-4" onClick = {handlePuzzle}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
