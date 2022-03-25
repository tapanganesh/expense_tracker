import React from "react";
import BudgetStatus from "./BudgetStatus";
import BudgetStatus2 from "./BudgetStatus2";
import Welcome from "./Welcome";
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";
import IncomeTable from "./IncomeTable";
import Piechart from "./Piechart";
import { useSelector } from "react-redux";

function Overview() {
  let exp = useSelector((state) => state.expense);
  let inc = useSelector((state) => state.income);

  return (
    <div className="bg-light">
      <div className="mt-0">
        <Welcome />
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
              <BudgetStatus2 />
            </div>
          </div>
        </div>
        <div className="row row-cols-auto row-cols-md-2 mt-2">
          <div className="col">
            {exp.length != 0 && (
              <div className="container border-end border-3 border-bottom">
                <h3 className="mb-2 text-decoration-underline">
                  Expense Overview
                </h3>
                <Piechart />
              </div>
            )}
          </div>
          {inc.length != 0 && (
            <div className="col">
              <div className="container border-3 border-bottom">
                <h3 className="mb-2 text-decoration-underline">Income Table</h3>
                <IncomeTable />
              </div>
            </div>
          )}
        </div>
        {/* show expenses list here */}
      </div>
      
    </div>
  );
}

export default Overview;
