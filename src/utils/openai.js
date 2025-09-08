// client/src/utils/openai.js
export const analyzeTone = async (text) => {
  try {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!res.ok) throw new Error("API request failed");
    const data = await res.json();
    return data.mood;
  } catch (err) {
    console.error("analyzeTone error:", err.message);
    return "neutral";
  }
};
