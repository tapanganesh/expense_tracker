import React from "react";
import { MDBContainer } from "mdbreact";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";
Chart.register(ArcElement);
// let expenses = useSelector((state) => state.expense);

function PieChart() {
  let expenses = useSelector((state) => state.expense);
  let name = [];
  let val = [];
  expenses.map((obj) => {
    name.push(obj.title);
    val.push(Number(obj.amount));
  });
 
  let state = {
    pie: {
      labels: name,
      datasets: [
        {
          label: "My First Dataset",
          data: [...val],
          backgroundColor: [
            "#00C49F",
            "#0088FE",
            "#FFBB28",
            "#FF8042",
            "#AF19FF",
            "#EC6B56",
            "#FFC154",
            "#47B39C",
          ],
          hoverOffset: 4,
        },
      ],
    },
  };
 
  return (
    <MDBContainer>
      <Pie data={state.pie} options={{ responsive: true }} />
    </MDBContainer>
  );
}
export default PieChart;
