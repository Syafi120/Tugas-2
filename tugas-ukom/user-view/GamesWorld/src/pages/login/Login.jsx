// import React from 'react'
import img from "./penguin.jpeg";

const Login = () => {
  return (
    <div style={{ background: "#1e1e2f" }}>
      <div className="container text-white">
        {/* Outer Row  */}
        <div className="row justify-content-center mt-1">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-1" style={{ background: "#27293d" }}>
                {/* Nested Row within Card Body  */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block">
                    <img
                      src={img}
                      alt=""
                      style={{ width: "390px", height: "530px" }}
                      className="mt-3 ml-5"
                    />
                  </div>
                  <div className="col-lg-6 mt-3">
                    <div className="p-5 mt-3" style={{ fontSize: "40px" }}>
                      <p
                        className="sidebar-brand d-flex align-items-center justify-content-center font-weight-bold"
                        style={{ color: "#0d6efd" }}
                      >
                        <div className="sidebar-brand-icon rotate-n-15">
                          <i className="fas fa-gamepad fa-lg"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">
                          GamesWorld
                        </div>
                      </p>
                      <div className="text-center mt-4">
                        <h1 className="h4 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            placeholder="Enter Username"
                          ></input>
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          ></input>
                        </div>
                        <a
                          href="/admin/homepage"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </a>
                        <a
                          href="/"
                          className="btn btn-success btn-user btn-block"
                        >
                          Back
                        </a>
                        <hr />
                      </form>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
