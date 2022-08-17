import React from "react";
import OneAcc from "../OneAcc/OneAcc";
import "./Accounts.scss";

const Accounts = ({ accounts}) => {
  const allAccount = accounts.map((account, index) => (
    <OneAcc account={account} key={index} />
  ));
  return (
    <div className="accounts">
      <h1>Acounts</h1>
      <table className="table">
        <thead>
          <tr className="tr">
            <th>Id</th>
            <th>Name</th>
            <th>LastName</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{allAccount}</tbody>
      </table>
    </div>
  );
};

export default Accounts;
