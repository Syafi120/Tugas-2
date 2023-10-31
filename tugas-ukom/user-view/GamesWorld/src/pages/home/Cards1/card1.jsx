import React from 'react';
import './card1.css';
import Game5 from '../../../assets/Img/cs2.jpg';
import Game6 from '../../../assets/Img/Lostsaga.jpeg';
import Game7 from '../../../assets/Img/Pointblank.jpg';
import Game8 from '../../../assets/Img/overwatch2.jpg';
import Games8 from '../../../assets/Img/nfsheat.jpg';

const Card1 = () => {
  return (
    <div className='row mt-4' id='New'>
        <p className='title1 text-white'>Newest Game</p>
        <div className="col-2 ms-5">
            <div 
            style={{backgroundColor: '#27293d'}}
            className="card cards text-white text-center">
                <img src={Game5} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">Counter Strike 2</h5>
                    <p className="card-text">Your text here</p>
                    <a href="/cs2" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
        <div className="col-2" style={{ marginLeft: '20px' }}>
            <div 
            style={{backgroundColor: '#27293d'}}
            className="card cards warna text-white text-center">
                <img src={Game6} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">Lost Saga Origin</h5>
                    <p className="card-text">Your text here</p>
                    <a href="/lostsaga" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
        <div className="col-2" style={{ marginLeft: '20px' }}>
            <div 
            style={{backgroundColor: '#27293d'}}
            className="card cards warna text-white text-center">
                <img src={Game7} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">Point Blank</h5>
                    <p className="card-text">Your text here</p>
                    <a href="/pointblank" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
        <div className="col-2" style={{ marginLeft: '20px' }}>
            <div 
            style={{backgroundColor: '#27293d'}}
            className="card cards warna text-white text-center">
                <img src={Game8} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">Overwatch 2</h5>
                    <p className="card-text">Your text here</p>
                    <a href="#" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
        <div className="col-2" style={{ marginLeft: '20px' }}>
            <div 
            style={{backgroundColor: '#27293d'}}
            className="card cards warna text-white text-center">
                <img src={Games8} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">NFS Heat</h5>
                    <p className="card-text">Your text here</p>
                    <a href="#" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card1