import React from "react";
import MovieTable from "../components/MovieTable";
import "../index.css";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <MovieTable />
    </>
  );
};

export default Home;
