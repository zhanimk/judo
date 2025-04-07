import React from "react";

const Hero = () => {
  const handleRegister = () => {
    // Перенаправление на страницу турниров
    window.location.href = "/tournaments";
  };

  const handleLearnMore = () => {
    alert("Толық ақпарат алу үшін бөлімді таңдаңыз!");
  };

  return (
    <section id="about" className="judo-hero">
      <div className="hero-content">
        <h1 className="gradient-text">Дзюдо әлемі осы жерден басталады🥋</h1>
        <p>
          Жаңалықтарды қадағалаңыз, рейтингтерді қараңыз және үздік турнирлерге
          қатысыңыз!
        </p>
        <div className="hero-buttons">
          <button
            className="hero-btn primary-btn"
            onClick={handleRegister}
            aria-label="Тіркелу турнирге"
          >
            Турнирге тіркелу
          </button>
          <button
            className="hero-btn secondary-btn"
            onClick={handleLearnMore}
            aria-label="Толығырақ ақпарат"
          >
            Көбірек білу
          </button>
        </div>
      </div>

      {/* Картинка как дополнительный элемент */}
      <div className="hero-image">
        <img
          className="hero-img"
          src="https://www.sports.kz/upload/2024-08/66ad55662cbec.jpg"
          alt="Judo"
        />
      </div>
    </section>
  );
};

export default Hero;
