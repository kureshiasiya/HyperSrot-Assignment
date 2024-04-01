import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap"; // Import Button from reactstrap

const Nav = (props) => {
  const handleLogout = () => {};
  return (
    <nav className="mt-2">
      <Button
        color="danger"
        className="btn btn-link float-right"
        onClick={handleLogout}
      >
        Login
      </Button>
      <NavLink
        to="/register"
        className="btn btn-link float-right"
        activeClassName="btn-primary" // Only specify the class name here
      >
        Register
      </NavLink>
      <NavLink to="/" className="btn btn-danger btn-sm float-right">
        Logout
      </NavLink>
    </nav>
  );
};

export default Nav;
