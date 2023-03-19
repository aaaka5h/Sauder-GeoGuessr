// page that shows the floorplan of the guess location, and the user's guess, and the distance between the two
import Link from "next/link";
import Score from "../../components/score";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Result() {
  const router = useRouter();
  const { xGuess, yGuess, floorGuess, xReal, yReal, floorReal, currScore } =
    router.query;

  const [score, setScore] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const parsedXGuess = parseInt(xGuess);
    const parsedYGuess = parseInt(yGuess);
    const parsedFloorGuess = parseInt(floorGuess);
    const parsedXReal = parseInt(xReal);
    const parsedYReal = parseInt(yReal);
    const parsedFloorReal = parseInt(floorReal);
    const parsedCurrScore = parseInt(currScore);
  
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
  }, [xGuess, yGuess, floorGuess, xReal, yReal, floorReal, currScore]);
  
  const computeScore = (
    xGuess,
    yGuess,
    floorGuess,
    xReal,
    yReal,
    floorReal
  ) => {
    // calculate the score to be higher when the guess is closer to the real location, up to 100 points, and give them a penalty if the guess is on the wrong floor.
    const score = 100 - (Math.sqrt((xGuess - xReal) ** 2) / 720 + ((yGuess - yReal) ** 2) / 450) - 30 * (floorGuess != floorReal);

    // const dist = Math.sqrt((xGuess - xReal) ** 2 + (yGuess - yReal) ** 2);
    // const score = dist + 30 * (floorGuess == floorReal);
    console.log("scorecalculated" + score)
    return score;
  };

  return (
    <div>
      <h1>Result</h1>
      {
        // <ResultContainer />
      }
      <Score
        currScore={score}
      />
      <button>
        <Link href={{ pathname: "/", query: data }}>
          <p>Play Again</p>
        </Link>
      </button>
    </div>
  );
}
