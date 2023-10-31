import img from "../../../../public/icon/undraw_profile.svg";

export default function Topbar() {
  return (
    <nav
      style={{ backgroundColor: "#1e1e2f" }}
      className="navbar navbar-expand topbar mb-4 static-top shadow"
    >
      {/* Sidebar Toggle (Topbar)  */}

      <button
        className="btn btn-link d-md-none rounded-circle mr-3"
        data-toggle="collapse"
        type="button"
        data-target="#collapseExample"
        aria-expanded="true"
        aria-controls="collapseExample"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              <i className="fa fa-bars"></i>
              </button> */}

      {/* Topbar Navbar  */}
      <ul className="navbar-nav ml-auto">
        {/* <div className="topbar-divider d-none d-sm-block"></div>  */}

        {/* Nav Item - User Information  */}
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-light font-weight-bold">
              Admin
            </span>
            <img className="img-profile rounded-circle" src={img} />
          </a>
          {/* Dropdown - User Information  */}
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <a className="dropdown-item" href="#">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Settings
            </a>
            <div className="dropdown-divider"></div>
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
