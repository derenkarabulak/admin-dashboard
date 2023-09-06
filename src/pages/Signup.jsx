import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Icon, Input, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import "../index.css";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.name && inputs.email && inputs.password !== null) {
      axios
        .post("https://api.derenkarabulak.com/api/user/save", inputs)
        .then(function (response) {
          console.log(response.data);
          navigate("/home");
        });
    } else {
      alert("Username/Email/Password cannot be empty!");
    }
  };
  return (
    <>
      <div
        id="background"
        className="bg-gray-600/30 fixed top-0 left-0 w-full h-screen"
      >
        <div className="fixed w-full px-4 py-24 z-50">
          <div className=" bg-black/70 max-w-[450px] h-[600px] mx-auto py-[70px] border">
            <div className="max-w-[320px] mx-auto py-16">
              <Header as="h1" textAlign="center" color="teal">
                Sign Up
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
                    type={passwordType}
                    placeholder="Password"
                    iconPosition="left"
                  >
                    <Icon name="key" />
                    <input />
                  </Input>
                  {passwordType === "password" ? (
                    <span onClick={() => setPasswordType("text")}>
                      <Icon
                        name="eye slash"
                        className="float-right"
                        color="grey"
                        size="large"
                      />
                    </span>
                  ) : (
                    <span onClick={() => setPasswordType("password")}>
                      <Icon
                        name="eye"
                        className="float-right"
                        color="grey"
                        size="large"
                      />
                    </span>
                  )}
                </Form.Field>
                <Button type="submit">Submit</Button>
                <p className="py-8">
                  <span className="text-gray-500">Have an account?</span>
                  <Link to="/" className="underline mx-2 text-slate-400">
                    Sign in
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
