import React from "react";
import TrendingTable from "../components/TrendingTable";
import Navbar from "../components/Navbar";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Popular = () => {
  return (
    <div>
      <Navbar />
      <div
        id="background"
        className="w-screen h-screen overflow-scroll py-[30px] px-[30px]"
      >
        <div
          id="main-wrapper"
          className="bg-black/70 overflow-scroll w-full h-full"
        >
          <div id="users">
            <TrendingTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
