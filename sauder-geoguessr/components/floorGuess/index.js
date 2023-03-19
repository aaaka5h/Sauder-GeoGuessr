import { useState, useEffect } from "react";
import Image from "next/image";

const FloorGuess = ({ floor, setGuess }) => {
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    setMarker(null);
  }, [floor]);

  const getFloorPath = (floor) => {
    return `/../public/images/Level_${floor}.png`;
  };

  const handleClick = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    setMarker({ x, y });
    setGuess({x, y, floor})
  };

  return (
    <div style={{ position: "relative", height: "550px" }}>
      <Image
        src={getFloorPath(floor)}
        alt="Floorplan"
        onClick={handleClick}
        width={720}
        height={450}
        style={{ maxWidth: "100%" }}
      />
      {marker && (
        <div
          style={{
            position: "absolute",
            left: marker.x - 10,
            top: marker.y - 32,
          }}
        >
          <Image src="/images/marker.png" alt="Marker" width={20} height={30} />
        </div>
      )}
    </div>
  );
};

export default FloorGuess;
