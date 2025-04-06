import React, { useState, useEffect } from "react";

const videoCategories = {
  5: [
    {
      id: 1,
      title: "Judo Technique 1",
      description: "Learn the basics of Judo.",
      videoId: "6H5tmncOY4Q",
    },
    {
      id: 2,
      title: "Judo Technique 2",
      description: "Advanced Judo techniques.",
      videoId: "4x6S3Q-Ktv8",
    },
    {
      id: 3,
      title: "Judo Technique 3",
      description: "Expert Judo tips.",
      videoId: "nw1ZdRjrdRI",
    },
    {
      id: 4,
      title: "Judo Technique 4",
      description: "Perfect throws in Judo.",
      videoId: "3Jb3tZvr9Ng",
    },
    {
      id: 5,
      title: "Judo Technique 5",
      description: "Defensive Judo techniques.",
      videoId: "699i--pvYmE",
    },
    {
      id: 6,
      title: "Judo Technique 6",
      description: "Guide for beginners.",
      videoId: "zIq0xI0ogxk",
    },
    {
      id: 7,
      title: "Judo Technique 7",
      description: "Throwing techniques for 5 Kyu.",
      videoId: "FQnOlCxo4oI",
    },
    {
      id: 8,
      title: "Judo Technique 8",
      description: "Improving your Judo.",
      videoId: "NDaQuJOFBYk",
    },
    {
      id: 9,
      title: "Judo Technique 9",
      description: "Key techniques for 5 Kyu.",
      videoId: "zQR3IOXxO_Q",
    },
    {
      id: 10,
      title: "Judo Technique 10",
      description: "Mastering Judo techniques.",
      videoId: "HFuMjOv0WN8",
    },
    {
      id: 11,
      title: "Judo Technique 11",
      description: "Final Judo tips for 5 Kyu.",
      videoId: "YUrogQWdwiY",
    },
  ],
  4: [
    {
      id: 1,
      title: "Judo Technique 1",
      description: "First technique for 4 Kyu.",
      videoId: "lLU9wv52ni0",
    },
    {
      id: 2,
      title: "Judo Technique 2",
      description: "Second technique for 4 Kyu.",
      videoId: "2DsVvDw7b8g",
    },
    {
      id: 3,
      title: "Judo Technique 3",
      description: "Advanced 4 Kyu techniques.",
      videoId: "c-A_nP7mKAc",
    },
    {
      id: 4,
      title: "Judo Technique 4",
      description: "Perfecting 4 Kyu throws.",
      videoId: "yhu1mfy2vJ4",
    },
    {
      id: 5,
      title: "Judo Technique 5",
      description: "Defensive techniques for 4 Kyu.",
      videoId: "bPKwtB4lyOQ",
    },
    {
      id: 6,
      title: "Judo Technique 6",
      description: "Throwing techniques for 4 Kyu.",
      videoId: "qTo8HlAAkOo",
    },
    {
      id: 7,
      title: "Judo Technique 7",
      description: "4 Kyu expert techniques.",
      videoId: "McfzA0yRVt4",
    },
    {
      id: 8,
      title: "Judo Technique 8",
      description: "Improve your technique for 4 Kyu.",
      videoId: "TT7XJVSEQxA",
    },
    {
      id: 9,
      title: "Judo Technique 9",
      description: "Key techniques for 4 Kyu.",
      videoId: "55-rFmBx53g",
    },
    {
      id: 10,
      title: "Judo Technique 10",
      description: "Final tips for 4 Kyu.",
      videoId: "SBf0aTma1VI",
    },
    {
      id: 11,
      title: "Judo Technique 11",
      description: "Mastering Judo for 4 Kyu.",
      videoId: "OWgSOlCuMXw",
    },
  ],
  3: [
    {
      id: 1,
      title: "Judo Technique 1",
      description: "Learn advanced techniques for 3 Kyu.",
      videoId: "vu1TMVNnq34",
    },
    {
      id: 2,
      title: "Judo Technique 2",
      description: "Defensive techniques for 3 Kyu.",
      videoId: "SU7Id6uVJ44",
    },
    {
      id: 3,
      title: "Judo Technique 3",
      description: "Perfecting throws for 3 Kyu.",
      videoId: "3b9Me3Fohpk",
    },
    {
      id: 4,
      title: "Judo Technique 4",
      description: "Master the art of Judo for 3 Kyu.",
      videoId: "jeQ541ScLB4",
    },
    {
      id: 5,
      title: "Judo Technique 5",
      description: "Improving footwork for 3 Kyu.",
      videoId: "8b6kY4s4zH4",
    },
    {
      id: 6,
      title: "Judo Technique 6",
      description: "Throwing and countering techniques for 3 Kyu.",
      videoId: "4BUUvqxi_Kk",
    },
    {
      id: 7,
      title: "Judo Technique 7",
      description: "Advanced gripping techniques for 3 Kyu.",
      videoId: "0itJFhV9pDQ",
    },
    {
      id: 8,
      title: "Judo Technique 8",
      description: "Exploring the basics of Judo for 3 Kyu.",
      videoId: "H2HtAJdiJcE",
    },
    {
      id: 9,
      title: "Judo Technique 9",
      description: "Improving control and throws for 3 Kyu.",
      videoId: "AIlTvZb4RlE",
    },
    {
      id: 10,
      title: "Judo Technique 10",
      description: "Combining techniques for 3 Kyu.",
      videoId: "t3tQriIPdlI",
    },
    {
      id: 11,
      title: "Judo Technique 11",
      description: "Expert tips for 3 Kyu.",
      videoId: "k2cHry9HByQ",
    },
  ],
  2: [
    {
      id: 1,
      title: "Judo Technique 1",
      description: "Learn techniques for 2 Kyu.",
      videoId: "880WbHvHv6A",
    },
    {
      id: 2,
      title: "Judo Technique 2",
      description: "Advanced techniques for 2 Kyu.",
      videoId: "5VhduA5xkbA",
    },
    {
      id: 3,
      title: "Judo Technique 3",
      description: "Perfecting throws for 2 Kyu.",
      videoId: "MnNG67pF_a0",
    },
    {
      id: 4,
      title: "Judo Technique 4",
      description: "Counter techniques for 2 Kyu.",
      videoId: "bWG9O1BVKtQ",
    },
    {
      id: 5,
      title: "Judo Technique 5",
      description: "Footwork and throws for 2 Kyu.",
      videoId: "M9_7De6A1kk",
    },
    {
      id: 6,
      title: "Judo Technique 6",
      description: "Judo grips for 2 Kyu.",
      videoId: "iUpSu5J-bgw",
    },
    {
      id: 7,
      title: "Judo Technique 7",
      description: "Expert tips for 2 Kyu.",
      videoId: "JPJx9-oAVns",
    },
    {
      id: 8,
      title: "Judo Technique 8",
      description: "Key throws for 2 Kyu.",
      videoId: "3VZVUAmiMD8",
    },
    {
      id: 9,
      title: "Judo Technique 9",
      description: "Mastering grips for 2 Kyu.",
      videoId: "EiqyoVcIAi8",
    },
    {
      id: 10,
      title: "Judo Technique 10",
      description: "Final techniques for 2 Kyu.",
      videoId: "yaTGgRjnwB8",
    },
    {
      id: 11,
      title: "Judo Technique 11",
      description: "Mastering Judo for 2 Kyu.",
      videoId: "9f0n8jez7iA",
    },
  ],
  1: [
    {
      id: 1,
      title: "Judo Technique 1",
      description: "Techniques for 1 Kyu.",
      videoId: "MehP6I5cY2c",
    },
    {
      id: 2,
      title: "Judo Technique 2",
      description: "Advanced techniques for 1 Kyu.",
      videoId: "ORIYstuxYT8",
    },
    {
      id: 3,
      title: "Judo Technique 3",
      description: "Throws for 1 Kyu.",
      videoId: "4pQd_bEnlf0",
    },
    {
      id: 4,
      title: "Judo Technique 4",
      description: "Expert techniques for 1 Kyu.",
      videoId: "SnZciTAY9vc",
    },
    {
      id: 5,
      title: "Judo Technique 5",
      description: "Counter techniques for 1 Kyu.",
      videoId: "ROeayhvom9U",
    },
    {
      id: 6,
      title: "Judo Technique 6",
      description: "Key tips for 1 Kyu.",
      videoId: "gGPXvWL8VbE",
    },
    {
      id: 7,
      title: "Judo Technique 7",
      description: "Mastering Judo for 1 Kyu.",
      videoId: "Fgi9b8DJ5sQ",
    },
    {
      id: 8,
      title: "Judo Technique 8",
      description: "Improving throws for 1 Kyu.",
      videoId: "WefAmW4azhk",
    },
    {
      id: 9,
      title: "Judo Technique 9",
      description: "Mastering grips for 1 Kyu.",
      videoId: "8F5p1zuJRG0",
    },
    {
      id: 10,
      title: "Judo Technique 10",
      description: "Final techniques for 1 Kyu.",
      videoId: "dKKpnD3eLcY",
    },
    {
      id: 11,
      title: "Judo Technique 11",
      description: "Expert Judo tips.",
      videoId: "lq1CUBRAm7s",
    },
  ],
};

const JudoVideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const createParticles = () => {
      const background = document.querySelector(".background-animation");
      if (!background) return;

      background.innerHTML = ""; // Очистка перед новым циклом

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("span");
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";
        particle.style.animationDuration = Math.random() * 5 + 3 + "s";
        background.appendChild(particle);
      }
    };

    // Ждём, пока React вставит элементы в DOM
    setTimeout(createParticles, 100);

    const interval = setInterval(createParticles, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="video-section">
      <div className="background-animation"></div>
      <div className="container">
        <h2 className="main-title">💪 КВАЛИФИКАЦИЯ ВИДЕОЛАРЫ</h2>

        <div className="button-group">
          {Object.keys(videoCategories).map((category) => (
            <button
              key={category}
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.toUpperCase()} КЮ
            </button>
          ))}
        </div>

        {selectedCategory && videoCategories[selectedCategory] && (
          <div className="video-list fade-in">
            <h2 className="title">{selectedCategory.toUpperCase()} КЮ</h2>
            <div className="video-grid">
              {videoCategories[selectedCategory].map((video) => (
                <div key={video.id} className="video-card">
                  <iframe
                    className="video-frame"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    frameBorder="0"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                  <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-description">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JudoVideoGallery;
