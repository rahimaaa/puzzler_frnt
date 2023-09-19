import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const handlePuzzle = () => {
    navigate("/puzzle");
  };

  return (
    <div className="bg-teal-700 overflow-y-hidden flex justify-center items-center h-screen">
    <div className="h-screen">
      <div className="navbar-container relative z-50">
        <NavBar/>
      </div>
      <div className="mt-8 justify-center text-center">
        <h1 className="text-6xl p-16 font-bold text-white">PUZZLER</h1>
        <button className="bg-gray-200 hover:scale-110 text-black dark:bg-gray-700 rounded-full px-6 py-6 w-48 text-xl font-semibold mt-4"
          >
            250
          </button>
          <button className="bg-gray-200 hover:scale-110 text-black dark:bg-gray-700 rounded-full m-12 w-48 px-6 py-6 text-xl font-semibold mt-4"
           >
            500
          </button>
          <button className="bg-gray-200 hover:scale-110 text-black dark:bg-gray-700 rounded-full px-6 py-6 w-48 text-xl font-semibold mt-4"
            >
            750
          </button>
          
        
        {/* Centered Form */}
        <div className="flex justify-center">
          <form className="bg-white p-4 rounded-lg px-32 py-32 shadow-md w-96 text-center">
            <div className="mb-4">
              <input
                className="hidden"
                type="file"
                name="files[]"
                id="file"
                data-multiple-caption="{count} files selected"
                multiple
              />
              <label
                htmlFor="file"
                className="cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <strong>Choose a file</strong>
                <span className="ml-2">or drag it here</span>
              </label>
            </div>
           
          </form>
        </div>
        
        <button
          className="bg-gray-200 hover:scale-110 text-black dark:bg-gray-700 rounded-full px-3 py-1 text-xl font-semibold mt-4"
          onClick={handlePuzzle}
        >
          Create
        </button>
      </div>
    </div>
  </div>
  
  );
}

export default Create;
