import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Users from "./pages/Users";
import './index.css';
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import Trending from "./pages/Trending";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<Users />} />
        <Route path="/popular" element={<Popular />}/>
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </>
  );
}

export default App;
