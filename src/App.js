import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import { Container, ThemeProvider, createTheme } from "@mui/system";

function App() {
  return (
    <div className="container">
      <About />
    </div>
  );
}

export default App;
