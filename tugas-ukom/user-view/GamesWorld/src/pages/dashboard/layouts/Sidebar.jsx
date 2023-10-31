

const Sidebar = () => {
  return (
    <div>
      {/* Sidebar */}
      <ul
          className="navbar-nav sidebar wrapper position-sticky accordion rounded collapse show"
          style={{ backgroundColor: "#1e1e2f", margin: 10 }}
          id="collapseExample">
          {/* Sidebar - Brand  */}
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-gamepad"></i>
            </div>
            <div className="sidebar-brand-text mx-3">GamesWorld</div>
          </a>

          {/* Divider  */}
          <hr className="sidebar-divider" />

          {/* Heading  */}
          <div className="sidebar-heading" style={{color:'grey'}}>Admin</div>

          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <a className="nav-link" style={{color: '#0d6efd'}} href='/admin/homepage'>
              <i className="fas fa-tachometer-alt"></i>

              <span>Dashboard</span>
            </a>
          </li>

          {/* Nav Item - Post */}
          <li className="nav-item">
            <a className="nav-link" style={{color: '#0d6efd'}} href='/gamelist'>
              <i className="fas fa-scroll"></i>
              <span>Top Game List</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color: '#0d6efd'}} href='/gamelist'>
              <i className="fas fa-scroll"></i>
              <span>New Game List</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color: '#0d6efd'}} href='/gamelist'>
              <i className="fas fa-scroll"></i>
              <span>Indonesia Game List</span>
            </a>
          </li>

          {/* Nav Item - Categories */}
          <li className="nav-item">
            <a className="nav-link" style={{color: '#0d6efd'}} href="/usercomment">
              <i className="fas fa-list-alt"></i>
              <span>User Comments</span>
            </a>
          </li>

          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        {/* End of Sidebar  */}
    </div>
  )
}

export default Sidebar
