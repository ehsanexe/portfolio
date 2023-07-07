import { width } from "@mui/system";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Glass from "./components/Glass";

function App() {
  const getRandomInt = (min = 0, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  };

  const initializeBackgroundCards = () => {
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

    console.log({ arr });
    return (
      <div style={{ position: "absolute" }}>
        {arr.map((item) => (
          <Glass style={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      {initializeBackgroundCards()}
      <About />
      <Skills />
    </div>
  );
}

export default App;
