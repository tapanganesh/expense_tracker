import React from 'react'
import PieChart from './Piechart'
import IncomeForm from './IncomeForm'
import IncomeTable from './IncomeTable'
import BudgetStatus2 from './BudgetStatus2'
function Income() {
  return (
    <div className="mt-3">
      <div className="container">
        <div className="row row-cols-auto row-cols-md-2 ">
          <div className="col">
            <IncomeTable />
          </div>
          <div className="col ">
            <div className="row row-cols-auto row-cols-md-2">
              <div className="col">
                <IncomeForm />
              </div>
              <div className="col">
                <BudgetStatus2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Income