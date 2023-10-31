import React from 'react';
import Navbar from '../../NavBar/navbar';
import img from '../../../assets/Img/apexLegend.jpg';
import imgsr from '../../../assets/Img/APEX_Preview/1.jpg';
import imgsr1 from '../../../assets/Img/APEX_Preview/2.jpg';
import imgsr2 from '../../../assets/Img/APEX_Preview/3.jpg';
import imgsr3 from '../../../assets/Img/lgn.jpeg';
import pe1 from '../../../assets/Img/preview1.jpg';
import pe2 from '../../../assets/Img/pre1.jpg';
import pe3 from '../../../assets/Img/APEX_Preview/4.jpeg';
import './Detail.css';
import Footer from '../Footer';

const Detail = () => {
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
              <li className="breadcrumb-item active text-white" aria-current="page">Apex Legends</li>
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
                  <h5 className="card-title">Apex Legends</h5>
                  <p className="card-text">Choose from a lineup of outlaws, soldiers, misfits, and misanthropes, each with their own set of skills. The Apex Games welcome all comers – survive long enough, and they call you a Legend.</p>
                </div>
              </div>  
            </div>
          </div>
          <hr className='text-white'/>
          
          {/* BAGIAN ABOUT GAME */}

          <div className="row">
            <p className='text-white'>ABOUT THIS GAME</p>
            <div className="col mt-5">
              <span><h5 style={{ color: '#4e73df' }}>HARDCORE BATTLE</h5></span>
              <span><h3 className='text-white'>APEX LEGENDS HARDCORE</h3></span>
              <p className='text-white'>combat with the hardcore Battle Royale and super power skils on every character</p>
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
              <span><h5 style={{ color: '#4e73df' }}>EPIC COMBAT</h5></span>
              <span><h3 className='text-white'>STRATEGIC SQUAD PLAY</h3></span>
              <p className='text-white'>Whether you're battling on a massive floating city in Battle Royale or dueling in limited-time modes. you'll need to think fast Master your Legend's unique abilities and coordinate with your teammates to discover new tactics and powerful combination.</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col mt-5">
              <span><h5 style={{ color: '#4e73df' }}>MAKE EXPLORE</h5></span>
              <span><h3 className='text-white'>INNOVATIVE COMBAT</h3></span>
              <p className='text-white'>Master an expanding assortment of powerful weapons and equipment You'll need to move fast and learn the rhythms for each weapon to get the most of your arsenal Plus change it up with a boatload of new content each season.</p>
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
              <span><h5 style={{ color: '#4e73df' }}>GREATEST MAP</h5></span>
              <span><h3 className='text-white'>EVER-EXPANDING UNIVERSE</h3></span>
              <p className='text-white'>Apex Legends takes place an in immersive universe where the story continues to evlove, maps change, and new Legends keep joining the fight Make your mark on the Apex Games with a multitude of distinctive outfis and join the adventure</p>
            </div>
          </div>

          {/* BAGIAN SPESIFIKASI */}

          <hr className='text-white mt-5'/>
          <div className="row ms-auto">
            <h3 className='text-white mt-5'>SYSTEM REQUIREMENT</h3>
              <div className="col">
                <h4 className='text-white mt-3'>Minimum Specification :</h4>
                <p className='text-white'>
                  CPU: Intel Core i3-6300 3.8GHz / AMD FX-4350 4.2 GHz Quad-Core Processor <br />
                  VIDEO CARD: 1 GB NVIDIA GeForce GT 640 / Radeon HD 7730 <br />
                  RAM: 6 GB <br />
                  FREE DISK SPACE: 56 GB <br />
                </p>
              </div>
            <div className="col">
              <h4 className='text-white mt-3'>Recomended Specification :</h4>
              <p className='text-white'>
                CPU: Intel i5 3570K / Ryzen 5 CPU or equivalent <br />
                VIDEO CARD: 8 GB Nvidia GeForce GTX 970 / AMD Radeon R9 290 <br />
                RAM: 8 GB <br />
                FREE DISK SPACE: 56 GB <br />
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

export default Detail;
