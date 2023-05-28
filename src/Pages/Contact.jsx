import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="subpageTitle bg-primary py-4">
        <div className="container">
          <h1 className="text-uppercase text-white">Contact Us</h1>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="text-decoration-none" href="/">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact Us
                </li>
              </ol>
            </nav>
            <form
              name="contentForm"
              encType="multipart/form-data"
              method="post"
              action="/contact-us/index.stml"
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    placeholder="First Name"
                    type="text"
                    value=""
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="c_lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    name="lastname"
                    id="c_lastname"
                    className="form-control"
                    placeholder="Last Name"
                    type="text"
                    value=""
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="fromEmail" className="form-label">
                    Email
                  </label>
                  <input
                    name="fromEmail"
                    id="fromEmail"
                    className="form-control"
                    placeholder="Email"
                    type="email"
                    value=""
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    name="phoneNumber"
                    id="phoneNumber"
                    className="form-control"
                    placeholder="Phone Number"
                    type="text"
                    value=""
                    required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="comments" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    name="comments"
                    rows="5"
                    id="comments"
                    className="form-control"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <ul className="sidebar-widget list-group mt-lg-0 text-uppercase">
              <li className="list-group-item">
                <a
                  href="/"
                  data-module-object-id="2"
                  data-id="12379"
                  data-layout="basic"
                  data-levels="1"
                  className="text-decoration-none"
                >
                  About Us
                </a>
              </li>
              <li className="navHighlight list-group-item bg-primary">
                <a
                  href="/"
                  data-module-object-id="2"
                  data-id="12379"
                  data-layout="basic"
                  data-levels="1"
                  className="text-decoration-none text-white"
                >
                  Contact Us
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="/"
                  data-module-object-id="2"
                  data-id="12385"
                  data-layout="basic"
                  data-levels="1"
                  className="text-decoration-none"
                >
                  Phone Directory
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
