import React from 'react';
import Navbar from '../../NavBar/navbar';
import img from '../../../assets/Img/Pamali.jpg';
import imgsr from '../../../assets/Img/pamali/ppr1.jpg';
import imgsr1 from '../../../assets/Img/pamali/ppr2.jpg';
import imgsr2 from '../../../assets/Img/pamali/ppr3.jpg';
import imgsr3 from '../../../assets/Img/pamali/p1.jpg';
import pe1 from '../../../assets/Img/pamali/p2.jpg';
import pe2 from '../../../assets/Img/pamali/p3.jpg';
import pe3 from '../../../assets/Img/pamali/p4.jpg';
import './Detail.css';
import Footer from '../Footer';

const Detail10 = () => {
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
              <li className="breadcrumb-item active text-white" aria-current="page">Pamali</li>
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
                  <h5 className="card-title">Pamali</h5>
                  <p className="card-text" style={{ fontSize: '9.6px' }}>The word pamali in Bahasa means taboo, in these game you will experiencing first person view from various characters with Indonesian Culture from various Province among Indonesia. If you doing pamali stuff's during the gameplay, it will be added to your sompral information in the end of gameplay. The world sompral is from Sundanesse languages that means doing taboo things intendly or purposely. People tend to doing pamali because of lack local cultures information that could mislead them unto the restless spirits anger or they are ignorant and doesn't aware with their own behaviour that could insulted the restless one.</p>
                </div>
              </div>  
            </div>
          </div>
          <hr className='text-white'/>
          
          {/* BAGIAN ABOUT GAME */}

          <div className="row">
            <p className='text-white'>ABOUT THIS GAME</p>
            <div className="col mt-5">
              <span><h5 style={{ color: '#4e73df' }}>STORY</h5></span>
              <span><h3 className='text-white'>FOLKLORE ONE: THE WHITE LADY</h3></span>
              <p className='text-white'>A young man named Jaka has just gone back to his hometown to sell his old family house. While he is unpacking, cleaning, and renovating the house, he disregards many of his family’s old belongings and creates rude remarks. Not long after, he experiences mysterious and unexplained events. He eventually learns that the family has a secret and that he is not the only one in the empty house.</p>
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
              <span><h5 style={{ color: '#4e73df' }}>STORY MAP</h5></span>
              <span><h3 className='text-white'>A HAUNTED HOUSE</h3></span>
              <p className='text-white'>Explore an abandoned Indonesian house with a spine-chilling atmosphere. Seek deeper into the house to find out more about an unsettling truth about the family. Be careful not to disrespect the mystical being that resides there.</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col mt-5">
              <span><h5 style={{ color: '#4e73df' }}>ITEM OBJECT</h5></span>
              <span><h3 className='text-white'>OBJECT INTERACTION</h3></span>
              <p className='text-white'>Interact with various objects within the house. You could also speak out your thoughts. Found an interesting painting? You can either praise it or mock it instead. Be wary of your choices, what you do, see or say will lead you to a unique take on the world in each repeatable playthrough.</p>
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
              <span><h5 style={{ color: '#4e73df' }}>ENDINGS</h5></span>
              <span><h3 className='text-white'>MULTIPLE ENDINGS</h3></span>
              <p className='text-white'>Having second thoughts? You can run away the instant you arrived. Or do you wish to quickly sell the house without disturbing the entity that lingers in it? Or rather arrogantly explore and seek the entity? In Pamali, you'll be able to take decisions that will impact the experience and the ending. If you were in that situation, what would you do?</p>
            </div>
          </div>

          {/* BAGIAN SPESIFIKASI */}

          <hr className='text-white mt-5'/>
          <div className="row ms-auto">
            <h3 className='text-white mt-5'>SYSTEM REQUIREMENT</h3>
              <div className="col">
                <h4 className='text-white mt-3'>Minimum Specification :</h4>
                <p className='text-white'>
                  Graphics Card: NVIDIA GeForce 940MX <br />
                  CPU: Intel Core i5-7200U <br />
                  RAM: 4GB <br />
                  File Size: 2 GB <br />
                </p>
              </div>
            <div className="col">
              <h4 className='text-white mt-3'>Recomended Specification :</h4>
              <p className='text-white'>
                CPU: Intel Core i7-6700 <br />
                Graphics Card: NVIDIA GeForce GTX 970 <br />
                RAM: 16GB <br />
                File Size: 3 GB <br />
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

export default Detail10;
