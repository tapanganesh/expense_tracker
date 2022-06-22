import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function ExpenseValue() {
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
  let expenseValue = 0;

  expenses.map((expenseObj, id) => {
    expenseValue = +expenseValue + +expenseObj.amount;
  });
  return (
    <div>
      <h5 className="text-danger">{expenseValue}</h5>
    </div>
  );
}

export default ExpenseValue;
