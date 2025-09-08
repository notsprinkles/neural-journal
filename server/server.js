import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/analyze", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You're a mood detector. Respond with a single emotion like: happy, sad, calm, angry, excited, stressed, etc.",
        },
        { role: "user", content: text },
      ],
    });

    const mood = response.choices[0].message.content.trim().toLowerCase();
    res.json({ mood });
  } catch (error) {
    console.error("OpenAI error:", error.message);
    res.status(500).json({ error: "OpenAI API error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
