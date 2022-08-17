import React, { useContext, useState } from "react";
import { NewAccount } from "../../App";

const Add = () => {
  const [input, setInput] = useState({});
  const newAcc = useContext(NewAccount);

  return (
    <form className="addAccounts">
      <h1>Add Account</h1>
      <input
        type="number"
        onChange={(e) => {
          setInput({ ...input, id: e.target.value });
        }}
        placeholder="id"
      />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setInput({ ...input, name: e.target.value });
        }}
        placeholder="name"
      />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setInput({ ...input, lastName: e.target.value });
        }}
        placeholder="lastName"
      />
      <br />
      <input
        type="number"
        onChange={(e) => {
          setInput({ ...input, phone: e.target.value });
        }}
        placeholder="phone"
      />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setInput({ ...input, email: e.target.value });
        }}
        placeholder="email"
      />
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Save
      </button>
    </form>
  );
};

export default Add;
