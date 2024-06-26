import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({rows,deleteRow ,editRow}) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>EmployeeId</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address1</th>
            <th>Address2</th>
            <th>city</th>
            <th>ContactNumber</th>
            <th>EmailAddress</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {rows.map((row, idx) => {
          return (
            <tr key={idx}>
              <td>{row.employeeId}</td>
              <td>{row.firstname}</td>
              <td>{row.lastname}</td>
              <td>{row.address1}</td>
              <td>{row.address2}</td>
              <td>{row.city}</td>
              <td>{row.contactNo}</td>
              <td>{row.email}</td>
              <td>
                <span>{row.designation}</span>
              </td>
              <td>
                <span className="actions">
                  <BsFillTrashFill className="delete-btn" onClick={()=>deleteRow(idx)} />
                  <BsFillPencilFill onClick={()=> editRow(idx)} />
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
          
         
          
      
        
      </table>
    </div>
  );
};
