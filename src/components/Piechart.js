import React from "react";
import { MDBContainer } from "mdbreact";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import {useState,useEffect} from 'react'
import { useSelector} from "react-redux";
import axios  from 'axios'
Chart.register(ArcElement);
// let expenses = useSelector((state) => state.expense);

function PieChart() {
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  let [expenses, setExp] = useState([]);
  let url = `http://localhost:4000/user/get-userExpenses/${userObj.username}`;
   useEffect(() => {
     axios
       .get(url)
       .then((response) => {
         // console.log("res-",response.data.payload);
         setExp(response.data.payload);
         //  console.log(typeof(expenses));
         //  console.log(expenses.length);
       })
       .catch((error) => {
         console.log("error-", error);
       });
   }, [expenses]);
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
          label: "Expenses",
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
