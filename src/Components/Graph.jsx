import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../hooks/useData";

function Graph() {
  const {graphData} = useData()
  return (
 <div className="graph">
 <div className="graph-container">
  <ResponsiveContainer width="100%">
      <LineChart
        data={graphData}
        margin={{
          top: 25,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="amt"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
 </div>
   

 </div>
   
  );
}

export default Graph;
