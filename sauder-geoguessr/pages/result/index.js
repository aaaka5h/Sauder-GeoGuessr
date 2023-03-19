// page that shows the floorplan of the guess location, and the user's guess, and the distance between the two
import Link from "next/link";
import Score from "../../components/score";
import { useRouter } from "next/router";

export default function Result() {
  const router = useRouter();
  const { xGuess, yGuess, floorGuess, xReal, yReal, floorReal, currScore } =
    router.query;

  const computeScore = (
    xGuess,
    yGuess,
    floorGuess,
    xReal,
    yReal,
    floorReal
  ) => {
    const dist = Math.sqrt((xGuess - xReal) ** 2 + (yGuess - yReal) ** 2);
    const score = 100 - Math.min(dist, 100) + 30 * (floorGuess == floorReal);
    return score;
  };

  const data = {
    newScore:
      computeScore(xGuess, yGuess, floorGuess, xReal, yReal, floorReal) +
      currScore,
  };
  return (
    <div>
      <h1>Result</h1>
      {
        // <ResultContainer />
      }
      <Score
        currScore={computeScore(
          xGuess,
          yGuess,
          floorGuess,
          xReal,
          yReal,
          floorReal
        )}
      />
      <button>
        <Link href={{ pathname: "/", query: data }}>
          <p>Play Again</p>
        </Link>
      </button>
    </div>
  );
}
