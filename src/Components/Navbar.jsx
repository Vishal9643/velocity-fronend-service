import React from "react";

const Navbar = () => {
  const name = localStorage.getItem("name");
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <nav class="navbar navbar-light bg-light" style={{ height: "10vh" }}>
      <div class="container">
        <div className="row">
          <div className="container col-lg-6">
            <span class="navbar-brand mb-0 h1">Blog Tool</span>
          </div>
        </div>

        <span>
          <span style={{ paddingRight: "10px" }}>{name}</span>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
