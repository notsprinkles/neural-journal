import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const moodColors = {
  happy: "#FFD700",
  sad: "#1E90FF",
  angry: "#FF6347",
  calm: "#98FB98",
  anxious: "#DA70D6",
  neutral: "#cccccc",
};

function MoodVisualizer({ moodData }) {
  if (!moodData || moodData.length === 0) return null;

  return (
    <div className="mood-chart-container">
      <h2>Emotional Journey</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={moodData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#da26da"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MoodVisualizer;
