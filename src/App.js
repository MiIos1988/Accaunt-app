import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Accounts from "./components/Accounts/Accounts.js";
import Add from "./components/Add/Add.js";
import EditDel from "./components/EditDel/EditDel.js";
import Header from "./components/Header/Header.js";
export const NewAccount = React.createContext();

function App() {
  const [account, setAccount] = useState([
    {
      id: 1,
      name: "Milos",
      lastName: "Sudimac",
      phone: "0653737257",
      email: "vojvoda1988@gmail.com",
    },
    {
      id: 2,
      name: "Suza",
      lastName: "Sudimac",
      phone: "0633737257",
      email: "suza@gmail.com",
    },
  ]);
  const sendNewAccount = (input) => {
    setAccount([...account, input]);
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            // <NewAccount.Provider value={sendNewAccount()}>
            <Accounts accounts={account} />
            // </NewAccount.Provider>
          }
        />
        <Route
          path="/addaccount"
          element={<Add sendNewAccount={sendNewAccount} account={account}/>}
        />
        <Route path="/edit-delete" element={<EditDel />} />
      </Routes>
    </div>
  );
}

export default App;
