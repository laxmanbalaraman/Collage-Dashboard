import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import "./studentList.css";
import axios from "axios";

function StudentList() {
  const heading = ["Student Name"];
  const [students, setStudents] = useState([]);
  const [collageName, setCollageName] = useState("");
  const location = useLocation();
  let collegeId;
  useEffect(() => {
    const getStudentsInfo = async () => {
      students.length = 0;
      const tempStudents = [];
      collegeId = location.pathname.split("/")[2];
      const clg = await axios.get(`/college/${collegeId}`);
      console.log("clgis", clg);
      clg.data[0].Students.map((student) => tempStudents.push(student.Name));
      setStudents([...tempStudents]);
      setCollageName(clg.data[0].Name);
    };

    getStudentsInfo();
    console.log("student is", students);
    setStudents(students);
  }, []);

  return (
    <center>
      <h1>College: {collageName}</h1>
      <Alert
        key="warning"
        style={{ margin: "2rem", width: "40%" }}
        variant="warning"
      >
        Click on the Student for further details
      </Alert>
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
          {students.map((student, i) => (
            <tr key={i}>
              <td key={i}>
                <Link
                  className="link"
                  to={`/college/${
                    location.pathname.split("/")[2]
                  }/student/${i}`}
                >
                  {student}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </center>
  );
}

export default StudentList;
