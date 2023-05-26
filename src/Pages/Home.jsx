import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://velocity-backend-service.onrender.com/Auth/blogdata"
      );
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      {!localStorage.getItem("isLoggedIn") ? (
        <Navigate to="/signin" />
      ) : (
        <>
          <div className="container-fluid" style={{ background: "blue" }}>
            <h4 style={{ color: "white" }}>Blog List</h4>
          </div>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">S No</th>
                  <th scope="col">Blog Title</th>
                  <th scope="col">Blog status</th>
                  <th scope="col">Created On</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((currentData) => (
                    <tr>
                      <th scope="row">{currentData.s_no}</th>
                      <td>{currentData.blog_title}</td>
                      <td>{currentData.blog_status}</td>
                      <td>{currentData.created_on}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
