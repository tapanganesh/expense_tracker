import React from "react";
import ExpenseForm from "./ExpenseForm";
import BudgetStatus2 from "../components/BudgetStatus2";
import BudgetStatus from "../components/BudgetStatus";
import ExpenseTable from "./ExpenseTable";
import PieChart from "./Piechart"

function Expenses() {
  return (
    <div className="mt-3">
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
              </div>
              <div className="col">
                <h4 className="mb-2 text-decoration-underline">
                  Expense Overview
                </h4>
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
