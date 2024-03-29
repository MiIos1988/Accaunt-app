import React from "react";
import OneAccDel from "../OneAccDel/OneAccDel";

const EditDel = ({ accounts, deleteAccount }) => {
  const allAccount = accounts.map((account, index) => (
    <OneAccDel account={account} key={index} deleteAccount={deleteAccount}/>
  ));
  return (
    <div className="accounts">
      <h1>Accounts</h1>
      <table className="table">
        <thead>
          <tr className="tr">
            <th>Id</th>
            <th>Name</th>
            <th>LastName</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{allAccount}</tbody>
      </table>
    </div>
  );
};

export default EditDel;
