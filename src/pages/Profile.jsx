import React from "react";
import NavBar from "../components/NavBar";
import PlayerPuzzles from "../components/PlayerPuzzles";


function Profile() {
  return (
   
       <div className = "bg-teal-700 overflow-hidden">
      <NavBar />
      <div className = " h-screen">
         <h1>Profile</h1>
         <div className="flex items-center m-8 mb-20">
           <div className="w-64 h-64 rounded-full mt-20 ml-12  bg-blue-500"> </div>
         <div className="m-12 p-8">
             <h1 >name of the player</h1>
             <h1>number of puzzles solved</h1>
              <h1>number of puzzles created</h1>
              <h1>score</h1>
              <h1>member since: date</h1>
         </div>
        
         </div>
         <div>
          <PlayerPuzzles />
         </div>
         
      </div>
      
    </div>
      
   
  );
}

export default Profile;
