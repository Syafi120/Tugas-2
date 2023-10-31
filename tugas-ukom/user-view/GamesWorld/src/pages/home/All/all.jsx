import React from 'react';
import './all.css';
import image1 from '../../../assets/Img/Pubg.jpg';
import image2 from '../../../assets/Img/nfsheat.jpg';
import image3 from '../../../assets/Img/overwatch2.jpg';
import image4 from '../../../assets/Img/cs2.jpg';
import image5 from '../../../assets/Img/Pointblank.jpg';
import image6 from '../../../assets/Img/Lostsaga.jpeg';
import image7 from '../../../assets/Img/apexLegend.jpg';
import image8 from '../../../assets/Img/valorant.jpg';


const All = () => {
  return (
    <div className='container body'>
      <div className='row'>
        <span className='cover'>
          Arcade game
          <span className='new text-white'> iff you want to be first</span>
        </span>
        <div className='col-6 mt-2'>
          <a href='/carddetail5' className='text-white text-decoration-none'>
            <img src={image1} alt='' className='foto'/>
            <h5 className='ms-3 mt-3'>PUBG</h5>
            <p className='ms-3'>Battleground Game</p>
          </a>
        </div>
        <div className='col'>
          <a href='#' className='text-white text-decoration-none'>
            <img src={image2} alt='' className='foto'/>
            <h5 className='ms-3 mt-3'>Need For Speed Heat</h5>
            <p className='ms-3'>Competitive Game</p>
          </a>
        </div>
      </div>
      <hr className='text-white'/>
      <div className='row mt-5'>
        <div className='col-2'>
          <a href='/cs2' className='text-white text-decoration-none'>
            <img src={image4} alt='' className='kofer'/>
            <p className='teks'>Counter Strike 2</p>
            <p className='descr'>text here</p>
          </a>
        </div>
        <div className='col-2'>
          <a href='/pointblank' className='text-white text-decoration-none'>
            <img src={image5} alt='' className='kofer'/>
            <p className='teks'>Point Blank</p>
            <p className='descr'>text here</p>
          </a>
        </div>
        <div className='col-2'>
          <a href='' className='text-white text-decoration-none'>
            <img src={image3} alt='' className='kofer'/>
            <p className='teks'>Overwatch 2</p>
            <p className='descr'>text here</p>
          </a>
        </div>
        <div className='col-2'>
          <a href='/lostsaga' className='text-white text-decoration-none'>
            <img src={image6} alt='' className='kofer'/>
            <p className='teks'>Lost Saga Origin</p>
            <p className='descr'>text here</p>
          </a>
        </div>
        <div className='col-2'>
          <a href='/apexlegend' className='text-white text-decoration-none'>
            <img src={image7} alt='' className='kofer'/>
            <p className='teks'>Apex Legend</p>
            <p className='descr'>text here</p>
          </a>
        </div>
        <div className='col'>
          <a href='' className='text-white text-decoration-none'>
            <img src={image8} alt='' className='kofer'/>
            <p className='teks'>Valorant</p>
            <p className='descr'>text here</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default All