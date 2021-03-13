import React from 'react'
import {Link,NavLink} from "react-router-dom";
import "./Header.css"

const Header=()=>{
   return(
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <Link to="/" className="navbar-brand">Accounts App</Link>
           <ul className="navbar-nav ml-auto">
               <NavLink to="/" exact activeClassName={"active-link"} className="nav-link">Accounts</NavLink>
               <NavLink to="/add" activeClassName={"active-link"} className="nav-link">Add Account</NavLink>
               <NavLink to="/edit" activeClassName={"active-link"} className="nav-link">Edit/Delete Account</NavLink>
           </ul>
       </nav>
   )
}

export default Header