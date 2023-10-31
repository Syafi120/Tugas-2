import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";
export default function EditGame() {
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
              <h1 className="h3 mb-0 text-light">Edit Game</h1>
            </div>
            <div className="col"></div>
            <form className="text-white">
              {/* Game Name */}
              <div className="form-group">
                <label>Game ID :</label>
                <input
                  type="text"
                  className="form-control text-white "
                  style={{ background: "#27293d" }}
                  value="3748"
                ></input>
              </div>
              <div className="form-group">
                <label>Game Name :</label>
                <input
                  type="text"
                  className="form-control text-white "
                  style={{ background: "#27293d" }}
                  value="Call Of Duty"
                ></input>
              </div>
              <div className="form-group">
                <label>Game Category :</label>
                <input
                  type="text"
                  className="form-control text-white "
                  style={{ background: "#27293d" }}
                  value="FPS"
                ></input>
              </div>
              <div className="form-group">
                <label>Game Release :</label>
                <input
                  type="text"
                  className="form-control text-white "
                  style={{ background: "#27293d" }}
                  value="20/10/2003"
                ></input>
              </div>
              <div className="form-group">
                <label>Game Desc :</label>
                <textarea
                  className="form-control text-white"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{ background: "#27293d" }}
                  value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, qui omnis consequuntur tenetur culpa, eius quae voluptatibus adipisci iste, id labore alias harum optio earum cupiditate laboriosam. Error, accusantium officia."
                ></textarea>
              </div>
              <div className="form-group">
                <label>Game Synopsis :</label>
                <textarea
                  className="form-control text-white"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{ background: "#27293d" }}
                  value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, qui omnis consequuntur tenetur culpa, eius quae voluptatibus adipisci iste, id labore alias harum optio earum cupiditate laboriosam. Error, accusantium officia."
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
                      value=" Intel Core i3-4340 or AMD FX-6300"
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
                      value="NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950"
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
                      value="8GB"
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
                      value="2446GB Free Space"
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
                          value="Windows 10"
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
                      value=" Intel Core i3-4340 or AMD FX-6300"
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
                      value="NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950"
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
                      value="8GB"
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
                      value="2446GB Free Space"
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
                          value="Windows 10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <button type="button" className="btn btn-outline-warning mt-2">
                  Edit
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
