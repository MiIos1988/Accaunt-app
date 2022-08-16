import React from "react";
import { Route, Routes } from "react-router-dom";
import Accounts from "./components/Accounts/Accounts.js";
import Add from "./components/Add/Add.js";
import EditDel from "./components/EditDel/EditDel.js";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Accounts />} />
        <Route path="/addaccount" element={<Add />} />
        <Route path="/edit-delete" element={<EditDel />} />
      </Routes>
    </div>
  );
}

export default App;
