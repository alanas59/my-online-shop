import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "../../hooks/useChart";

const MyLineChart = () => {
  const [chart, setChart] = useChart();
  return (
    <div>
      <LineChart width={500} height={400} data={chart}>
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        <Line type="monotone" dataKey="investment" stroke="#8884dd" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="month" />
        <YAxis></YAxis>
      </LineChart>
    </div>
  );
};

export default MyLineChart;
