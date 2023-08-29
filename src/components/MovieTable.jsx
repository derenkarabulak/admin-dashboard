import React from "react";
import "../index.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import PopularTable from "./PopularTable";
import TopRatedTable from "./TopRatedTable";
import UpcomingTable from "./UpcomingTable";
import TrendingTable from "./TrendingTable";

const MovieTable = () => {
  return (
    <div
      id="background"
      className="w-full h-full overflow-scroll py-[30px] px-[30px]"
    >
      <div id="main-wrapper" className="bg-black/70 p-[10px] overflow-auto">
        <div id="table-wrapper">
          <PopularTable id="component" />
          <TopRatedTable id="component" />
        </div>
        <div id="table-wrapper">
          <UpcomingTable id="component" />
          <TrendingTable id="component" />
        </div>
      </div>
    </div>
  );
};

export default MovieTable;
