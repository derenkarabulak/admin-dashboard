import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Header, Icon, Input } from "semantic-ui-react";
import "../index.css";

const AddUserModal = ({ closeModal }) => {
  const [inputs, setInputs] = useState({});
  const refresh = () => window.location.reload(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("https://derenkarabulak.com/index.php", inputs)
      .then(function (response) {
        console.log(response.data);
      });
    console.log(inputs);
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <Button color="red" id="xBtn" onClick={() => closeModal(false)}>
          <Icon name="x" />
        </Button>
        <div className="title">
          <Header as="h1" color="grey">
            Add User
          </Header>
        </div>
        <div className="body">
          <Form
            onSubmit={handleSubmit}
            method="post"
            action="https://derenkarabulak.com/"
          >
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
            <Button onClick={refresh} color="green">
              Submit
            </Button>
          </Form>
        </div>
        <div className="footer">
          <Button color="red" onClick={() => closeModal(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
