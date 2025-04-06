import React from "react";

const News = () => {
  const newsData = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuwAI3lzBbp0nzD1JbJ4PQsqrOjXwV55Z0Q&s",
      title: "Жеңіске жеткен қазақстандық дзюдошылар",
      description:
        "Қазақстандық спортшылар беделді халықаралық турнирде алтын және күміс медальдарға ие болды.",
    },
    {
      img: "https://olympic.kz/images/1665569596.jpg",
      title: "Қазақстан құрамасының Азия чемпионатындағы нәтижелері",
      description:
        "Қазақстандық дзюдошылар Азия чемпионатында керемет нәтиже көрсетіп, бірнеше медаль жеңіп алды.",
    },
    {
      img: "https://vera.kz/wp-content/uploads/2024/04/%D1%81%D0%BF%D0%BE%D1%80%D1%82.jpg-%D0%B3%D0%BE%D1%82-1.jpg",
      title: "Қазақстан чемпионатының ашылуы",
      description:
        "Жергілікті спортшылар ел чемпионатында өз шеберліктерін көрсетуде. Бәсеке жоғары деңгейде өтуде.",
    },
    {
      img: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/AJ6WEQNZ6RN3TJQJCXFTN4S25U.jpg",
      title: "Олимпиадаға дайындық: дзюдошылардың жаттығулары",
      description:
        "Қазақстан ұлттық құрамасы Париж-2024 Олимпиадасына дайындықты күшейтіп жатыр.",
    },
    {
      img: "https://i.ytimg.com/vi/iiZidTQCBe8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD_TrI6rVuy_wGkk-bADNaV9JBNFg",
      title: "Жас дзюдошыларға арналған тренинг",
      description:
        "Тәжірибелі дзюдошылар жастарға арнайы шеберлік сабағын өткізіп, құнды кеңестер берді.",
    },
  ];

  return (
    <section id="news" className="news-section scroll-animate">
      <video
        className="background-video"
        src="https://ru.files.fm/u/zrnnd7fehbhttps://www.veed.io/view/fe2917e8-680a-4615-87f2-05ce575b958a?panel=share"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      ></video>
      <h2>📰 Жаңалықтар</h2>
      <div className="news-list">
        {newsData.map((news, index) => (
          <div className="news-item" key={index}>
            <div className="news-image">
              <img src={news.img} alt={`Жаңалық ${index + 1}`} />
            </div>
            <div className="news-content">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <a href="#">Толығырақ</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
