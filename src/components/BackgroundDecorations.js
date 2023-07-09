import React from "react";
import Glass from "./Glass";

export default function BackgroundDecorations() {
  const getRandomInt = (min = 0, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  };

  const getDecorationItems = () => {
    const noOfBoxes = 15;

    const arr = [];
    for (let i = 0; i < noOfBoxes; i++) {
      const size = getRandomInt(10, 100);
      arr.push({
        top: getRandomInt(10, 900),
        left: getRandomInt(10, 900),
        transform: `rotate(${getRandomInt(1, 360)}deg)`,
        width: size,
        height: size,
        borderRadius: getRandomInt(0, 100),
        // height: getRandomInt(10, 100),
        position: "absolute",
      });
    }
    return arr;
  };
  return (
    <div style={{ position: "absolute" }}>
      {getDecorationItems().map((item) => (
        <Glass style={item} />
      ))}
    </div>
  );
}
