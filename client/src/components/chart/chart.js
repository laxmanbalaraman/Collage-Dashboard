import React, { useState } from "react";
import CourseChart from "../courseChart";
import StateChart from "../stateChart";
import Table from "../table/Table";
import "./chart.css";

function Chart() {
  const [param, setParam] = useState(null);

  return (
    <>
      <div className="chart">
        <CourseChart setParam={setParam} />
        <StateChart setParam={setParam} />
      </div>
      <div>
        <Table param={param} />
      </div>
    </>
  );
}

export default Chart;
