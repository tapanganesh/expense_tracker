import React from "react";
import IncomeValue from "./Values/IncomeValue";
import ExpenseValue from "./Values/ExpenseValue";
import AvailableValue from "./Values/Available";

function BudgetStatus2() {
  return (
    <div>
      <div className="card mt-2 mb-2">
        <div className="card-body">
          <h5 className="card-title">Your Statistics</h5>
          <hr />
          <div className="row">
            <div className="col">
              <h5 className="text-success">Income:</h5>
            </div>
            <div className="col">
              <IncomeValue />
            </div>
          </div>
          <div className="row ">
            <div className="col">
              <h5 className="text-danger">Expenses:</h5>
            </div>
            <div className="col">
              <ExpenseValue />
            </div>
          </div>
          <div className="row ">
            <div className="col">
              <h5 className="">Available:</h5>
            </div>
            <div className="col">
              <AvailableValue />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetStatus2;
