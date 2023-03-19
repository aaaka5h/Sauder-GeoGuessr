// page that shows the floorplan of the guess location, and the user's guess, and the distance between the two
import Link from "next/link";
import Score from "../../components/score";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ResultContainer from "../../components/resultContainer";
import styles from "./result.module.css";

export default function Result() {
  const router = useRouter();
  const { xGuess, yGuess, floorGuess, xReal, yReal, floorReal, currScore, numRounds } =
    router.query;
  const guess = { x: xGuess, y: yGuess, floor: floorGuess };
  const answer = { x: xReal, y: yReal, floor: floorReal };
  const [score, setScore] = useState(null);
  const [data, setData] = useState(null);
  console.log("x " + xGuess + " y " + yGuess)
  const [newRound, setNewRound] = useState(null);

  useEffect(() => {
    const parsedXGuess = parseInt(xGuess);
    const parsedYGuess = parseInt(yGuess);
    const parsedFloorGuess = parseInt(floorGuess);
    const parsedXReal = parseInt(xReal);
    const parsedYReal = parseInt(yReal);
    const parsedFloorReal = parseInt(floorReal);
    const parsedCurrScore = parseInt(currScore);
    const parsedNumRounds = parseInt(numRounds);
    const score = computeScore(
      parsedXGuess,
      parsedYGuess,
      parsedFloorGuess,
      parsedXReal,
      parsedYReal,
      parsedFloorReal
    );

    console.log("score" + score);
    setScore(score);
    setData(score + parsedCurrScore);
    setNewRound(parsedNumRounds + 1);
  }, [xGuess, yGuess, floorGuess, xReal, yReal, floorReal, currScore, numRounds]);

  const computeScore = (
    xGuess,
    yGuess,
    floorGuess,
    xReal,
    yReal,
    floorReal
  ) => {
    const dist = Math.sqrt((xGuess - xReal) ** 2 + (yGuess - yReal) ** 2);
    let roundScore = 0;
    if (dist < 50) {
      roundScore += Math.floor(Math.random() * 50) + 950;
    } else if (dist < 10) {
      roundScore += Math.floor(Math.random() * 50) + 650;
    } else if (dist < 250) {
      roundScore += Math.floor(Math.random() * 50) + 450;
    } else if (dist < 400) {
      roundScore += Math.floor(Math.random() * 50) + 250;
    } else if (dist < 750) {
      roundScore += Math.floor(Math.random() * 50) + 50;
    }

    return Math.round(
      Math.max(roundScore - 250 * (floorGuess != floorReal ? 1 : 0), 0)
    );
  };

  return (
    <div className={styles.container}>
      <h1>Result</h1>
      {
        <ResultContainer
          className={styles.container}
          guess={guess}
          answer={answer}
        />
      }
      <Score currScore={score} />
      <Link style={{textDecoration: "none"}} href={{ pathname: "/", query: { newScore: data, newRound } }}>
        <button className={styles.submitButton}>
          <p>Play Again</p>
        </button>
      </Link>
    </div>
  );
}
