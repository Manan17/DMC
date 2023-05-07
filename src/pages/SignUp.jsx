import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [role, setRole] = useState("user");
  return (
    <div className="login-container">
      <h1 className="login-text">Sign Up</h1>
      <input className="login-input" placeholder="Enter Email Id" />
      <input className="login-input" placeholder="Enter password" />
      <input className="login-input" placeholder="Confirm password" />
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
      <button className="btn-primary">SignUp</button>
      <p>
        Already have an Account?{" "}
        <Link className="pinkText" to="/login">
          Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default SignUp;
