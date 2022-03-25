import React from 'react';
import Available from'./Values/Available'
function BudgetStatus() {
  return (
    <div>
      <div className="card mt-2 mb-2">
        <div className="card-body">
          <h5 className="card-title">Budget Status</h5>
          <hr />
          <p className="card-text">
            Your available balance is <Available />
            <div className="container w-75">
              <ul class="">
                <li className=" text-success">If green your doing great.</li>
                <li className=" text-danger">if red you have to improve.</li>
              </ul> 
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BudgetStatus;
