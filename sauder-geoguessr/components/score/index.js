import { useEffect } from "react";

const Score = ({ currScore, round }) => {
  const scoreStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1rem",
  };

  const barStyle = {
    maxWidth: "25vw",
    width: `${(currScore / 100) * 25}vw`,
    height: "0.5rem",
    backgroundColor: "green",
    borderRadius: "0.25rem",
    transition: "width 0.5s ease-in-out",
  };

  return (
    <div style={scoreStyle}>
      {round ? <h2>Score: {currScore} / {round * 1000}</h2> : <h2>Score: {currScore}</h2>}
      
      <div style={barStyle}></div>
    </div>
  );
};

export default Score;
