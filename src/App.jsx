import React, { useState } from "react";
import Header from "./components/Header";
import JournalEntry from "./components/JournalEntry";
import MoodVisualizer from "./components/MoodVisualizer";
import AssistantPrompt from "./components/AssistantPrompt";
import "./styles/App.css";

const moodBackgrounds = {
  happy: "linear-gradient(120deg, #ff9a9e, #fad0c4)",
  sad: "linear-gradient(120deg, #485563, #29323c)",
  angry: "linear-gradient(120deg, #cb2d3e, #ef473a)",
  calm: "linear-gradient(120deg, #89f7fe, #66a6ff)",
  neutral: "linear-gradient(120deg, #2c003e, #1a1a1a)",
};

function App() {
  const [mood, setMood] = useState("neutral");
  const [imageUrl, setImageUrl] = useState("");
  const [assistantResponse, setAssistantResponse] = useState("");

  const backgroundStyle = {
    background: moodBackgrounds[mood] || moodBackgrounds.neutral,
    transition: "background 1s ease",
  };

  return (
    <div className="app-wrapper" style={backgroundStyle}>
      <div className="app-container">
        <Header />
        <JournalEntry
          onSubmit={({ mood, imageUrl, assistantText }) => {
            setMood(mood);
            setImageUrl(imageUrl);
            setAssistantResponse(assistantText);
          }}
        />
        <MoodVisualizer imageUrl={imageUrl} />
        <AssistantPrompt text={assistantResponse} />
        <footer className="footer">
          💜 Neural Journal — Built with React + Emotion AI + OpenAI
        </footer>
      </div>
    </div>
  );
}

export default App;
