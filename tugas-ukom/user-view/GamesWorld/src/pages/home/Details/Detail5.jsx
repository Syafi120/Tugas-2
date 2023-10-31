import React from 'react';
import Navbar from '../../NavBar/navbar';
import img from '../../../assets/Img/Lostsaga.jpeg';
import imgsr from '../../../assets/Img/lostsaga/ls1.jpg';
import imgsr1 from '../../../assets/Img/lostsaga/ls2.jpg';
import imgsr2 from '../../../assets/Img/lostsaga/ls3.jpg';
import imgsr3 from '../../../assets/Img/lostsaga/lso1.jpg';
import pe1 from '../../../assets/Img/lostsaga/lso2.jpg';
import pe2 from '../../../assets/Img/lostsaga/lso3.jpg';
import pe3 from '../../../assets/Img/lostsaga/event.jpg';
import './Detail.css';
import Footer from '../Footer';

const Detail5 = () => {
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
              <li className="breadcrumb-item active text-white" aria-current="page">Lost Saga Origin</li>
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
                  <h5 className="card-title">Lost Saga Origin</h5>
                  <p className="card-text" style={{ fontSize: '9.7px' }}>Lost Saga Origin adalah Game Online berbasis 3D Action Casual Fighting Game yang mengusung versi original Lost Saga, dengan menghadirkan ratusan Hero, puluhan Mode, serta gameplay yang akan memberikan pengalaman nostalgia bermain Lost Saga yang menarik dan menantang. Selain dengan memajukan beragam fitur & konten klasik, bersama dengan VALOFE, pengembang game yang berasal dari Korea Selatan, Gravity Game Link melalui Lost Saga Origin berjanji akan menghadirkan konten terbaru Lost Saga versi original dari Korea Selatan yang tentunya sudah ditunggu-tunggu kehadirannya oleh para fans Lost Saga di Indonesia.</p>
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
              <span><h3 className='text-white'>PVP GAMES BATTLE</h3></span>
              <p className='text-white'>Players fight each other on a series of suspended platforms in a variety of environments and under a variety of conditions.  Players select one of their heroes to play as upon spawning, but may change their heroes at any time (as long as they are not under attack, are not in the air, and have not lost any of their gear).</p>
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
              <span><h5 style={{ color: '#4e73df' }}>1v1</h5></span>
              <span><h3 className='text-white'>DUEL BATTLE WITH RANDOM PLAYER</h3></span>
              <p className='text-white'>Duel mode is now available, and you can try it with other people or with your own friends and where there is a loser that is the victory that will be obtained.</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col mt-5">
              <span><h5 style={{ color: '#4e73df' }}>PLAY WITH FRIEND</h5></span>
              <span><h3 className='text-white'>BATTLE TEAM WITH FRIENDS</h3></span>
              <p className='text-white'>You can also invite your friends to join the battle and it could be your friend or opponent later and you can also invite your friends to farm together to complete the available quests.</p>
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
              <span><h5 style={{ color: '#4e73df' }}>EVENT</h5></span>
              <span><h3 className='text-white'>LOST SAGA LOGIN EVENT</h3></span>
              <p className='text-white'>Check in every day to claim the event prize every day and when you have claimed it, don't forget to complete the event quest that is available every day.</p>
            </div>
          </div>

          {/* BAGIAN SPESIFIKASI */}

          <hr className='text-white mt-5'/>
          <div className="row ms-auto">
            <h3 className='text-white mt-5'>SYSTEM REQUIREMENT</h3>
              <div className="col">
                <h4 className='text-white mt-3'>Minimum Specification :</h4>
                <p className='text-white'>
                  Prosesor Intel Pentium 4 1.2 GHz atau AMD 1600+ <br />
                  GPU Geforce 4 Ti atau ATI Radeon 9000 <br />
                  RAM 2GB <br />
                  Storage: 1 GB available space. <br />
                </p>
              </div>
            <div className="col">
              <h4 className='text-white mt-3'>Recomended Specification :</h4>
              <p className='text-white'>
                Prosesor Pentium 4 2.4 GHz <br />
                GPU Geforce FX5200 atau ATI Radeon 9250 <br />
                RAM 4GB <br />
                File Size: 2 GB <br />
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

export default Detail5;
