import React from "react";
import { Link } from 'react-router-dom';
import bannerImage from './images/Chicken-Alfredo.jpeg';

const Header = () => {
    return (
      <header className="header">
        <section>
          <div className='banner'>
            <h2>Little Lemon</h2>
            <p>Family owned Mediterranean restuarant eager to fulfil your hunger needs!</p>
            <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
          </div>

          <div className="banner-img">
            <img src={bannerImage} alt="" />
          </div>
        </section>
      </header>
    );
  }



  export default Header;