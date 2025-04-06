import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const Profile = ({ user, onLogout }) => {
  const [profile, setProfile] = useState({
    full_name: "",
  });
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;

      setLoading(true);
      setError("");

      const { data, error } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .single();

      if (error) {
        setError("Ошибка загрузки профиля: " + error.message);
        console.error("Ошибка загрузки профиля:", error.message);
      } else {
        setProfile(data);
        setNewName(data.full_name);
      }

      setLoading(false);
    };

    const addProfile = async () => {
      if (!user) return;

      const { data: existingProfile, error: fetchError } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", user.id)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        console.error(
          "Ошибка проверки существования профиля:",
          fetchError.message
        );
        return;
      }

      if (existingProfile) {
        console.log("Профиль уже существует, пропускаем добавление.");
        return;
      }

      const { data, error } = await supabase.from("profiles").insert([
        {
          id: user.id,
          email: user.email,
          username: user.username || "default_username",
          full_name: user.full_name || null,
        },
      ]);

      if (error) {
        console.error("Ошибка добавления в таблицу profiles:", error.message);
      } else {
        console.log("Данные успешно добавлены в таблицу profiles:", data);
      }
    };

    if (user) {
      fetchProfile();
      addProfile();
    }
  }, [user]);

  const updateProfile = async () => {
    setLoading(true);
    setError("");

    const { error } = await supabase
      .from("profiles")
      .update({ full_name: newName })
      .eq("id", user.id);

    setLoading(false);

    if (error) {
      setError("Ошибка обновления профиля: " + error.message);
      console.error("Ошибка обновления профиля:", error.message);
    } else {
      setProfile((prev) => ({ ...prev, full_name: newName }));
      setEditing(false);
    }
  };

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  if (!user || loading) {
    return <div className="profile-container">Загрузка...</div>;
  }

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1 onClick={() => navigate("/")} className="home-link">
          🏠 Главная
        </h1>
      </header>

      <div className="profile-card">
        {editing ? (
          <input
            type="text"
            className="profile-input"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        ) : (
          <h2 className="profile-name">
            {profile.full_name || "Имя не указано"}
          </h2>
        )}

        <p className="profile-email">{user?.email || "Электронная почта"}</p>

        {error && <p className="error-message">{error}</p>}

        {editing ? (
          <button
            className="save-btn"
            onClick={updateProfile}
            disabled={loading}
          >
            {loading ? "Сохранение..." : "✔ Сохранить"}
          </button>
        ) : (
          <button className="edit-btn" onClick={() => setEditing(true)}>
            ✏ Редактировать
          </button>
        )}

        <button className="logout-btn" onClick={handleLogout}>
          🔴 Выйти
        </button>
      </div>
    </div>
  );
};

export default Profile;
