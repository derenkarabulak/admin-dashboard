import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Users from "./pages/Users";
import "./index.css";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import Trending from "./pages/Trending";
import AddUserModal from "./components/AddUserModal";
import EditUserModal from "./components/EditUserModal";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<Users />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="users/user/create" element={<AddUserModal />} />
        <Route path="users/user/:id/edit" element={<EditUserModal />} />
      </Routes>
    </>
  );
}

export default App;
