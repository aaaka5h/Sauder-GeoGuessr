import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const ResultContainer = ({ guess, answer }) => {
  const [guessMarker, setGuessMarker] = useState(null);
  const [answerMarker, setAnswerMarker] = useState(null);

  useEffect(() => {
    setGuessMarker(null);
    setAnswerMarker(null);
  });

  const text = () => {
    return guess.floor === answer.floor
      ? ""
      : "You guessed the wrong floor! Correct floor was: Floor " + answer.floor;
  };

  const getFloorPath = () => {
    console.log(`/static/Level_${answer.floor}.png`);
    return `/static/Level_${answer.floor}.png`;
  };

  console.log(answer, guess);

  return (
    <div style={{ position: "relative", height: "550px" }}>
      <Image
        src={getFloorPath(answer.floor)}
        alt="Floorplan"
        width={720}
        height={450}
        style={{ maxWidth: "100%", border: "4px solid black", padding: "10px" }}
      />

      <div
        style={{
          position: "absolute",
          left: guess.x - 10,
          top: guess.y - 32,
        }}
      >
        <Image src="/static/marker.png" alt="Marker" width={20} height={30} />
      </div>

      <div
        style={{
          position: "absolute",
          left: answer.x - 10,
          top: answer.y - 32,
        }}
      >
        <Image
          src="/static/answermarker.png"
          alt="Marker"
          width={20}
          height={30}
        />
      </div>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <p className={styles.description}>{text()}</p>
      </div>
    </div>
  );
};

export default ResultContainer;
