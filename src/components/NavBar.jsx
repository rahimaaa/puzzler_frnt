import React from "react";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/explore");
  };

  const handleProfile = () => {
    navigate("/profile");
  };
  const handleCreate = () => {
    navigate("/");
  };

  return (
    <nav className="bg-teal-900 fixed flex top-0 left-0 w-full p-4">
    <div className="flex items-center space-x-4">
      <button
        onClick={handleExplore}
        className="bg-gray-200 dark:bg-gray-700 text-black hover:scale-110 rounded-full px-3 py-1 text-sm font-semibold"
      >
        Explore
      </button>
      <button
        onClick={handleCreate}
        className="bg-gray-200 hover:scale-110 text-black dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold"
      >
        Create
      </button>
    </div>
    <div className="ml-auto">
      <button
        onClick={handleProfile}
        className="bg-gray-200 hover:scale-110 text-black dark:bg-gray-700 rounded-full h-10 w-10 px-3 py-1 text-sm font-semibold"
      >
        
      </button>
    </div>
  </nav>
  
  );
};

export default NavBar;