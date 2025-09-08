// src/components/AssistantPrompt.jsx

import React from "react";

function AssistantPrompt({ assistantMessage }) {
  return (
    <div className="assistant-box">
      <h3>🧠 Mood Assistant Says:</h3>
      <p>{assistantMessage || "Take a moment to reflect. I’m here when you're ready."}</p>
    </div>
  );
}

export default AssistantPrompt;
