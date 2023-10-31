import React from 'react';
import './card2.css';
import Game9 from '../../../assets/Img/Dreadout/dreadout.jpg';
import Game10 from '../../../assets/Img/coralisland/coralisland.jpg';
import Game11 from '../../../assets/Img/pamali.jpg';
import Game12 from '../../../assets/Img/coffetalk.jpg';
import Game13 from '../../../assets/Img/naraka.jpg';

const Card2 = () => {
  return (
    <div className='row mt-4' id='Local'>
        <p className='title1 text-white'>Indonesian Games</p>
        <div className="col-2 ms-5">
            <div 
             style={{backgroundColor: '#27293d'}}
            className="card cards warna text-white text-center">
                <img src={Game9} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">Dreadout</h5>
                    <p className="card-text">Your text here</p>
                    <a href="/dreadout" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
        <div className="col-2" style={{ marginLeft: '20px' }}>
            <div 
             style={{backgroundColor: '#27293d'}}
            className="card cards warna text-white text-center">
                <img src={Game10} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">Coral Island</h5>
                    <p className="card-text">Your text here</p>
                    <a href="/coralisland" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
        <div className="col-2" style={{ marginLeft: '20px' }}>
            <div 
             style={{backgroundColor: '#27293d'}}
            className="card cards warna text-white text-center">
                <img src={Game11} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">Pamali</h5>
                    <p className="card-text">Your text here</p>
                    <a href="/pamali" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
        <div className="col-2" style={{ marginLeft: '20px' }}>
            <div 
             style={{backgroundColor: '#27293d'}}
            className="card cards warna text-white text-center">
                <img src={Game12} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">Coffe talk</h5>
                    <p className="card-text">Your text here</p>
                    <a href="#" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
        <div className="col-2" style={{ marginLeft: '20px' }}>
            <div 
             style={{backgroundColor: '#27293d'}}
            className="card cards warna text-white text-center">
                <img src={Game13} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">Naraka</h5>
                    <p className="card-text">Your text here</p>
                    <a href="#" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card2