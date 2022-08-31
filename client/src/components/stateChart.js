import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

function StateChart() {
  const [state, setstate] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    const getstate = async () => {
      const res = await axios.get("/college/count/state");
      console.log(res);
      console.log(res.data.length);
      for (let i = 0; i < res.data.length; i++) {
        state.push(res.data[i]._id);
        count.push(res.data[i].Total);
      }
      console.log(state, count);
      setstate(state);
      setCount(count);
    };
    getstate();
  }, []);

  return (
    <div>
      <Chart
        type="donut"
        width={500}
        height={500}
        series={count}
        options={{
          labels: state,
          title: {
            text: "State-wise college Distribution",
            align: "center",
          },
        }}
      />
    </div>
  );
}

export default StateChart;
