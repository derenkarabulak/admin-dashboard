import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Header, Icon, Input } from "semantic-ui-react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const AddUserModal = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://api.derenkarabulak.com/user/save", inputs)
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
                Add User
              </Header>
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <Input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    iconPosition="left"
                    placeholder="Username"
                  >
                    <Icon name="user" />
                    <input />
                  </Input>
                </Form.Field>
                <Form.Field>
                  <Input
                    name="email"
                    onChange={handleChange}
                    type="text"
                    iconPosition="left"
                    placeholder="Email"
                  >
                    <Icon name="at" />
                    <input />
                  </Input>
                </Form.Field>
                <Form.Field>
                  <Input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    iconPosition="left"
                    placeholder="Password"
                  >
                    <Icon name="key" />
                    <input />
                  </Input>
                </Form.Field>
                <Button color="green">Submit</Button>
                <Link to="/users">
                  <Button color="red">Cancel</Button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
