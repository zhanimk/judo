import React, { useState } from "react";
import { supabase } from "../supabaseClient";

import { FaUser, FaEnvelope, FaLock, FaGoogle, FaTimes } from "react-icons/fa"; // Импорт иконок

const RegistrationForm = ({ onClose, onSwitch }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("❌ Құпия сөздер сәйкес келмейді!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // 1. Создаём пользователя в Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { full_name: formData.username },
        },
      });

      if (error) {
        setMessage(`❌ ${error.message}`);
        return;
      }

      if (data.user) {
        // 2. Сохраняем данные в таблицу profiles
        console.log("Данные для вставки в таблицу profiles:", {
          id: data.user.id,
          full_name: formData.username,
          email: formData.email,
        });

        const { error: profileError } = await supabase.from("profiles").insert([
          {
            id: data.user.id,
            full_name: formData.username,
            email: formData.email,
          },
        ]);

        if (profileError) {
          console.error("Ошибка сохранения профиля:", profileError.message);
          setMessage("❌ Профильді сақтау кезінде қате шықты.");
          return;
        }

        setMessage("✅ Тіркелу сәтті өтті!");
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Ошибка на стороне клиента:", error.message);
      setMessage("❌ Сервер қатесі!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <span className="close-btn" onClick={onClose}>
          <FaTimes />
        </span>

        <h2>Аккаунт жасау</h2>
        <p>JUDO WORLD әлеміне қош келдіңіз! Бүгіннен бастаңыз.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser />
            <input
              type="text"
              name="username"
              placeholder="Пайдаланушы аты"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FaLock />
            <input
              type="password"
              name="password"
              placeholder="Құпия сөз"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FaLock />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Құпия сөзді қайталаңыз"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Тіркелу..." : "Тіркелу"}
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <div className="divider">немесе</div>

        <button className="google-btn">
          <FaGoogle /> Google арқылы кіру
        </button>

        <p className="switch-link">
          Аккаунтыңыз бар ма? <span onClick={onSwitch}>Кіру</span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
