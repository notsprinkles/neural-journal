import React, { useEffect, useState } from "react";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const MoodImage = ({ mood }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const prompt = `An abstract art piece that visually represents the emotion: ${mood}. Cinematic, soft lighting, emotionally evocative.`;

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const response = await openai.images.generate({
          model: "dall-e-3",
          prompt,
          n: 1,
          size: "1024x1024",
        });
        setImageUrl(response.data[0].url);
      } catch (err) {
        console.error("Image generation failed:", err);
      } finally {
        setLoading(false);
      }
    };

    if (mood) {
      fetchImage();
    }
  }, [mood]);

  if (!mood) return null;

  return (
    <div className="mood-image">
      <h3>🎨 Mood Visualizer</h3>
      {loading ? (
        <p>Generating art for your mood: <strong>{mood}</strong>...</p>
      ) : imageUrl ? (
        <img src={imageUrl} alt={`Mood: ${mood}`} />
      ) : (
        <p>Couldn't generate image.</p>
      )}
    </div>
  );
};

export default MoodImage;
