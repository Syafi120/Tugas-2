import React from 'react';
import Navbar from '../../NavBar/navbar';
import img from '../../../assets/Img/codwf3.jpg';
import imgsr from '../../../assets/Img/COD_MW3_Preview/no1.jpg';
import imgsr1 from '../../../assets/Img/COD_MW3_Preview/no2.jpg';
import imgsr2 from '../../../assets/Img/COD_MW3_Preview/no3.jpg';
import imgsr3 from '../../../assets/Img/campaign-img.png';
import pe1 from '../../../assets/Img/multiplayer-img.png';
import pe2 from '../../../assets/Img/zombies-img.png';
import pe3 from '../../../assets/Img/top-features-img.png';
import pe4 from '../../../assets/Img/zombie-ghost-img.png';
import './Detail.css';
import Footer from '../Footer';

const Detail1 = () => {
  return (

    // TAMPILAN AWAL CHECK

    <div style={{backgroundColor: '#1e1e2f'}}>
      <Navbar />
      <br />
      <div className='container mt-5'>
        <div className='d-flex justify-content-center mt-4 row'>
          <div className="row" style={{ marginTop: '10px' }}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a style={{ textDecoration: 'none', color: '#4e73df', }} href="/">Home</a></li>
              <li className="breadcrumb-item"><a style={{ textDecoration: 'none', color: '#4e73df', }} href="/">Categori</a></li>
              <li className="breadcrumb-item"><a style={{ textDecoration: 'none', color: '#4e73df', }} href="/Categori/fps">FPS Games</a></li>
              <li className="breadcrumb-item active text-white" aria-current="page">Call Of Duty Modern Warfare 3</li>
            </ol>
          </nav>
            <div className="col" style={{ marginLeft: '40px' }}>
              <div id="carouselExample" className="carousel slide" >
                <div className="carousel-inner" style={{ height: '424px', width: '750px' }}>
                  <div className="carousel-item active">
                    <img src={imgsr} className='d-block w-100' alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src={imgsr1} className='d-blocd w-100' alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src={imgsr2} className='d-block w-100' alt="" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '14rem', backgroundColor: '#27293d' }}>
                <img src={img} alt="" style={{ width: '222px' }} />
                <div className="card-body text-white">
                  <h5 className="card-title">COD MW 3</h5>
                  <p className="card-text">Get ready for an all-new Campaign that continues the story immediately following the events of Modern Warfare II. Lead developer Sledgehammer Games, in partnership with Infinity Ward is set to deliver a full Campaign of action-packed operations ranging from signature, cinematic experiences to free-form Open Combat Missions, resulting in more player choice than ever before.</p>
                </div>
              </div>  
            </div>
          </div>
          <hr className='text-white'/>
          
          {/* BAGIAN ABOUT GAME */}

          <div className="row mt-5">
            <p className='text-white'>ABOUT THIS GAME</p>
            <div className="col">
              <img src={ pe1 } alt="" style={{ width: '500px', height: '320px' }} />
            </div>
            <div className="col">
              <span><h5 style={{ color: '#4e73df' }}>MULTIPLAYER</h5></span>
              <span><h3 className='text-white'>IT'S TIME TO SETTLE OLD SCORES AND START NEW ONES</h3></span>
              <p className='text-white'>All 16 launch maps from the original Modern Warfare 2 [2009] have been modernized with new modes and gameplay features and will be available at launch to get everyone started, while over 12 all-new core 6v6 maps will fuel post launch live seasons.</p>
              <p className='text-white'>Modern Warfare III will also launch with new Ground War maps boasting innovative play space and the epic return and evolution of the popular War Mode that first debuted in 2017's Call of Duty: WWII.</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col mt-5">
              <span><h5 style={{ color: '#4e73df' }}>ZOMBIES</h5></span>
              <span><h3 className='text-white'>ALL NEW OPEN WORLD ZOMBIES</h3></span>
              <p className='text-white'>For the first time, team up with other squads to survive and fight massive hordes of the undead in the largest Call of Duty Zombies map ever. Call of Duty: Modern Warfare III Zombies (MWZ) tells a new Treyarch Zombies story with missions, core Zombies features, and secrets to discover. Ready up for an open world PvE survival experience against some of the biggest enemies in Call of Duty history.</p>
            </div>
            <div className="col">
              <img src={ pe2 } alt="" style={{ width: '500px' }} />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <img src={ pe3 } alt="" style={{ width: '500px' }} />
            </div>
            <div className="col">
              <span><h5 style={{ color: '#4e73df' }}>COMING TO MODERN WARFARE III</h5></span>
              <span><h3 className='text-white'>GAMEPLAY FEATURES</h3></span>
              <p className='text-white'>Carry Forward your MWII inventory into MWIII plus the return of the classic minimap, map voting, a silent movement Perk, updated movement mechanics, and more.</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col mt-5">
              <span><h5 style={{ color: '#4e73df' }}>INSTANTLY UNLOCK</h5></span>
              <span><h3 className='text-white'>ZOMBIES GHOST OPERATOR SKIN***</h3></span>
              <p className='text-white'>Pre-order Modern Warfare III and instantly unlock the Zombie Ghost Operator Skin for Modern Warfare II, Modern Warfare III, and Call of Duty: Warzone.</p>
            </div>
            <div className="col">
              <img src={ pe4 } alt="" style={{ width: '500px' }} />
            </div>
          </div>

          {/* BAGIAN SPESIFIKASI */}

          <hr className='text-white mt-5'/>
          <div className="row ms-auto">
            <h3 className='text-white mt-5'>SYSTEM REQUIREMENT</h3>
              <div className="col">
                <h4 className='text-white mt-3'>Minimum Specification :</h4>
                <p className='text-white'>
                  CPU: Intel Core i5-6600 or AMD Ryzen 5 1600 <br />
                  Video card: NVIDIA GeForce GTX 970 or AMD Radeon RX 480 RAM 3GB <br />
                  RAM: 12GB <br />
                  Storage space: SSD with 65GB available (25GB with COD HQ Downloaded) <br />
                </p>
              </div>
            <div className="col">
              <h4 className='text-white mt-3'>Recomended Specification :</h4>
              <p className='text-white'>
                CPU: Intel Core i5-6600 or AMD Ryzen 5 1600 <br />
                Video card: NVIDIA GeForce GTX 1070/ GeForce RTX 3050 or AMD Radeon RX Vega RAM 6GB <br />
                RAM: 16GB <br />
                Storage space: SSD with 65GB available (25GB with COD HQ Downloaded) <br />
              </p>
            </div>
          </div>

          {/* FORM COMMENT */}

          <h4 className='text-white mt-3'>Comments Section</h4>
          <form className='text-white mt-2'>
            <div className="mb-3">
              <div className="input-group mb-3">
                <span className="input-group-text"> Name :</span>
                <input type="text" className="form-control" placeholder="Enter Your Name" aria-label="Enter Your Name" />
                <span className="input-group-text"> Rate :</span>
                <input type="text" className="form-control" placeholder="1-10" aria-label="1-10" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Comment :</label>
              <textarea name="" id="" placeholder='Enter Your Comment' className='form-control'></textarea>
            </div>
            <button type="submit" className="btn" style={{backgroundColor: '#4e73df'}}>Submit</button>
          </form>

          {/* ORANG YANG COMMENT */}

          <div className='text-white mt-2'>
            <hr className='text-white' />
            <h5>Siti Subakja</h5>
            <p>8/10</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam deserunt excepturi quis ipsa natus laudantium quam, voluptate assumenda, autem harum illum aliquid ab voluptatibus molestiae sit odio quisquam! Facere?</p>
            <a href="" className='text-decoration-none' style={{ color: '#4e73df' }}>Reply</a>
          </div>
          <div className='text-white mt-3 ms-5'>
            <h6>Replied</h6>
          
            <h5>Amir Bagus</h5>
            <p>5/10</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam deserunt excepturi quis ipsa natus laudantium quam, voluptate assumenda, autem harum illum aliquid ab voluptatibus molestiae sit odio quisquam! Facere?</p>
          </div>
         <div className='text-white mt-2'>
            <hr className='text-white' />
            <h5>Siti Subakja</h5>
            <p>8/10</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam deserunt excepturi quis ipsa natus laudantium quam, voluptate assumenda, autem harum illum aliquid ab voluptatibus molestiae sit odio quisquam! Facere?</p>
            <a href="" className='text-decoration-none' style={{ color: '#4e73df' }}>Reply</a>
          </div>
          <div className='text-white mt-3 ms-5'>
            <h6>Replied</h6>
          
            <h5>Amir Bagus</h5>
            <p>5/10</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam deserunt excepturi quis ipsa natus laudantium quam, voluptate assumenda, autem harum illum aliquid ab voluptatibus molestiae sit odio quisquam! Facere?</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail1;
