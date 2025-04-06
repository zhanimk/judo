import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const TournamentRegistration = ({ user, tournament }) => {
  const [fullName, setFullName] = useState("");
  const [weightCategory, setWeightCategory] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [club, setClub] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setErrorMessage("Тіркелу үшін алдымен жүйеге кіріңіз.");
      return;
    }

    try {
      const { error } = await supabase
        .from("tournament_registrations")
        .insert([
          {
            user_id: user.id,
            tournament_id: tournament.id,
            full_name: fullName,
            weight_category: weightCategory,
            phone_number: phoneNumber,
            club: club,
          },
        ]);

      if (error) {
        setErrorMessage("Қате орын алды, қайтадан байқап көріңіз.");
        console.error("DB Error:", error);
      } else {
        setSuccessMessage("Сіз сәтті тіркелдіңіз!");
        setFullName("");
        setWeightCategory("");
        setPhoneNumber("");
        setClub("");
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      setErrorMessage("Қате орын алды, қайтадан байқап көріңіз.");
    }
  };

  return (
    <div className="tournament-registration">
      <h4>Тіркелу: {tournament.title}</h4>

      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Аты-жөніңіз"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Салмақ санаты (кг)"
          value={weightCategory}
          onChange={(e) => setWeightCategory(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Телефон нөмірі"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Клуб атауы"
          value={club}
          onChange={(e) => setClub(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">
          Тіркелу
        </button>
      </form>
    </div>
  );
};

export default TournamentRegistration;
