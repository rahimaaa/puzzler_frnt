import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Create,
  Profile,
  PuzzlePage,
  Explore,
} from "./pages";

function App() {
  return (
   <div>
     <Router>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
        <Route path="/explore" element={<Explore />} />


  
      </Routes>
    </Router>
    </div>
  );
}

export default App;
