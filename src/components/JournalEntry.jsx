import React, { useState } from "react";
import { analyzeTone } from "../utils/openai";

function JournalEntry({ onSubmit }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const tone = await analyzeTone(text);
    setLoading(false);
    onSubmit(text, tone);
    setText("");
  };

  return (
    <form className="journal-form" onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind today?"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Analyzing..." : "Submit Entry"}
      </button>
    </form>
  );
}

export default JournalEntry;
