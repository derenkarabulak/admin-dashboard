import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, List, Table } from "semantic-ui-react";
import Navbar from "../components/Navbar";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("https://api.derenkarabulak.com/api/users/")
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data);
      });
  }

  const deleteUser = (id) => {
    axios
      .delete(`https://api.derenkarabulak.com/api/user/${id}/delete`)
      .then(function (response) {
        console.log(response.data);
        getUsers();
      });
  };
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
            List Users
          </Header>
          <div>
            <nav>
              <List horizontal>
                <List.Item>
                  <Link to="user/create">
                    <Button>
                      Create User
                      <Icon name="add user" className="float-left" />
                    </Button>
                  </Link>
                </List.Item>
              </List>
            </nav>
          </div>
          <div id="users">
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>#</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Password</Table.HeaderCell>
                  <Table.HeaderCell>Created At</Table.HeaderCell>
                  <Table.HeaderCell>Updated At</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {users.map((user, key) => (
                  <Table.Row key={key}>
                    <Table.Cell>{user.id}</Table.Cell>
                    <Table.Cell>{user.name}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.password}</Table.Cell>
                    <Table.Cell>{user.created_at}</Table.Cell>
                    <Table.Cell>{user.updated_at}</Table.Cell>
                    <Table.Cell>
                      <Link
                        to={`user/${user.id}/edit`}
                        style={{ marginRight: "10px" }}
                      >
                        <Button>Edit</Button>
                      </Link>
                      <Button onClick={() => deleteUser(user.id)}>
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
