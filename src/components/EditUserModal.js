import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Button, Header, Input, Label, Table } from "semantic-ui-react";

export default function EditUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios
      .get(`https://api.derenkarabulak.com/api/user/${id}`)
      .then(function (response) {
        console.log(response.data);
        setInputs(response.data);
      });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`https://api.derenkarabulak.com/api/users/user/${id}/edit`, inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/users");
      });
  };
  return (
    <div>
      <Navbar />
      <div
        id="background"
        className="bg-gray-600/30 fixed top-0 left-0 w-full h-screen"
      >
        <div className="fixed w-full px-4 py-24 z-50">
          <div className=" bg-black/70 max-w-[450px] h-[600px] mx-auto py-[70px] border">
            <div className="max-w-[320px] mx-auto py-16">
              <Header textAlign="center" as="h1" color="grey">
                Edit user
              </Header>
              <form onSubmit={handleSubmit}>
                <Table cellSpacing="10">
                  <Table.Body>
                    <Table.Row>
                      <Table.HeaderCell>
                        <Label size="large">Name: </Label>
                      </Table.HeaderCell>
                      <Table.Cell>
                        <Input
                          value={inputs.name}
                          type="text"
                          name="name"
                          onChange={handleChange}
                        />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell>
                        <Label size="large">Email: </Label>
                      </Table.HeaderCell>
                      <Table.Cell>
                        <Input
                          value={inputs.email}
                          type="text"
                          name="email"
                          onChange={handleChange}
                        />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell>
                        <Label size="large">Password: </Label>
                      </Table.HeaderCell>
                      <Table.Cell>
                        <Input
                          value={inputs.password}
                          type="text"
                          name="password"
                          onChange={handleChange}
                        />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell colSpan="2" align="right">
                        <Button color="green">Save</Button>
                        <Link to="/users">
                          <Button color="red">Cancel</Button>
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
