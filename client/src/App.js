import "./App.css";
import { useLocation } from "react-router";
import axios from "axios";
import SearchCollege from "./components/searchCollege";
import CourseChart from "./components/courseChart";
import StateChart from "./components/stateChart";
import Chart from "./components/chart/chart";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentList from "./components/studentList/studentList";

function App() {
  return (
    <div className="App">
      <Chart />
    </div>
  );
}

export default App;
