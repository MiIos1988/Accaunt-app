import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Edit.scss";

const Edit = ({ accounts, editAccount }) => {
  // const [edit, setEdit] = useState({});
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const { id } = useParams();

  const navigate = useNavigate();

  const editAcc = accounts.filter((account) => {
    return account.id == id;
  });
  useEffect(() => {
    setInput(editAcc[0]);
  }, []);

  return (
    <form className="addAccounts">
      <h1>Edit Account</h1>
      <div className="input">
        <br />
        <input
          type="text"
          value={input.name}
          onChange={(e) => {
            setInput({ ...input, name: e.target.value });
          }}
          placeholder="name"
        />
        <br />
        <input
          type="text"
          value={input.lastName}
          onChange={(e) => {
            setInput({ ...input, lastName: e.target.value });
          }}
          placeholder="lastName"
        />
        <br />
        <input
          type="phone"
          value={input.phone}
          onChange={(e) => {
            setInput({ ...input, phone: e.target.value });
          }}
          placeholder="phone"
        />
        <br />
        <input
          type="email"
          value={input.email}
          onChange={(e) => {
            setInput({ ...input, email: e.target.value });
          }}
          placeholder="email"
        />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();

            editAccount(input);

            navigate("/");
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Edit;
