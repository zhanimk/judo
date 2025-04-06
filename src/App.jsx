import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Hero from "./components/Hero";
import News from "./components/News";
import Tournaments from "./components/Tournaments";
import Profile from "./components/Profile";
import Ranking from "./components/Ranking";
import Contacts from "./components/Contacts";
import Tabs from "./components/Tabs";
import JudoVideoGallery from "./components/JudoVideoGallery";
import TournamentRegistration from "./components/TournamentRegistration";
import { supabase } from "./supabaseClient";
import "./index.css";

const pageVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.3 } },
};

const App = () => {
  const [authType, setAuthType] = useState(null);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setUser(session.user);
      }
    };

    fetchUser();

    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

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

    if (user) {
      fetchProfile();
    }
  }, [user]);

  const handleLogin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      setUser(data.user);
      setAuthType(null);
      navigate("/profile");
    }
  };

  const handleRegister = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (!error) {
      setUser(data.user);
      setAuthType(null);
      navigate("/profile");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <Header
        onOpenRegister={() => setAuthType("register")}
        onOpenLogin={() => setAuthType("login")}
        user={user}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Tabs />
                  <News />
                  <Tournaments user={user} />
                  <Contacts />
                </>
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/tournaments" element={<Tournaments user={user} />} />
            <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/technique" element={<JudoVideoGallery />} />
            <Route
              path="/register-tournament"
              element={<TournamentRegistration user={user} />}
            />
            <Route
              path="/register-tournament/:id"
              element={<TournamentRegistration user={user} />}
            />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />

      {authType === "register" && (
        <RegistrationForm
          onClose={() => setAuthType(null)}
          onRegister={handleRegister}
        />
      )}
      {authType === "login" && (
        <LoginForm
          onClose={() => setAuthType(null)}
          onLoginSuccess={handleLogin}
        />
      )}
    </>
  );
};

export default App;
