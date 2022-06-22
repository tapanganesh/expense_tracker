import React from 'react'
import { useSelector } from "react-redux";
import {useEffect,useState} from 'react';
import axios from 'axios';

function ExpenseTable() {
      let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
        (state) => state.user
      );
      let [expenses,setExp]=useState([]);
      let url = `http://localhost:4000/user/get-userExpenses/${userObj.username}`;
      // console.log(url);
      useEffect(()=>{
       axios
         .get(url)
         .then((response) => {
          // console.log("res-",response.data.payload);
           setExp(response.data.payload);
          //  console.log(typeof(expenses));
          //  console.log(expenses.length);

         })
         .catch((error) => {
           console.log("error-", error);
         });
      
      },[expenses])
   
  return (
    <div>
      {expenses.length != 0 && (
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
            {expenses.map((obj, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td className=" ">{obj.title}</td>
                <td className="text-danger">${obj.amount}</td>
                <td className=" ">{obj.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExpenseTable