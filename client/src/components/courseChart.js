import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

function CourseChart({ setParam }) {
  const [course, setCourse] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    const getCourse = async () => {
      const res = await axios.get("/college/count/course");
      console.log(res);
      console.log(res.data.length);
      for (let i = 0; i < res.data.length; i++) {
        course.push(res.data[i]._id);
        count.push(res.data[i].Total);
      }
      console.log(course, count);
      setCourse(course);
      setCount(count);
    };
    getCourse();
  }, []);

  return (
    <div>
      <Chart
        type="donut"
        width={480}
        height={480}
        series={count}
        options={{
          labels: course,
          title: {
            text: "Course Distribution",
            align: "center",
          },
          legend: {
            position: "left",
          },
          chart: {
            events: {
              dataPointSelection: (event, chartContext, config) => {
                setParam({
                  course: config.w.config.labels[config.dataPointIndex],
                });
                console.log(config.w.config.labels[config.dataPointIndex]);
              },
            },
          },
        }}
      />
    </div>
  );
}

export default CourseChart;
