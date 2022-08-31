import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function StudentList({ collegeId }) {
  const heading = ["Student Name"];
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const getStudentsInfo = async () => {
      students.length = 0;
      const clg = await axios.get(`/college/${collegeId}`);
      console.log("clgis", clg);
      clg.data[0].Students.map((student) => students.push(student.Name));
      //   delete students[0];
      setStudents(students);
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
              <td key={i}>{student}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </center>
  );
}

export default StudentList;
