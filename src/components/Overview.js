import React from "react";
import BudgetStatus from "./BudgetStatus";
import BudgetStatus2 from "./BudgetStatus2";
import Welcome from "./Welcome"
import ExpenseForm from './ExpenseForm'
import IncomeForm from "./IncomeForm"
function Overview() {
  return (
    <div className="bg-light">
      <div className="mt-3">
        <Welcome/>
      </div>
      <div className="container mt-5">
        <div className="row row-cols-auto row-cols-md-2">
          <div className="col ">
            <div className="container">
              <BudgetStatus />
            </div>
          </div>
          <div className="col ">
            <div className="container">
              <BudgetStatus2/>
            </div>
          </div>
        </div>
        <div className="row row-cols-auto row-cols-md-2">
          <div className="col">
            {/* <ExpenseForm/> */}
          </div>
          <div className="col">
            <IncomeForm/>
          </div>
        </div>
        {/* show expenses list here */}
      </div>
    </div>
  );
}

export default Overview;
