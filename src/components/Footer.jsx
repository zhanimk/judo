import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-top">
        <div className="logo-area">
          <h2>
            JUDO <span>WORLD</span>
          </h2>
          <p>Дзюдо өнері арқылы дене мен рухтың үйлесімі.</p>
        </div>
        <div className="nav-area">
          <h3>Навигация</h3>
          <ul>
            <li>
              <Link to="/">Басты бет</Link>
            </li>
            <li>
              <Link to="/news">Жаңалықтар</Link>
            </li>
            <li>
              <Link to="/tournaments">Турнирлер</Link>
            </li>
            <li>
              <Link to="/ranking">Рейтинг</Link>
            </li>
            <li>
              <Link to="/technique">Техника</Link>
            </li>
            <li>
              <Link to="/contacts">Байланыс</Link>
            </li>
          </ul>
        </div>
        <div className="contacts-area">
          <h3>Байланыс</h3>
          <p>
            <FaPhone /> +7 (777) 123-45-67
          </p>
          <p>
            <FaEnvelope /> info@judoworld.kz
          </p>
          <div className="social-icons">
            <a href="#" className="icon instagram">
              <FaInstagram />
            </a>
            <a href="#" className="icon facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="icon youtube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <div className="logo-with-flag">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/7/70/International_Judo_Federation_logo.svg/1200px-International_Judo_Federation_logo.svg.png"
              alt="Judo World Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/960px-Flag_of_Kazakhstan.svg.png"
              alt="Flag of Kazakhstan"
              style={{ height: "25px", marginLeft: "10px" }}
            />
          </div>
          <p>
            &copy; 2024 <span>JUDO WORLD</span> — Барлық құқықтар қорғалған.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
