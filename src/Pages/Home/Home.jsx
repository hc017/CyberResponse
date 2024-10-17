import React from "react";
import "./Home.css";
import HeroSection from "./Hero_section";
import JoinUs from "./JoinUs/JoinUs";
import About from "./About/About";
import Banner1 from './stayonline.png'
const Home = () => {
  return (
    <div class="Home-Container">
       <HeroSection/>
       <section class="report-cybercrimes">
    <div class="container">
        <div class="report-cybercrimes-content">
            <h2 class="section-title">title</h2>
            <p class="section-description">Help us fight cybercrimes by reporting any suspicious activities or incidents you encounter online.</p>
            <div class="report-count">
                <span id="count">0</span>
        
            </div>
        </div>
    </div>
</section>
  
      <div className="Home_usef">
        <About/>
        <div className="BannerContainer">
    <img src={Banner1} alt="Banner" className="BannerImage" />
</div>

       <JoinUs/>
      </div>
    </div>
  );
};

export default Home;
