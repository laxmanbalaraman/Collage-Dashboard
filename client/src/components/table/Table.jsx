import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

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
      const tempCol = [];
      const key = Object.keys(param)[0];
      const value = param[key];
      console.log(`/college?${key}=${value}`);
      const college = await axios.get(`/college?${key}=${value}`);
      college.data.map((clg) => {
        delete clg.Students;
        delete clg._id;
        tempCol.push(Object.values(clg));
      });
      setCol([...tempCol]);
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
          <Alert
            key="warning"
            style={{ margin: "2rem", width: "40%" }}
            variant="warning"
          >
            Click on the college to view students list
          </Alert>
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
                    <td>
                      <Link className="link" to={`/college/${college[0]}`}>
                        {cell}
                      </Link>
                    </td>
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
            Click on the sector to view the list of Colleges on that category
          </Alert>
        </center>
      )}
    </div>
  );
}

export default TableList;
