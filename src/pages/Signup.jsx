import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Icon, Input, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import "../index.css";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

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
        navigate("/");
      });
    console.log(inputs);
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
