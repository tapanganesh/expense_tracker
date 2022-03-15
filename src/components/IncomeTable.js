import React from "react";
import { useSelector } from "react-redux";

function IncomeTable() {
  let incomes = useSelector((state) => state.income);
  return (
    <div>
      {incomes.length != 0 && (
        <table className="table text-center table-arning table-light">
          <thead>
            <tr className="">
              <th>#</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {incomes.map((obj, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td className=" ">{obj.title}</td>
                <td className="text-success">${obj.amount}</td>
                <td className=" ">{obj.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default IncomeTable;
