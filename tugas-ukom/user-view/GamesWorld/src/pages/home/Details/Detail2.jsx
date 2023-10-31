import React from 'react';
import Navbar from '../../NavBar/navbar';
import img from '../../../assets/Img/cs2.jpg';
import imgsr from '../../../assets/Img/CS_Preview/no1.jpg';
import imgsr1 from '../../../assets/Img/CS_Preview/no2.jpg';
import imgsr2 from '../../../assets/Img/CS_Preview/no3.jpg';
import imgsr3 from '../../../assets/Img/CS_Preview/cs1.jpg';
import pe1 from '../../../assets/Img/CS_Preview/spacenaturally.jpg';
import pe2 from '../../../assets/Img/CS_Preview/smoke.jpg';
import pe3 from '../../../assets/Img/CS_Preview/lighting.jpg';
import './Detail.css';
import Footer from '../Footer';

const Detail2 = () => {
  return (
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
              <li className="breadcrumb-item active text-white" aria-current="page">Counter Strike 2</li>
            </ol>
          </nav>
            <div className="col" style={{ marginLeft: '40px' }}>
              <div id="carouselExample" className="carousel slide" >
                <div className="carousel-inner" style={{ height: '424px', width: '750px' }}>
                  <div className="carousel-item active">
                    <img src={imgsr} className='d-block w-100' alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src={imgsr1} className='d-blocd w-100' style={{ height: '500px' }} alt="" />
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
                  <h5 className="card-title">Counter Strike 2</h5>
                  <p className="card-text">Counter-Strike 2 is the largest technical leap forward in Counter-Strike’s history, ensuring new features and updates for years to come. Counter-Strike 2 is a free upgrade to CS:GO. So build your loadout, hone your skills, and prepare yourself for what’s next!</p>
                </div>
              </div>  
            </div>
          </div>
          <hr className='text-white'/>
          
          {/* BAGIAN ABOUT GAME */}

          <div className="row">
            <p className='text-white'>ABOUT THIS GAME</p>
            <div className="col mt-5">
              <span><h5 style={{ color: '#4e73df' }}>GAMEPLAY</h5></span>
              <span><h3 className='text-white'>COLOURFUL MAPS</h3></span>
              <p className='text-white'>Smoke now has the ability to interact with other gameplay events, creating new opportunities. Bullets and HE grenades can push smoke to briefly clear sightlines or expand occlusion.</p>
            </div>
            <div className="col">
              <img src={ imgsr3 } alt="" style={{ width: '500px' }} />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <img src={ pe1 } alt="" style={{ width: '500px' }} />
            </div>
            <div className="col">
              <span><h5 style={{ color: '#4e73df' }}>OBJECT</h5></span>
              <span><h3 className='text-white'>EXPAND TO FILL SPACE NATURALLY</h3></span>
              <p className='text-white'>Now the smoke will seep out of opened doorways and broken windows, go down and up stairs, as well as expand in long corridors and combine with other smokes.</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col mt-5">
              <span><h5 style={{ color: '#4e73df' }}>SMOKE</h5></span>
              <span><h3 className='text-white'>RESPONSIVE SMOKE</h3></span>
              <p className='text-white'>Smoke Grenades are now dynamic volumetric objects that interact with the environment, and react to lighting, gunfire, and explosions.</p>
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
              <span><h5 style={{ color: '#4e73df' }}>LIGHTING</h5></span>
              <span><h3 className='text-white'>REACTS TO LIGHTING</h3></span>
              <p className='text-white'>In Counter-Strike 2 smoke particles work with the unified lighting system allowing for more realistic light and color.</p>
            </div>
          </div>

          {/* BAGIAN SPESIFIKASI */}

          <hr className='text-white mt-5'/>
          <div className="row ms-auto">
            <h3 className='text-white mt-5'>SYSTEM REQUIREMENT</h3>
              <div className="col">
                <h4 className='text-white mt-3'>Minimum Specification :</h4>
                <p className='text-white'>
                  CPU: Core i5-2400 / Ryzen 3 2200 <br />
                  VIDEO CARD: 2 GB GeForce GTX 950 / Radeon R7 265 <br />
                  RAM: 8 GB <br />
                  Storage: 85 GB available space. <br />
                </p>
              </div>
            <div className="col">
              <h4 className='text-white mt-3'>Recomended Specification :</h4>
              <p className='text-white'>
                CPU: Intel Core i7-9700K <br />
                Graphics Card: NVIDIA GeForce RTX 2070 <br />
                Memory: 16 GB <br />
                File Size: 85 GB <br />
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

export default Detail2;
