import React from "react";
import { Card } from "@material-ui/core";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Graph1({ profit, loss }) {
  const invested_graph = profit;
  const componded_graph = loss;
  var period = componded_graph.length;
  const data = [{}];

  if (period) {
    for (var year = 1; year <= period; year++) {
      var obj = {
        name: (2021 + year).toString(),
        invested: invested_graph[year],
        componded: componded_graph[year],
        amt: year,
      };
      data.push(obj);
    }
  } else {
    period = invested_graph.length;
    for (year = 1; year <= period; year++) {
      obj = {
        name: (2021 + year).toString(),
        invested: invested_graph[year],
        componded: componded_graph[year],
        amt: year,
      };
      data.push(obj);
    }
  }

  return (
    <Card class="graph">
      <div>
        <LineChart
          width={730}
          height={450}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="invested" stroke="#08bd14" />
          <Line type="monotone" dataKey="componded" stroke="#f0132d" />
        </LineChart>
      </div>
    </Card>
  );
}

export default Graph1;
