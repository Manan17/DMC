import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
const Login = ({ setIsLoggedIn }) => {
  const history = useHistory();
  const [role, setRole] = useState("user");
  const userLogin = () => {
    history.push("/");
    setIsLoggedIn(true);
  };
  return (
    <div className="login-container">
      <h1 className="login-text">Login</h1>
      <input className="login-input" placeholder="Enter Email Id" />
      <input className="login-input" placeholder="Enter password" />
      <p>Select one role:</p>
      <div className="d_flex">
        {role === "user" ? (
          <div className="selectedRole">
            <p>User</p>
          </div>
        ) : (
          <div className="notSelectedRole" onClick={() => setRole("user")}>
            <p>User</p>
          </div>
        )}

        {role === "seller" ? (
          <div className="selectedRole">
            <p>Seller</p>
          </div>
        ) : (
          <div className="notSelectedRole" onClick={() => setRole("seller")}>
            <p>Seller</p>
          </div>
        )}
        {role === "retailer" ? (
          <div className="selectedRole">
            <p>Retailer</p>
          </div>
        ) : (
          <div className="notSelectedRole" onClick={() => setRole("retailer")}>
            <p>Retailer</p>
          </div>
        )}
      </div>
      <button className="btn-primary" onClick={() => userLogin()}>
        Login
      </button>
      <p>
        Do not have an Account?{" "}
        <Link className="pinkText" to="/signup">
          Signup
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
