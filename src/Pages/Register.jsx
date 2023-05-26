import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [isLoggedIn, SetIsLoggedIn] = useState("");

  const handleUser = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handlefname = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setfname(e.target.value);
  };

  const handlelname = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setlname(e.target.value);
  };
  const registerHandle = () => {
    const fetchData = async () => {
      const res = await axios.post(
        "https://velocity-backend-service.onrender.com/Auth/register",
        {
          email: email,
          password: password,
          lname: lname,
          fname: fname,
        }
      );
      SetIsLoggedIn(res.data.isLoggedIn);
      localStorage.setItem("isLoggedIn", res.data.isLoggedIn);
      localStorage.setItem("name", res.data.name);
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
            Signup Page
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
                <label className="form-label" for="form2Example1">
                  Email address
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form2Example1"
                  className="form-control"
                  onChange={handlefname}
                />
                <label className="form-label" for="form2Example1">
                  First Name
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form2Example1"
                  className="form-control"
                  onChange={handlelname}
                />
                <label className="form-label" for="form2Example1">
                  Last Name
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                  onChange={handlePassword}
                />
                <label className="form-label" for="form2Example2">
                  Password
                </label>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-block mb-4"
                onClick={registerHandle}
              >
                Register
              </button>

              <div className="text-center">
                <Link to="/signin">
                  <p>
                    Already a member? <a href="#!">Login</a>
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

export default Register;
