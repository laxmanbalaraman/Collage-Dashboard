import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";

function StudentList() {
  const heading = ["Student Name"];
  const [students, setStudents] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const getStudentsInfo = async () => {
      students.length = 0;
      const tempStudents = [];
      const collegeId = location.pathname.split("/")[2];
      const clg = await axios.get(`/college/${collegeId}`);
      console.log("clgis", clg);
      clg.data[0].Students.map((student) => tempStudents.push(student.Name));
      setStudents([...tempStudents]);
    };

    getStudentsInfo();
    console.log("student is", students);
    setStudents(students);
  });

  return (
    <center>
      <Table
        striped
        bordered
        hover
        style={{ width: "50%", textAlign: "center" }}
      >
        <thead>
          <tr>
            {heading.map((head, i) => (
              <th key={i}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {console.log("coming from the inside", students)}
          {students.map((student, i) => (
            <tr key={i}>
              {console.log("coming from the inside", students)}
              <td key={i}>{student}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </center>
  );
}

export default StudentList;
