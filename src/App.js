import React, { useState } from 'react'
import Header from "./components/Header/Header"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accounts from "./components/Accounts/Accounts";
import AddAccount from "./components/AddAccount/AddAccount";
import Edit from "./components/Edit/Edit"
import EditAccount from "./components/EditAccount/EditAccount"

function App(){

  const [accounts,setAccounts]=useState([
    {id: "1",name: "Jovan",lastname: "Markovic",email: "jovan@email.com",phone: "0112334223"},
    {id: "2",name: "Pera",lastname: "Majic",email: "pera@email.com",phone: "0112461297"}
  ])

  const addNewAccountToState = (addNewAccount) => {
    setAccounts([...accounts, addNewAccount])
  }
  const deleteAccount = (id)=>{
    const newCopyAccounts = accounts.filter(account=>account.id !== id)
    setAccounts(newCopyAccounts)
    }
  const editSaveAccount = (accountForEdit)=>{
    const accountPosition = accounts.map(account=>account.id).indexOf(accountForEdit.id)
    accounts[accountPosition] = accountForEdit
    setAccounts(accounts)
  }
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <Accounts accounts={accounts} />
        </Route>
        <Route path="/add">
          <AddAccount addNewAccountToState={addNewAccountToState} />
        </Route>
        <Switch>
          <Route path="/edit/:id">
            <EditAccount accounts={accounts} editSaveAccount={editSaveAccount} />
          </Route>
          <Route path="/edit">
            <Edit accounts={accounts} deleteAccount={deleteAccount} />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }

export default App