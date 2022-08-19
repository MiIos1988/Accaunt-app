import React from "react";
import "./OneAccDel.scss";
import { Link } from "react-router-dom";

const OneAccDel = ({ account, deletAccount }) => {
  return (
    <tr>
      <td>{account.id}</td>
      <td>{account.name}</td>
      <td>{account.lastName}</td>
      <td>{account.phone}</td>
      <td>{account.email}</td>
      <td>
        <button
          className="del-btn"
          onClick={(e) => {
            deletAccount(account.id);
          }}
        >
          Delate
        </button>
      </td>
      <td>
        <Link to={"/edit/" + account.id} className="edit-btn">
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default OneAccDel;
