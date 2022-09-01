import "./App.css";
import { useLocation } from "react-router";
import axios from "axios";
import CourseChart from "./components/courseChart";
import StateChart from "./components/stateChart";
import Chart from "./components/chart/chart";
import NavBar from "./components/Navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentList from "./components/studentList/studentList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDetail from "./components/studentDetails/studentDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Chart />} />
        <Route exact path="/college/:collegeId" element={<StudentList />} />
        <Route
          exact
          path="/college/:collegeId/student/:cid"
          element={<StudentDetail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
