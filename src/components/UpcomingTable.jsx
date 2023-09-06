import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import "../index.css";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button, Header } from "semantic-ui-react";
import requests from "../Requests";
import { Link } from "react-router-dom";

const PopularTable = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState();

  const [columnDefs, setColumnDefs] = useState([
    { field: "title", filter: true, resizable: true },
    { field: "release_date", resizable: true },
    { field: "vote_count", resizable: true },
    { field: "vote_average", resizable: true },
    { field: "popularity", resizable: true },
    { field: "overview", filter: true, resizable: true },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  useEffect(() => {
    axios.get(requests.requestUpcoming).then((response) => {
      setRowData(response.data.results);
    });
  }, []);

  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);
  return (
    <div>
      <div id="upcoming">
        <Link to="/upcoming">
          <Header as="h1" color="grey" textAlign="center">
            Upcoming Movies
          </Header>
        </Link>
        <div
          className="ag-theme-alpine mt-[10px]"
          style={{ width: 800, height: 500 }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            animateRows={true}
            rowSelection="multiple"
            rowMultiSelectWithClick={true}
            onCellClicked={cellClickedListener}
          />
        </div>
        <Button onClick={buttonListener}>Clear Selections</Button>
      </div>
    </div>
  );
};

export default PopularTable;
