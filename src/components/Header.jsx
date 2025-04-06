import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import ChatBot from "./ChatBot";
import { supabase } from "../supabaseClient";
import { FaUserCircle, FaRobot } from "react-icons/fa";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // состояние для бургер-меню
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error && data?.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setUser(null);
      navigate("/");
    } else {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <>
      <header className={`judo-header ${isScrolled ? "scrolled" : ""}`}>
        {/* Бургер-меню */}
        <div
          className={`burger-menu ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`judo-nav ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Басты бет
          </Link>
          <Link to="/news" onClick={() => setMenuOpen(false)}>
            Жаңалықтар
          </Link>
          <Link to="/tournaments" onClick={() => setMenuOpen(false)}>
            Турнирлер
          </Link>
          <Link to="/ranking" onClick={() => setMenuOpen(false)}>
            Рейтинг
          </Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>
            Байланыс
          </Link>
          <Link to="/technique" onClick={() => setMenuOpen(false)}>
            Техника
          </Link>
        </nav>

        <div className="judo-right">
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaUserCircle
                size={30}
                style={{ cursor: "pointer", color: "var(--gold)" }}
                onClick={() => navigate("/profile")}
              />
            </div>
          ) : (
            <button
              className="judo-login-btn"
              onClick={() => setShowModal(true)}
            >
              Кіру
            </button>
          )}
          <FaRobot
            size={30}
            style={{
              cursor: "pointer",
              color: "var(--gold)",
              marginLeft: "15px",
            }}
            onClick={() => setShowChatbot(true)}
          />
        </div>

        {/* Галерея внутри хедера */}
        <div className="header-gallery">
          <div className="carousel-container">
            <div id="carousel">
              <figure className="one"></figure>
              <figure className="two"></figure>
              <figure className="three"></figure>
            </div>
          </div>
        </div>
      </header>

      {/* Модальное окно для логина */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowModal(false)}>
              &times;
            </span>
            {isLogin ? (
              <LoginForm
                onClose={() => setShowModal(false)}
                onSwitch={() => setIsLogin(!isLogin)}
              />
            ) : (
              <RegistrationForm
                onClose={() => setShowModal(false)}
                onSwitch={() => setIsLogin(!isLogin)}
              />
            )}
          </div>
        </div>
      )}

      {/* Модальное окно для чат-бота */}
      {showChatbot && (
        <div className="modal">
          <div className="modal-content chatbot-modal">
            <span className="close-btn" onClick={() => setShowChatbot(false)}>
              &times;
            </span>
            <ChatBot onClose={() => setShowChatbot(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
