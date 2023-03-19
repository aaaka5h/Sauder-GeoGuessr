import { useEffect } from "react";

const Score = ({ currScore }) => {
  const scoreStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1rem",
  };

  const barStyle = {
    width: `${currScore}%`,
    height: "0.5rem",
    backgroundColor: "green",
    borderRadius: "0.25rem",
    transition: "width 0.5s ease-in-out",
  };

  return (
    <div style={scoreStyle}>
      <h2>Score: {currScore}</h2>
      <div style={barStyle}></div>
    </div>
  );
};

export default Score;
