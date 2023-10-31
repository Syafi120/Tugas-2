// import { useState } from "react";
// import CreatePost from "./CreatePost";
// import DataTable from "datatables.net-dt";

export default function GameList() {
  return (
    <>
      {/* Page Content */}
      <div className="container-fluid">
        {/* page heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-light">Game List</h1>
        </div>

        {/* <div
          style={{ backgroundColor: "#1e1e2f" }}
          className="card shadow mb-4"> */}
          {/* <div
            style={{ backgroundColor: "#1e1e2f" }}
            className="card-header py-3"> */}
            <div className="row align-items-center">

              {/* AddGame button */}
              <button
              style={{width: '10vw', marginLeft: '8px'}}
                type="button"
                className="btn btn-outline-success"
                onClick={()=>window.location.href="/admin/addgame"}>
                Add Game
              </button>
            </div>
          </div>
          <div className="card-body mt-4">
            <div className="table-responsive">
              <table
                className="table text-center text-light table-dark mt-3"
                id="dataTable"
                // width="50%"
                >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nama Game</th>
                    <th>Tanggal Upload</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Nama Game</th>
                    <th>Tanggal Upload</th>
                    <th>Action</th>
                  </tr>
                </tfoot> */}
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Call Of Duty</td>
                    <td>04-10-2023</td>
                    <td>
                        <button type="button" className="btn mr-1 btn-outline-warning" onClick={()=>window.location.href="/admin/editgame"}>Edit</button>
                        <button type="button" className="btn ml-1 btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Pro Evolution Soccer 2021</td>
                    <td>10-05-2020</td>
                    <td>
                        <button type="button" className="btn mr-1 btn-outline-warning">Edit</button>
                        <button type="button" className="btn ml-1 btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Grand Turismo</td>
                    <td>04-10-2022</td>
                    <td>
                        <button type="button" className="btn mr-1 btn-outline-warning">Edit</button>
                        <button type="button" className="btn ml-1 btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}
    </>
  );
}
