import React from "react";
import { useSelector, useState } from "react-redux";

function Available() {
  let expenses = useSelector((state) => state.expense);
  let expenseValue = 0;

  expenses.map((expenseObj, id) => {
    expenseValue = +expenseValue + +expenseObj.amount;
  });
  let incomes = useSelector((state) => state.income);
  let incomeValue = 0;

  incomes.map((incomeObj, id) => {
    incomeValue = +incomeValue + +incomeObj.amount;
  });

  let avail =  +incomeValue - +expenseValue ;
  console.log(avail);
  return (
    <div>
      {avail <= 0 && <h5 className="text-danger">{avail}</h5>}
      {avail > 0 && <h5 className="text-success">{avail}</h5>}
    </div>
  );
}

export default Available;
