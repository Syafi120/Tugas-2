import React from 'react';
import '../Cards/cards.css';
//       Game
import Game1 from '../../../assets/Img/apexLegend.jpg';
import Game2 from '../../../assets/Img/codwf3.jpg';
import Game3 from '../../../assets/Img/cs2.jpg';
import Game4 from '../../../assets/Img/valorant.jpg';
import Games4 from '../../../assets/Img/Pubg.jpg';

const Cards = () => {
  return (
    <div className='row mt-4' id='Hot'>
        <p className='title text-white'>Recommended</p>
        <div className="col-2 ms-5">
            <div
            style={{backgroundColor: '#27293d'}}
            className="card cards text-white text-center">
                <img src={Game1} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">Apex Legends</h5>
                    <p className="card-text">Your text here</p>
                    <a href='/apexlegend' style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
        <div className="col-2" style={{ marginLeft: '20px' }}>
            <div
            style={{backgroundColor: '#27293d'}}
            className="card cards text-white text-center">
                <img src={Game2} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">COD MW 3</h5>
                    <p className="card-text">Your text here</p>
                    <a href="/codmw3" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
        <div className="col-2"style={{ marginLeft: '20px' }}>
            <div 
            style={{backgroundColor: '#27293d'}}
            className="card cards text-white text-center">
                <img src={Game3} alt='' className='game'/>
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
            className="card cards text-white text-center">
                <img src={Game4} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">Valorant</h5>
                    <p className="card-text">Your text here</p>
                    <a href="/detail" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
        <div className="col" style={{ marginLeft: '20px' }}>
            <div 
            style={{backgroundColor: '#27293d'}}
            className="card cards text-white text-center">
                <img src={Games4} alt='' className='game'/>
                <div className="card-body">
                    <h5 className="card-title">PUBG</h5>
                    <p className="card-text">Your text here</p>
                    <a href="/detail" style={{backgroundColor: '#4e73df'}} className="btn">Check</a>
                </div>
            </div>
        </div>
    </div>
//              Card 2


  )
}

export default Cards