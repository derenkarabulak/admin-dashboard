import React from "react";
import { Link } from "react-router-dom";
import { Button, Header } from "semantic-ui-react";

const Navbar = () => {
  return (
    <div id="background">
      <div className="flex items-center justify-between p-4 z-[100] w-full">
        <Link to="/home">
          <Header
            as="h1"
            color="grey"
            className="text-4xl font-bold cursor-pointer"
          >
            Admin Dashboard
          </Header>
        </Link>
        <div className="flex float-right">
          <div>
            <Link to="/popular">
              <Button>Popular Movies</Button>
            </Link>
          </div>
          <div>
            <Link to="/top-rated">
              <Button>Top Rated Movies</Button>
            </Link>
          </div>
          <div>
            <Link to="/upcoming">
              <Button>Upcoming Movies</Button>
            </Link>
          </div>
          <div>
            <Link to="/trending">
              <Button>Trending Movies</Button>
            </Link>
          </div>
          <div>
            <Link to="/users">
              <Button>Users</Button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <Button>Log in</Button>
            </Link>
          </div>
          <div>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
