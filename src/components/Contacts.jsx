import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Состояние для статуса
  const [user, setUser] = useState(null); // Состояние для хранения информации о пользователе

  useEffect(() => {
    // Функция для создания таблицы (если ее нет)
    const createTable = async () => {
      try {
        const { data, error } = await supabase.rpc("create_contacts_table");

        if (error) {
          console.error("Ошибка при создании таблицы:", error);
        } else {
          console.log("Таблица успешно создана:", data);
        }
      } catch (error) {
        console.error("Ошибка при вызове функции:", error);
      }
    };

    // Проверка текущего пользователя
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error);
        setStatus("Ошибка при получении данных пользователя");
      } else {
        setUser(data.user);
      }
    };

    // Вызываем функцию создания таблицы и проверку пользователя
    createTable();
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Пожалуйста, заполните все поля.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("contacts")
        .insert([{ name, email, message }]);

      if (error) {
        console.error("Ошибка при сохранении данных в таблицу contacts:", error.message);
        setStatus("Ошибка при отправке сообщения. Попробуйте снова.");
        return;
      }

      setStatus("Ваше сообщение успешно отправлено!");
      setName(""); // Очистить поле имени
      setEmail(""); // Очистить поле email
      setMessage(""); // Очистить поле сообщения
    } catch (error) {
      console.error("Ошибка на стороне клиента:", error.message);
      setStatus("Произошла ошибка. Попробуйте снова.");
    }
  };

  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2>✉️ Бізбен байланысыңыз</h2>
        <p className="contacts-description">
          Сұрақтарыңыз немесе ұсыныстарыңыз бар ма? Біз әрқашан қарым-қатынас
          жасауға қуаныштымыз! Бізге сізге ыңғайлы жолмен хабарласыңыз.
        </p>
        {user ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Бізге жазыңыз</h3>
            <input
              type="text"
              placeholder="Атыңыз"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Сіздің Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Хабарламаңыз"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Жіберу</button>
          </form>
        ) : (
          <p>Тіркелу үшін алдымен жүйеге кіріңіз.</p>
        )}

        {/* Вывод сообщения о статусе с дополнительным логированием */}
        {status && (
          <div className="status-message">
            <p>{status}</p>
          </div>
        )}
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <h3>📍 Біздің офис</h3>
          <p>Астана қ., Достық к-сі, 15, "Judo Center" БО</p>
        </div>

        <div className="contact-item">
          <h3>📞 Телефон</h3>
          <p>+7 (700) 123-45-67</p>
        </div>

        <div className="contact-item">
          <h3>📧 Электрондық пошта</h3>
          <p>info@judoworld.kz</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
