import React, { useState } from 'react'
import { withRouter } from "react-router-dom"

const EditAccount=(props)=>{
    const [account,setAccount]=useState(props.accounts.filter(account=>account.id===props.match.params.id)[0])
    const editSaveAccount = () => {
        props.editSaveAccount(account)
        props.history.push("/")
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Edit Account</h2>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input value={account.name} onChange={event=>setAccount({...account,name:event.target.value})} type="text" name="name" className="form-control"/><br/>
                            <input onChange={event=>setAccount({...account,lastname:event.target.value})} type="text" name="lastname" className="form-control" value={account.lastname} /><br/>
                            <input onChange={event=>setAccount({...account,email:event.target.value})} type="text" name="email" className="form-control" value={account.email} /><br/>
                            <input onChange={event=>setAccount({...account,phone:event.target.value})} type="text" name="phone" className="form-control" value={account.phone} /><br/>
                            <button onClick={editSaveAccount} className="btn btn-warning form-control">EDIT</button><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(EditAccount)