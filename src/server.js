const express = require("express");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Supabase клиент
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Ошибка: Переменные окружения SUPABASE_URL или SUPABASE_ANON_KEY не настроены.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Функция для получения профиля пользователя
const fetchProfile = async (userId) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("full_name, avatar_url, points")
    .eq("id", userId);

  if (error) {
    console.error("Ошибка загрузки профиля:", error.message);
    return null;
  }

  return data;
};

// ✅ Вход пользователя
app.post(
  "/login",
  [
    body("email").isEmail().withMessage("Введите корректный email"),
    body("password").notEmpty().withMessage("Введите пароль"),
  ],
  async (req, res) => {
    const { email, password } = req.body;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return res.status(400).json({ error: error.message });
      }

      res.json({
        message: "Вход выполнен",
        user: {
          id: data.user.id,
          email: data.user.email,
        },
      });
    } catch (error) {
      console.error("❌ Ошибка сервера:", error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
);

// ✅ Регистрация пользователя
app.post(
  "/register",
  [
    body("email").isEmail().withMessage("Введите корректный email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Пароль должен быть не менее 6 символов"),
    body("username").notEmpty().withMessage("Введите имя пользователя"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, username, full_name } = req.body;

    try {
      // Регистрация через Supabase
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username },
        },
      });

      if (error) {
        return res.status(400).json({ error: error.message });
      }

      // Логирование данных для вставки в таблицу profiles
      console.log("Данные для вставки в profiles:", {
        id: data.user.id,
        email: email,
        username: username,
        full_name: full_name || null,
      });

      // Добавление данных в таблицу profiles
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([
          {
            id: data.user.id,
            email: email,
            username: username,
            full_name: full_name || null,
            avatar_url: null,
            points: 0,
          },
        ]);

      if (profileError) {
        console.error("❌ Ошибка добавления в таблицу profiles:", profileError.message);
        return res.status(400).json({ error: "Ошибка сохранения профиля" });
      }

      res.json({
        message: "Регистрация успешна! Пользователь сохранен в таблице profiles.",
        user: {
          id: data.user.id,
          email: data.user.email,
        },
      });
    } catch (error) {
      console.error("❌ Ошибка сервера:", error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
);

// ✅ Получение текущего пользователя
app.get("/current-user", async (req, res) => {
  try {
    const { data: user, error } = await supabase.auth.getUser();
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    res.json({ user });
  } catch (error) {
    console.error("❌ Ошибка сервера:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Сервер запущен на порту: ${PORT}`));
