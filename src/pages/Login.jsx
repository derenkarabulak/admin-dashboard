import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Button, Form, Icon, Input, Header } from "semantic-ui-react";
import "../index.css";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(inputs);
    const check = users.find(
      (user) => JSON.stringify(user) === JSON.stringify(inputs)
    );
    if (check) {
      console.log("Inputs exist in users.");
      setIsLoggedIn(true);
    } else {
      console.log("Inputs do not exist in users.");
      alert("Wrong username and/or password");
      setIsLoggedIn(false);
    }

    if (isLoggedIn) {
      navigate("/home");
    } else {
      console.log("Fail");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get("https://derenkarabulak.com/").then(function (response) {
      //console.log(response.data);
      setUsers(response.data);
    });
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
                Login
              </Header>
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <Input
                    name="name"
                    onChange={handleChange}
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
                  <span className="text-gray-500">Don't have an account?</span>
                  <Link to="/signup" className="underline mx-2 text-slate-400">
                    Sign up
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

export default Login;
