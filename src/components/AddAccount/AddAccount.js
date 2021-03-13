import React, { useState,useEffect,useRef } from 'react'
import { withRouter } from "react-router-dom";

function AddAccount(props){
    const [newAccount, setNewAccount] = useState({ id: "", name: "", lastname: "", email: "", phone: "" })
    const idInput=useRef()
    useEffect(()=>{
        idInput.current.focus()
    },[])
    const addNewAccount = () => {
        props.addNewAccountToState(newAccount)
        props.history.push("/")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Add Account</h2>
                    <div className="row form-group">
                        <label htmlFor="id" className="col-lg-1 col-form-label">ID</label>
                        <div className="col-10">
                            <input ref={idInput} onChange={event=>setNewAccount({...newAccount,id:event.target.value})} type="text" className="form-control" placeholder="ID" />
                        </div>
                    </div>
                    <div className="row form-group">
                        <label htmlFor="name" className="col-lg-1 col-form-label">Name</label>
                        <div className="col-10">
                            <input onChange={event=>setNewAccount({...newAccount,name:event.target.value})} type="text" className="form-control" placeholder="Name" />
                        </div>
                    </div>
                    <div className="row form-group">
                        <label htmlFor="lastname" className="col-form-label">Last Name</label>
                        <div className="col-10">
                            <input onChange={event=>setNewAccount({...newAccount,lastname:event.target.value})} type="text" className="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="row form-group">
                        <label htmlFor="email" className="col-lg-1 col-form-label">Email</label>
                        <div className="col-10">
                            <input onChange={event=>setNewAccount({...newAccount,email:event.target.value})} type="text" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row form-group">
                        <label htmlFor="phone" className="col-lg-1 col-form-label">Phone</label>
                        <div className="col-10">
                            <input onChange={event=>setNewAccount({...newAccount,phone:event.target.value})} type="text" className="form-control" placeholder="Phone" />
                        </div>
                    </div>
                    <button onClick={addNewAccount} className="mb-2 col-10 offset-1 btn-primary form-control">SAVE</button>
                </div>
            </div>
        </div>
    )

}

export default withRouter(AddAccount)