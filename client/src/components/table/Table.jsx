import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

function TableList({ param }) {
  const [col, setCol] = useState([]);
  const heading = [
    "Id",
    "Name",
    "Year_founded",
    "City",
    "State",
    "Country",
    "No_of_students",
    "Courses",
  ];

  useEffect(() => {
    const showList = async () => {
      col.length = 0;
      const key = Object.keys(param)[0];
      const value = param[key];
      console.log(`/college?${key}=${value}`);
      const college = await axios.get(`/college?${key}=${value}`);
      college.data.map((clg) => {
        delete clg.Students;
        delete clg._id;
        col.push(Object.values(clg));
      });
      setCol(col);
    };

    if (param) {
      console.log(param);
      showList();
      console.log("col is", col);
    }
  }, [param]);
  return (
    <div>
      {param ? (
        <center>
          <Table striped bordered hover style={{ width: "80%" }}>
            <thead>
              <tr>
                {heading.map((head, i) => (
                  <th key={i}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {col.map((college) => (
                <tr>
                  {college.map((cell) => (
                    <td>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </center>
      ) : (
        <center>
          <Alert
            key="info"
            style={{ margin: "2rem", width: "40%" }}
            variant="info"
          >
            Click on the sector to view the list of Colleges
          </Alert>
        </center>
      )}
    </div>
  );
}

export default TableList;
