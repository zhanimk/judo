import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY =
  "DsVHcSbAolK_jbQ_hJiHM00pim99lKWtttPs1Y8939eBBN7SLuzaiDYNL60MuAiGNQLl6DpWWYT3BlbkFJhMUuApUsscBv26eU-CBaDw_V6t5w_ALPDROEvc5vs7P5zP717sffXiNHI2vbd3I5WjpgQEwRQA"; // Подставь свой ключ

const sendMessageToChatGPT = async (message) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            DsVHcSbAolK_jbQ_hJiHM00pim99lKWtttPs1Y8939eBBN7SLuzaiDYNL60MuAiGNQLl6DpWWYT3BlbkFJhMUuApUsscBv26eU -
            CBaDw_V6t5w_ALPDROEvc5vs7P5zP717sffXiNHI2vbd3I5WjpgQEwRQA
          }`, // Используем правильный API-ключ
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Ошибка при отправке запроса:", error);
    return "Ошибка при получении ответа от бота.";
  }
};

export default sendMessageToChatGPT;
