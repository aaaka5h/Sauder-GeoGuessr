import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import ImageContainer from "../components/imageContainer";
import GuessMap from "../components/guessMap";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Score from "../components/score";
import locations from "../data/locations.json";

export default function Home() {
  const router = useRouter();
  const { newScore, newRound } = router.query;
  const [guess, setGuess] = useState(null); // track user's guess
  const [numRounds, setNumRounds] = useState(0); // track number of rounds played
  const [score, setScore] = useState(0); // track user's score

  const location = locations[numRounds % locations.length];

  useEffect(() => {
    if (newScore) {
      setScore(parseInt(newScore));
    }
    if (newRound) {
      setNumRounds(newRound);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Score currScore={score} round={numRounds}></Score>
      <Head>
        <title>Sauder GeoGuessr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Sauder GeoGuessr</h1>

        <p className={styles.description} style={{fontWeight:"bold", margin:"0"}}>Round {numRounds}</p>
        <p className={styles.description}>
          Where in the building is this photo taken?
        </p>

        <ImageContainer location={location} alt="dog" />

        <GuessMap setGuess={setGuess} />
        {guess && <Link
          style={{ color: "white", textDecoration: "none" }}
          href={{
            pathname: "/result",
            query: {
              xGuess: guess.x,
              yGuess: guess.y,
              floorGuess: guess.floor,
              xReal: location.x,
              yReal: location.y,
              floorReal: location.floor,
              currScore: score,
              imgPath: location.imgPath,
              numRounds: numRounds,
            },
          }}
        >
          <button className={styles.submitButton}>
            <p>Submit</p>
          </button>
        </Link>}
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
