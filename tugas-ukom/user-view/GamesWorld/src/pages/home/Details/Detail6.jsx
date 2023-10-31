import React from 'react';
import Navbar from '../../NavBar/navbar';
import img from '../../../assets/Img/Pointblank.jpg';
import imgsr from '../../../assets/Img/pointblank/pbpr1.png';
import imgsr1 from '../../../assets/Img/pointblank/pbpr2.jpeg';
import imgsr2 from '../../../assets/Img/pointblank/pbpr3.jpg';
import imgsr3 from '../../../assets/Img/pointblank/pb1.jpg';
import pe1 from '../../../assets/Img/pointblank/pb2.jpg';
import pe2 from '../../../assets/Img/pointblank/pb3.jpg';
import pe3 from '../../../assets/Img/pointblank/pb4.jpg';
import './Detail.css';
import Footer from '../Footer';

const Detail6 = () => {
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
              <li className="breadcrumb-item active text-white" aria-current="page">Point Blank</li>
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
                  <h5 className="card-title">Point Blank</h5>
                  <p className="card-text" style={{ fontSize: '9px' }}>Generasi perubahan dan perkembangan yang cepat Tumbuh sebagai negara adikuasa dengan waktu yang singkat dari beberapa negara berkembang memunculkan beberapa faktor seperti penurunan terhadap tingkat kelahiran dan kekurangan sumber daya manusia yang parah. Pemerintah telah memperkenalkan tenaga kerja asing sebagai solusi, tetapi hal ini bertentangan dengan rakyat dan terjadi konflik yang mendalam. Jika kubu Free Rebels tidak bisa mengambil apa yang mereka inginkan, mereka akan mencoba merebut dan melawan CT- Force yang melindungi masyarakat.</p>
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
              <span><h3 className='text-white'>DENGAN KECEPATAN TINGGI DAN PERLAWANAN YANG KUAT!</h3></span>
              <p className='text-white'>Kecepatan tinggi dan perlawanan kuat yang bias dirasakan melalui jari Anda. Dengan menggnakan engine I-Cube Zepetto, Anda dapat merasakan battlefield yang realistis walau menggunakan PC dengan spec rendah</p>
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
              <span><h5 style={{ color: '#4e73df' }}>IN GAME</h5></span>
              <span><h3 className='text-white'>PERTEMPURAN YANG REALISTIS!</h3></span>
              <p className='text-white'>Memaksimalkan pertempuran realistis dengan memberikan fitur kehancuran mobil, kehancuran objek sekitar, dan pergerakan objek. Beragam strategi bermain dengan menggunakan latar objek sekitar yang bergerak dan berubah seiring waktu.</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col mt-5">
              <span><h5 style={{ color: '#4e73df' }}>GAMEMODE AND MAPS</h5></span>
              <span><h3 className='text-white'>MODE DAN MAP YANG BERVARIASI</h3></span>
              <p className='text-white'>Berbagai macam game mode dan mission seperti, solo, multi-player, destroy mission, bomb mission, challenge mode, dll. Map yang bervariasi dengan rute yang bermacam-macam untuk menyerang lawan dengan background yang realistis. Memperluas koleksi senjata dan item tempur yang memungkinkan user untuk membuat strategi.</p>
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
              <span><h3 className='text-white'>KOMPETISI E-SPORTS GLOBAL YANG DAPAT DIMAINKAN OLEH USER DI SELURUH DUNIA</h3></span>
              <p className='text-white'>Sistem nickname yang unik, sistem level up pribadi, servis clan Kompetisi e-sports global (PBWC/ PBIC/ PBIWC) setiap tahun yang menandingkan seluruh perwakilan pemain ditiap negara</p>
            </div>
          </div>

          {/* BAGIAN SPESIFIKASI */}

          <hr className='text-white mt-5'/>
          <div className="row ms-auto">
            <h3 className='text-white mt-5'>SYSTEM REQUIREMENT</h3>
              <div className="col">
                <h4 className='text-white mt-3'>Minimum Specification :</h4>
                <p className='text-white'>
                  VIDEO CARD: GeForce FX 5700/ Radeon9600 <br />
                  CPU: Pentium 4 2.4 GHz / Athlon XP 2500+ <br />
                  RAM: 512 MB <br />
                  Storage: 3 GB available space. <br />
                </p>
              </div>
            <div className="col">
              <h4 className='text-white mt-3'>Recomended Specification :</h4>
              <p className='text-white'>
                CPU: Pentium 4 3.0 GHz / Athlon XP 3000+ <br />
                VIDEO CARD: GeForce 6600 / Radeon X600 <br />
                RAM: 1 GB <br />
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

export default Detail6;
