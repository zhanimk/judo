import React, { useState } from "react";
import TournamentRegistration from "./TournamentRegistration";

const tournaments = [
  {
    id: "1",
    title: "Турнир 1",
    bg: "https://i.postimg.cc/zvD1KmcD/Whats-App-Image-2025-03-25-at-12-46-39.jpg",
  },
  {
    id: "2",
    title: "Турнир 2",
    bg: "https://i.postimg.cc/bYLP8JZZ/Whats-App-Image-2025-03-25-at-12-47-22.jpg",
  },
  {
    id: "3",
    title: "Турнир 3",
    bg: "https://i.postimg.cc/5N0VtVzn/Whats-App-Image-2025-03-25-at-12-48-39.jpg",
  },
];

const Tournaments = ({ user }) => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="tournaments" className="tournaments-hero-section">
      <h2 className="tournaments-title">🏆 Алдағы турнирлер</h2>
      <div className="tournament-hero-list">
        {tournaments.map((item) => (
          <div
            key={item.id}
            className="tournament-hero-card"
            style={{ backgroundImage: `url('${item.bg}')` }}
          >
            <div className="tournament-hero-overlay">
              <h3 className="tournament-title">{item.title}</h3>
              <div className="buttons-container">
                <button
                  className="btn view-photo-btn"
                  onClick={() => openModal(item.bg)}
                >
                  Положение Қарау
                </button>
                <TournamentRegistration tournament={item} user={user} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Tournament" className="modal-image" />
            <button className="btn close-modal" onClick={closeModal}>
              Жабу
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Tournaments;