import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUser = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginHandle = () => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          "https://velocity-backend-service.onrender.com/Auth/login",
          {
            email: email,
            password: password,
          }
        );
        setIsLoggedIn(res.data.isLoggedIn);
        localStorage.setItem("isLoggedIn", res.data.isLoggedIn);
        localStorage.setItem("name", res.data.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <div className="container">
      {isLoggedIn || localStorage.getItem("isLoggedIn") ? (
        <Navigate to="/home" />
      ) : (
        <>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              fontSize: "30px",
              justifyContent: "center",
            }}
          >
            Login Page
          </span>
          <div
            className="d-flex justify-content-center"
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              marginTop: "60px",
            }}
          >
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                  onChange={handleUser}
                />
                <label className="form-label" htmlFor="form2Example1">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                  onChange={handlePassword}
                />
                <label className="form-label" htmlFor="form2Example2">
                  Password
                </label>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-block mb-4"
                onClick={loginHandle}
              >
                Signin
              </button>

              <div className="text-center">
                <Link to="/register">
                  <p>
                    Not a member? <a href="#!">Register</a>
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
