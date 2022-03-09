import React from "react";
import ExpenseForm from "./ExpenseForm";
import BudgetStatus2 from "../components/BudgetStatus2";
import BudgetStatus from "../components/BudgetStatus";
import ExpenseTable from './ExpenseTable'

function Expenses() {
  return (
    <div>
      expenses
      <div className="container">
        <div className="row row-cols-auto row-cols-md-2 ">
          <div className="col">
            <ExpenseTable />
            
          </div>
          <div className="col ">
            <div className="row row-cols-auto row-cols-md-2">
              <div className="col">
                <ExpenseForm />
                <BudgetStatus2 />
                <BudgetStatus />
              </div>
            </div>
          </div>
          {/* tip for good budget card */}
        </div>
      </div>
    </div>
  );
}

export default Expenses;
