import React from "react";
import "./Footer.css"; 
import Logo from "./Logo.png";


const Footer = () => {
  return (
    <>
    <footer class="footer">
      <div class="footer__addr">
      <div className="image-remofgvsfvebg-preview-1">
              <img src={Logo} alt="Description of the company logo" />
            </div>
        <h1 class="footer__logo">CyberResponse</h1>
        <address>
          A Resilient Framework for collecting and responding to digital crimes and frauds
          <br />
        </address>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Media</h2>

          <ul class="nav__ul">
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>

            <li>
              <a href="https://www.youtube.com">Youtube</a>
            </li>

            <li>
              <a href="https://www.youtube.com">Twitter</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">About</h2>

          <ul class="nav__ul">
            <li>
              <a href="https://www.youtube.com">Disclaimer</a>
            </li>

            <li>
              <a href="https://www.youtube.com">Community</a>
            </li>

            <li>
              <a href="https://www.youtube.com">FAQ</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">Legal</h2>

          <ul class="nav__ul">
            <li>
              <a href="https://www.youtube.com">Privacy Policy</a>
            </li>

            <li>
              <a href="https://www.youtube.com">Terms of Use</a>
            </li>

            <li>
              <a href="https://www.youtube.com">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="legal">
        <p>&copy; 2024 CyberResponse. All rights reserved.</p>

      </div>
    </footer>
    </>
  );
};

export default Footer;