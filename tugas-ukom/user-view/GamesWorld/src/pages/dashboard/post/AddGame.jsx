import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";
export default function AddGame() {
  return (
    <div style={{ backgroundColor: "#1e1e2f" }} id="wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Wrapper  */}
      <div
        id="content-wrapper"
        className="d-flex flex-column"
        style={{ backgroundColor: "#1e1e2f" }}
      >
        {/* Main Content  */}
        <div id="content">
          {/* Topbar  */}
          <Topbar />
          {/* End of Topbar  */}

          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-light">Add Game</h1>
            </div>
            <div className="col"></div>
            <form className="text-white">
              {/* Game Name */}
              <div className="form-group">
                <label>Game Name :</label>
                <input
                  type="text"
                  className="form-control text-white "
                  style={{ background: "#27293d" }}
                ></input>
              </div>
              <div className="form-group">
                <label>Game Category :</label>
                <input
                  type="text"
                  className="form-control text-white "
                  style={{ background: "#27293d" }}
                ></input>
              </div>
              <div className="form-group">
                <label>Game Release :</label>
                <input
                  type="text"
                  className="form-control text-white "
                  style={{ background: "#27293d" }}
                ></input>
              </div>
              <div className="form-group">
                <label>Game Desc :</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{ background: "#27293d" }}
                ></textarea>
              </div>
              <div className="form-group">
                <label>Game Synopsis :</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{ background: "#27293d" }}
                ></textarea>
                <hr />
              </div>
              <div className="form-group">
                <h4>Minimum Specification :</h4>
                <div className="row">
                  <div className="col-md-6">
                    <label for="leftInput" className="col-form-label">
                      CPU :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="leftInput"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="leftInput" className="col-form-label">
                      GPU :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="rightInput"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label for="leftInput" className="col-form-label">
                      RAM :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="leftInput"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="leftInput" className="col-form-label">
                      Hardisk :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="rightInput"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mx-auto text-center mt-2">
                      <div>
                        <label for="leftInput" className="form-label">
                          OS :
                        </label>
                        <input
                          type="text"
                          className="form-control text-white"
                          style={{ background: "#27293d" }}
                          id="leftInput"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="form-group">
                <h4>Recomended Specification :</h4>
                <div className="row">
                  <div className="col-md-6">
                    <label for="leftInput" className="col-form-label">
                      CPU :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="leftInput"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="leftInput" className="col-form-label">
                      GPU :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="rightInput"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label for="leftInput" className="col-form-label">
                      RAM :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="leftInput"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="leftInput" className="col-form-label">
                      Hardisk :
                    </label>
                    <input
                      type="text"
                      className="form-control text-white"
                      style={{ background: "#27293d" }}
                      id="rightInput"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mx-auto text-center mt-2">
                      <div>
                        <label for="leftInput" className="form-label">
                          OS :
                        </label>
                        <input
                          type="text"
                          className="form-control text-white"
                          style={{ background: "#27293d" }}
                          id="leftInput"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              {/* Upload File */}
              <div className="form-group">
                <label>Game Picture :</label>
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  className="form-control text-white "
                  style={{ background: "#27293d" }}
                ></input>
              </div>
              <div className="form-group">
                <label>Game Preview :</label>
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  className="form-control text-white "
                  style={{ background: "#27293d" }}
                ></input>
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  className="form-control text-white mt-3"
                  style={{ background: "#27293d" }}
                ></input>
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  className="form-control text-white mt-3"
                  style={{ background: "#27293d" }}
                ></input>
              </div>
              <div>
                <button type="button" className="btn btn-outline-success mt-2">
                  Add
                </button>
              </div>
            </form>
          </div>

          {/* {showDashboard && <Dashboard />}
            {showAddGame && <AddGame />}
            {showEditGame && <EditGame />}
            {showPost && (
              <GameList
                handleAddGameClick={handleAddGameClick}
                handleEditGameClick={handleEditGameClick}
              />
            )}
            {showCategories && <UserComment />}
            {showUsers && <Users />} */}
        </div>
        {/* End of Main Content  */}

        {/* Footer  */}
        <footer
          style={{ backgroundColor: "#1e1e2f" }}
          className="sticky-footer"
        >
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2021</span>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
      </div>
      {/* End of Content Wrapper  */}
    </div>
  );
}
