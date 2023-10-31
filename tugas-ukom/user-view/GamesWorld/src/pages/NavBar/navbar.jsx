import React from 'react';
import './navbar.css';
import Game from '../../assets/Img/gamepad1.png';
import Home from '../../assets/Img/Logo/home.png';
import Upd from '../../assets/Img/Logo/trending.png';
import Trend from '../../assets/Img/Logo/trending.png';
import Categori from '../../assets/Img/Logo/categories.png';
import indo from '../../assets/Img/Logo/puzzle.png';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="ms-3 container-fluid">
          <img className='img' src={Game} alt='Game' />
          <a href="/" className="ms-2 navbar-brand text-decoration-none" style={{ color: '#4e73df' }}><h4>Gamesworld</h4></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-item collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-5">
              <li className="nav-item">
                <a href="/" className=" nav-link active text-decoration-none text-white ms-2" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link text-decoration-none text-white" onClick={() => {
                    document.getElementById("Hot").scrollIntoView({ behavior: "smooth" })
                    }}>
                  Hot Games
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link text-decoration-none text-white" onClick={() => {
                        document.getElementById("New").scrollIntoView({ behavior: "smooth" })
                      }}>
                  New Games
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link text-decoration-none text-white" onClick={() => {
                        document.getElementById("Local").scrollIntoView({ behavior: "smooth" })
                      }}>
                  Local Games
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categori
                </a>
                <ul className="dropdown-menu" style={{ backgroundColor: ' #041c3b ', opacity: '0.9', padding: '10px' }}>
                  <p className='ms-2' style={{ fontSize: '15px', color: '#4e73df' }}>Game Categories</p>
                  <hr className='text-white'/>
                  <div className="row" style={{ fontSize: '12px', width: '600px', }}>
                    <div className="col-3">
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="/Categori/fps" >FPS</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="/Categori/mmorpg">MMORPG</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="/Categori/race">RACE</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="/Categori/battleroyale">BATTLE ROYALE</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="/Categori/horror">HORROR</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="/Categori/farm">FARM-SIM</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="/Categori/adventure">ADVENTURE</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="/Categori/casual">CASUAL</a></li>
                    </div>
                    <div className="col-3" style={{ marginTop: '3px' }}>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Action</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " href="#"> </a></li>
                    </div>
                    <div className="col" style={{ marginTop: '3px' }}>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Action</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " style={{ color: '#0079CD' }} href="#">Horror</a></li>
                      <li><a className="dropdown-item " href="#"> </a></li>
                    </div>
                  </div>
                </ul>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Navbar