import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css';

import hero_banner from '../../assets/hero_banner.jpg'
import leo_banner from '../../assets/leo_banner.webp'
import leo_title from '../../assets/leotitle.png'
import hero_title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import Info from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <div className='hero'>
        <img src={leo_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          {/* <img src={leo_title} alt="" className='caption-img' /> */}

          {/* add the data about title */}
          <p>Parthiban "Parthi" is an animal rescuer and cafeteria owner in Theog, Himachal Pradesh, living with his wife Sathya, son Siddharth "Siddhu" and daughter Mathi "Chintu". One day, Parthi's friend, Joshy Andrews, a forest ranger, calls him to help tame a spotted hyena threatening the townsfolk.</p>

          <div className="hero-btns">
            <button className='btn'><img src={play} alt="" />Play</button>
            <button className='btn dark-btn'><img src={Info} alt="" />More Info</button>
          </div>

          <TitleCards title="Popular on Netflix" linkData='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'></TitleCards>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Blockbuster Movies" linkData='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'></TitleCards>
        <TitleCards title="Only on Netflix" linkData='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'></TitleCards>
        <TitleCards title="Upcoming" linkData='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'></TitleCards>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
