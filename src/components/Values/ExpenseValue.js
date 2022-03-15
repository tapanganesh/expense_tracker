import React from "react";
import { useSelector, useState } from "react-redux";

function ExpenseValue() {
  let expenses = useSelector((state) => state.expense);
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
