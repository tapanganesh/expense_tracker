import React from "react";
import { MDBContainer } from "mdbreact";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";

Chart.register(ArcElement);
class PieChart extends React.PureComponent {
  state = {
    pie: {
      labels: ['Red','Green','orange','blue','yellow'],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100,200,300],
          backgroundColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'],
          hoverOffset: 4,
        },
      ],
    },
  };
  render() {
    return (
      <MDBContainer>
        <Pie data={this.state.pie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}
export default PieChart;
