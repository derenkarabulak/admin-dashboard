import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button, Header, Icon } from "semantic-ui-react";
import { AgGridReact } from "ag-grid-react";
import Navbar from "../components/Navbar";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "semantic-ui-css/semantic.min.css";
import "../index.css";
import "../components/Modal.css";
import AddUserModal from "../components/AddUserModal";

const Users = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [columnDefs, setColumnDefs] = useState([
    { field: "name", filter: true },
    { field: "password", filter: true },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);

  useEffect(() => {
    fetch("http://localhost/php-backend/")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

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
          <Header textAlign="center" as="h1" color="grey">
            Registered Users
          </Header>
          <div id="users">
            <div
              className="ag-theme-alpine"
              style={{ width: 400, height: 500 }}
            >
              <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows={true}
                rowSelection="multiple"
                onCellClicked={cellClickedListener}
              />
            </div>
            <div>{openModal && <AddUserModal closeModal={setOpenModal} />}</div>
          </div>
          <div>
            <Button
              className="openModalBtn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <Icon name="user plus" size="small" color="grey" />
            </Button>
            <Button onClick={buttonListener}>Clear Selections</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
