import { useState } from "react";
import FloorGuess from "../floorGuess";

function GuessMap({ setGuess }) {
  const [floor, setFloor] = useState(null);

  return (
    <div>
      <div>
        <button onClick={() => setFloor(0)}>Floor B</button>
        <button onClick={() => setFloor(1)}>Floor 1</button>
        <button onClick={() => setFloor(2)}>Floor 2</button>
        <button onClick={() => setFloor(3)}>Floor 3</button>
        <button onClick={() => setFloor(4)}>Floor 4</button>
        <button onClick={() => setFloor(9)}>Floor 9</button>{" "}
        {/* floor 9 is treated as floor 5*/}
      </div>

      {floor != null ? (
        <FloorGuess
          setGuess={setGuess}
          floor={floor}
        />
      ) : null}
    </div>
  );
}

export default GuessMap;
