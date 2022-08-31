import React from "react";
import CourseChart from "../courseChart";
import StateChart from "../stateChart";
import "./chart.css";

function Chart() {
  return (
    <div className="chart">
      <CourseChart />
      <StateChart />
    </div>
  );
}

export default Chart;
