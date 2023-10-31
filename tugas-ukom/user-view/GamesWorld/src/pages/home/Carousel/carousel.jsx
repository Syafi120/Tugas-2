import React from 'react';
import { useEffect, useState } from 'react';
import Colum1 from '../../../assets/Img/coralisland/3.jpg';
import Colum2 from '../../../assets/Img/1.jpg';
import Colum3 from '../../../assets/Img/2.png';
import './carousel.css';
import axios from 'axios';

const Carousel = () => {
    const [game, setGame] = useState([]);

//   console.log(game);

  const getDataGame = async() => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/game')
      setGame(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDataGame()
  }, []);


  return (
    <div className='tes'>
        <div id='carouselExampleCaptions' className='carousel slide'>
            <div className='carousel-indicators'>
                <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2'></button>
                <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3'></button>
            </div>

            <div className='carousel-inner mt-5 tes'>
                <div className='carousel-item active'>
                    <img src={Colum1} alt='Colum1' className='d-block w-100 '/>
                    <div className='carousel-caption d-none d-md-block'>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src={Colum2} alt='Colum1' className='d-block w-100'/>
                    <div className='carousel-caption d-none d-md-block'>
                    </div>
                </div>
                <div className='carousel-item '>
                    <img src={Colum3} alt='Colum1' className='d-block w-100'/>
                    <div className='carousel-caption d-none d-md-block'>
                    </div>
                </div>
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    </div>
  )
}

export default Carousel