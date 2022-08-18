import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NewAccount } from "../../App";
import "./Add.scss";

const Add = ({ sendNewAccount, account }) => {
  const [input, setInput] = useState({ id: account.length + 1 });
  const newAcc = useContext(NewAccount);
  const navigate = useNavigate();
  const focusInp = useRef();
  useEffect(() => {
    focusInp.current.focus();
  }, []);

  return (
    <form className="addAccounts">
      <h1>Add Account</h1>
      <div className="input">
        <br />
        <input
          ref={focusInp}
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
          type="phone"
          onChange={(e) => {
            setInput({ ...input, phone: e.target.value });
          }}
          placeholder="phone"
        />
        <br />
        <input
          type="email"
          onChange={(e) => {
            setInput({ ...input, email: e.target.value });
          }}
          placeholder="email"
        />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            {
              sendNewAccount(input);
            }
            navigate("/");
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Add;
