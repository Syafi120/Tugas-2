// import React from 'react'

export default function UserComment() {
  return (
    <>
      <div className="container-fluid">
        {/* page heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-light">User Comments</h1>
        </div>

        <div className="col mb-4">
          <div
            className="card"
            style={{ backgroundColor: "#27293d", color: "white" }}>
            <div className="card-body">
              <h5 className="card-title">Dedy Cahyo</h5>
              <h6 className="card-subtitle mb-2">Call Of Duty</h6>
              <h6 className="card-subtitle mt-2 text-warning">9/10</h6>
              <p className="card-text">
                gamenya sangat seru, dengan mengusung simulasi sejarah
                peperangan yang sangat realistis
              </p>
              <button type="button" className="btn btn-outline-success me-2">
                Upload Komen
              </button>
              <button type="button" className="btn btn-outline-danger">
                Hapus Komen
              </button>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div
            className="card "
            style={{ backgroundColor: "#27293d", color: "white" }}>
            <div className="card-body">
              <h5 className="card-title">Anton Putra</h5>
              <h6 className="card-subtitle mb-2">Call Of Duty</h6>
              <h6 className="card-subtitle mt-2 text-warning">9/10</h6>
              <p className="card-text">
                simulasi perang sangat realistis sehingga saya dapat menikmati permainan
              </p>
              <button type="button" className="btn btn-outline-success me-2">
                Upload Komen
              </button>
              <button type="button" className="btn btn-outline-danger">
                Hapus Komen
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
