import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Log from "./pages/Log.js/Log";
const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Log />}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
