import React from "react";
import { useSelector, useState } from "react-redux";

function IncomeValue() {
  let incomes = useSelector((state) => state.income);
  let incomeValue = 0;

  incomes.map((incomeObj, id) => {
    incomeValue = +incomeValue + +incomeObj.amount;
  });

  return (
    <div>
      <h5 className="text-success">{incomeValue}</h5>
    </div>
  );
}

export default IncomeValue;
