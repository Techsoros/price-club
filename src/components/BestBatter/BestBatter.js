import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BestBatter = () => {
  const data = [
    {
      name: "Mushfiqur Rahim",
      test: 4000,
      t20: 2400,
      odi: 2400,
    },
    {
      name: "Tamim Iqbal",
      test: 3000,
      t20: 1398,
      odi: 2210,
    },
    {
      name: "Ashraful haque",
      test: 2000,
      t20: 9800,
      odi: 2290,
    },
    {
      name: "Anamul Haque",
      test: 2780,
      t20: 3908,
      odi: 2000,
    },
    {
      name: "Nurul Hossain",
      test: 1890,
      t20: 4800,
      odi: 2181,
    },
    {
      name: "Liton Dash",
      test: 2390,
      t20: 3800,
      odi: 2500,
    },
    {
      name: "Shoumyo Sarker",
      test: 3490,
      t20: 4300,
      odi: 2100,
    },
  ];
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-6xl bg-slate-300 p-7 rounded-lg m-9 te text-gray-800 ">
        Best Batsman in Bangladesh
      </h1>

      <div className="graph mx-auto">
        <BarChart
          width={1200}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="mx-auto"
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="t20" fill="#8884d8" />
          <Bar dataKey="odi" fill="#82ca9d" />
          <Bar dataKey="test" fill="cyan" />
        </BarChart>
      </div>
    </div>
  );
};

export default BestBatter;
