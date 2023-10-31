import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/navbar'
import Carousel from './Carousel/carousel'
import All from './All/all'
import Cards from './Cards/cards'
import Card1 from './Cards1/card1'
import Card2 from './Cards2/card2'
import Footer from './Footer'
import axios from 'axios';

const Test = () => {
  const [game, setGame] = useState([]);

  // console.log(game);

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
    <div style={{backgroundColor: '#1e1e2f'}}>
      <Navbar />
      <Carousel getDataGame={getDataGame} />
      <All />
      <div className="container" style={{ marginLeft: '80px' }}>
        <Cards />
        <Card1 />
        <Card2 />
      </div>
      <Footer />
    </div>
  );
}

export default Test;
