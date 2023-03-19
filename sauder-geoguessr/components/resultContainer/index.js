import { useState, useEffect } from "react";
import Image from "next/image";

const ResultContainer = ({ guess, answer }) => {
  const [guessMarker, setGuessMarker] = useState(null);
  const [answerMarker, setAnswerMarker] = useState(null) 

  useEffect(() => {
    setGuessMarker(null);
    setAnswerMarker(null);
  });

  const getFloorPath = () => {
    console.log(`/../public/images/Level_${answer.floor}.png`);
    return `/../public/images/Level_${answer.floor}.png`;
  };

  console.log(answer, guess)

  return (
    <div style={{ position: "relative", height: "550px" }}>
      <Image
        src={getFloorPath(answer.floor)}
        alt="Floorplan"
        width={720}
        height={450}
        style={{ maxWidth: "100%" }}
      />
      
    <div
        style={{
        position: "absolute",
        left: guess.x - 10,
        top: guess.y - 32,
        }}
    >
        <Image src="/images/marker.png" alt="Marker" width={20} height={30} />
    </div>

        
    <div
        style={{
        position: "absolute",
        left: answer.x - 10,
        top: answer.y - 32,
        }}
    >
        <Image src="/images/answermarker.png" alt="Marker" width={20} height={30} />
    </div>

    </div>
  );
};

export default ResultContainer;