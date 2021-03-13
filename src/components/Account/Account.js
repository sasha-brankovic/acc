import React from 'react'
import { Link } from "react-router-dom";

const Account=({account,edit,deleteAccount})=>{
    const actionButtons=edit?(
    <>
        <td><Link to={"/edit/"+account.id} className="form-control btn btn-sm btn-warning">Edit</Link></td>
        <td><button onClick={()=>{deleteAccount(account.id)}} className="form-control btn btn-sm btn-danger">Delete</button></td>
    </>
    ):null
    return(
        <tr>
            <td>{account.id}</td>
            <td>{account.name}</td>
            <td>{account.lastname}</td>
            <td>{account.email}</td>
            <td>{account.phone}</td>
            {actionButtons}
        </tr>
    )
}

export default Account