import React from 'react';
import Navbar from '../../NavBar/navbar';
import img from '../../../assets/Img/coralisland/coralisland.jpg';
import imgsr from '../../../assets/Img/coralisland/cipr1.jpg';
import imgsr1 from '../../../assets/Img/coralisland/cipr2.png';
import imgsr2 from '../../../assets/Img/coralisland/cipr3.jpg';
import imgsr3 from '../../../assets/Img/coralisland/ci1.jpg';
import pe1 from '../../../assets/Img/coralisland/ci2.jpg';
import pe2 from '../../../assets/Img/coralisland/ci3.jpg';
import pe3 from '../../../assets/Img/coralisland/ci4.png';
import './Detail.css';
import Footer from '../Footer';

const Detail11 = () => {
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
              <li className="breadcrumb-item active text-white" aria-current="page">Coral Island</li>
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
                  <h5 className="card-title">Coral Island</h5>
                  <p className="card-text" style={{ fontSize: '11px' }}>It’s time to leave big-city life in Pokyo behind and start a new chapter of your life on Coral Island! Be who you want and create the idyllic farm of your dreams, where you’ll tend crops, nurture animals, and build a bond with the natural world around you. Help revitalize the nearby town and its surrounding coral reefs, and forge relationships with a vibrant community of more than 70 fellow people who call Coral Island home.</p>
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
              <span><h3 className='text-white'>WHAT ABOUT FARM</h3></span>
              <p className='text-white'>Farm. Decorate. Craft. Explore. Relax. Your future—and the future of Coral Island—is what you make of it. </p>
            </div>
            <div className="col">
              <img src={ imgsr3 } alt="" style={{ width: '500px', height: '300px' }} />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <img src={ pe1 } alt="" style={{ width: '500px' }} />
            </div>
            <div className="col">
              <span><h5 style={{ color: '#4e73df' }}>MAKE FARM</h5></span>
              <span><h3 className='text-white'>BUILD YOUR OWN FARM</h3></span>
              <p className='text-white'>Transform your overrun land on Coral Island into a lush and lively dreamscape—you decide what to build, what crops to grow, and which animals you’d like to tend.</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col mt-5">
              <span><h5 style={{ color: '#4e73df' }}>STORY</h5></span>
              <span><h3 className='text-white'>WRITE YOUR OWN STORY</h3></span>
              <p className='text-white'>On Coral Island, the story changes with each passing season, but life just goes with the flow. Spend your days exploring, or find that special someone in town to build a life together. Save the seas, brave monster-filled caverns, or focus on perfecting your farm. It’s all up to you.</p>
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
              <span><h5 style={{ color: '#4e73df' }}>MAKE FRIEND</h5></span>
              <span><h3 className='text-white'>BEFRIEND A DISERVE CAST OF ISLANDERS</h3></span>
              <p className='text-white'>Get to know the 70+ characters from all walks of life who live on Coral Island. Converse with them, find out more about their interests, and try to impress them with just the right gift.</p>
            </div>
          </div>

          {/* BAGIAN SPESIFIKASI */}

          <hr className='text-white mt-5'/>
          <div className="row ms-auto">
            <h3 className='text-white mt-5'>SYSTEM REQUIREMENT</h3>
              <div className="col">
                <h4 className='text-white mt-3'>Minimum Specification :</h4>
                <p className='text-white'>
                  CPU: Intel i3 Processor <br />
                  VIDEO CARD: Nvidia GeForce GTX 660 2GB <br />
                  RAM: 6GB <br />
                  FREE DISK SPACE: 8 GB <br />
                </p>
              </div>
            <div className="col">
              <h4 className='text-white mt-3'>Recomended Specification :</h4>
              <p className='text-white'>
                CPU: Intel i7 Processor/Ryzen 1700+ <br />
                VIDEO CARD: Nvidia GeForce GTX960+ <br />
                RAM: 16GB <br />
                FREE DISK SPACE: 8 GB <br />
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

export default Detail11;
