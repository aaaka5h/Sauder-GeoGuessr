import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import GuessMap from '../components/guessMap';

export default function Home() {
  const [guess, setGuess] = useState(null); // track user's guess
  const [location, setLocation] = useState(
    {
      x: 5,
      y: 10,
      floor: 1,
      name: "Birmingham",
      imgPath: "birmingham.jpg"
    }
  );
  const [numRounds, setNumRounds] = useState(0); // track number of rounds played
  const [score, setScore] = useState(0); // track user's score

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle user's guess here
  }

  const handleGuessSubmit = (markerPosition) => {
    setGuess(markerPosition);
    console.log(markerPosition)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sauder GeoGuessr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Sauder GeoGuessr
        </h1>

        <p className={styles.description}>
          Where in the building is this photo taken?
        </p>

        {/* <ImageContainer /> */}

        <GuessMap onGuessSubmit={handleGuessSubmit} />
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
  )
}
