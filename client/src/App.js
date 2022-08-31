import "./App.css";
import { useLocation } from "react-router";
import axios from "axios";
import SearchCollege from "./components/searchCollege";
import CourseChart from "./components/courseChart";
import StateChart from "./components/stateChart";
import Chart from "./components/chart/chart";

function App() {
  return (
    <div className="App">
      <Chart />
    </div>
  );
}

export default App;
