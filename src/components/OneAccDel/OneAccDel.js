import React from "react";
import "./OneAccDel.scss";

const OneAccDel = ({ account }) => {
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
            console.log(e);
          }}
        >
          Delate
        </button>
      </td>
      <td>
        <button className="edit-btn">Edit</button>
      </td>
    </tr>
  );
};

export default OneAccDel;
