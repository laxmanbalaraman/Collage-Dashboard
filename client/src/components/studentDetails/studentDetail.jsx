import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./studentDetail.css";

function StudentDetail() {
  const url = useLocation();
  const [studDetail, setStudDetail] = useState({});
  useEffect(() => {
    const getStudentDetails = async () => {
      console.log(
        `https://my-college-dashboard.herokuapp.com/api/${url.pathname}`
      );
      const details = await axios.get(
        `https://my-college-dashboard.herokuapp.com/api${url.pathname}`
      );
      console.log("details is", details.data, url);
      setStudDetail(details.data);
    };
    getStudentDetails();
    console.log("first", studDetail);
  }, []);
  return (
    <div className="student-container">
      <div className="details">
        <h1>Student Details</h1>
        <h2>
          Name: <span className="name">{studDetail.Name}</span>
        </h2>
        <p>
          Reg No: <strong>{studDetail.College_ID}</strong>
        </p>
        <p>Skills: {studDetail.Skills}</p>
        <p>Year of Batch: {studDetail.Year_of_batch}</p>
      </div>
    </div>
  );
}

export default StudentDetail;
