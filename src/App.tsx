import './App.css';

import React from 'react';

import Card from './Card';
import closeup from './closeup.jpg';
import closeup2 from './closeup2.jpg';
import logo from './logo384.png';
import profile from './profile.png';
import stage from './stage.jpg';

function App() {
  return (
    <div className="App">
      <div className="logoWrapper">
        <img src={logo} className="centerLogo" alt="logo" />
      </div>
      <div className="headerWrapper">
        <div className="luis">LUIS</div>
        <div className="shrestha">SHRESTHA</div>
        <div className="tagline">EXPERIENCE THE IMPOSSIBLE...</div>
      </div>
      <center>
        <img src={closeup} className="firstPic" alt="close up magic" />
        <div className="performances">Performances</div>
        <div>
          <h3>CLOSE UP MAGIC</h3>
          <img src={closeup2} className="secondPic" alt="close up magic" />
          <div className="content">
            Prepare to be enchanted by my close-up magic, designed for corporate
            events, restaurants, weddings, and occasions where people come
            together to celebrate, network, or socialize. As I effortlessly
            mingle with guests, I deliver mind-blowing magic that will leave
            them spellbound and create memories that last a lifetime.
          </div>
        </div>
        <div className="stageMagicWrapper">
          <h3>STAGE MAGIC</h3>
          <img src={stage} className="thirdPic" alt="stage magic" />
          <div className="content">
            Experience the extraordinary with my captivating stage magic
            performances. Ideal for venues with a stage and a seated audience,
            my show combines mesmerizing sleight of hand demonstrations,
            astonishing blindfold acts, and an enchanting fusion of magic and
            mentalism. Prepare to be entertained and immersed in a world where
            impossible moments come to life.
          </div>
        </div>
        <div className="aboutme">About Me</div>
        <img src={profile} className="profilePic" alt="profile picture" />
        <div className="aboutContent">
          <p>
            My journey began with writing performances intended for live
            audiences. The world of magic instantly captivated me, igniting a
            deep love for the art form. I knew that magic was my calling. It
            consumes my thoughts day and night, and I am rarely seen without a
            deck of cards in my hands.
          </p>
          <p>
            Earning the esteemed title of the finest sleight of hand artist in
            Nepal, I have also been entrusted with the honor of leading the
            Nepali Brotherhood of Magicians, the sole magician's organization in
            Nepal. This responsibility instilled in me a deep sense of duty
            towards the future of magic and live shows in Nepal.
          </p>
          <p>
            With extensive experience, including in TV, I continually push the
            boundaries of magic to create unforgettable moments. Join me on this
            enchanting journey to witness the wonder and magic I bring to every
            performance. Together, let's EXPERIENCE THE IMPOSSIBLE and create a
            legacy in the world of magic.
          </p>
        </div>
        <div className="contactWrapper">
          <h3>GET IN TOUCH</h3>
          <div>
            <b>Email:</b> info@luisshrestha.com
          </div>
          <div>
            <b>Phone number:</b> (986) 937-5735
          </div>
          <div>
            <b>Instagram:</b>
            <a href="https://www.instagram.com/magicbyluis/">@magicbyluis</a>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
