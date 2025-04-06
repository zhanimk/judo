import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { FaEnvelope, FaLock, FaTimes } from "react-icons/fa";

const LoginForm = ({ onClose, onSwitch, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      console.log("Попытка входа с email:", formData.email);

      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      console.log("Ответ от Supabase:", data, error);

      if (error) {
        console.error("Ошибка входа:", error.message);
        setMessage(`❌ ${error.message}`);
      } else if (data.user) {
        console.log("Вход успешный! Пользователь:", data.user);

        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("user_id", data.user.id)
          .single();

        if (profileError) {
          console.error("Ошибка получения профиля:", profileError.message);
        } else {
          console.log("Профиль пользователя:", profileData);
        }

        setMessage("✅ Кіру сәтті өтті!");

        if (typeof onLoginSuccess === "function") {
          onLoginSuccess(data.user);
        } else {
          console.warn("onLoginSuccess не является функцией!", onLoginSuccess);
        }

        setTimeout(() => {
          setMessage("");
          onClose();
        }, 1000);
      } else {
        console.warn("Ответ от Supabase не содержит user", data);
      }
    } catch (error) {
      console.error("Ошибка сервера:", error);
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

        <h2>Кіру</h2>
        <p>JUDO WORLD-қа қайта оралуыңызбен!</p>

        <form className="auth-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Кіру..." : "Кіру"}
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="switch-link">
          Аккаунтыңыз жоқ па? <span onClick={onSwitch}>Тіркелу</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
