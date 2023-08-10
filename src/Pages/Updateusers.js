import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Header from "./Header";



function Updateusers() {

  
    return (
        <Fragment>
          
            <header id="header" className="header fixed-top d-flex align-items-center">
            <Header />
            </header>

            <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
             <li className="nav-item">
                    <Link className="nav-link " to="/settings">
                        <i className="bi bi-grid"></i>
                        <span>Organisation Profile</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-person"></i><span>User & Roles</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to="/users">
                                <i className="bi bi-circle"></i><span>Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/roles">
                                <i className="bi bi-circle"></i><span>Roles</span>
                            </Link>
                        </li>
                    </ul>
                </li>


                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#">
                        <i className="bi bi-journal-text"></i><span>Integrations</span>
                    </Link>
                </li>

            </ul>

                
            </aside>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Add Users</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>

                            <li className="breadcrumb-item active">Add Users</li>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">

                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Form</h5>
                                    {/*
                                    <form className="row g-3" onSubmit={handleSubmitUpdate}>
                                        
                                        <div className="col-12">
                                            <label className="form-label">Image</label>
                                            <input type="file" className="form-control" id="file" />
                                        </div>
                                        


                                        <div className="col-12">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={ename} autoFocus />
                                        </div>


                                        <div className="col-12">
                                            <label className="form-label">Email ID</label>
                                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={eemail}/>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Phone Number</label>
                                            <input type="number" className="form-control" id="mobile" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder={emobile}/>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Role Name</label>
                                            <input className="form-control" id="rolename" name="rolename" value={rolename} onChange={(e) => setRolename(e.target.value)} placeholder={erolename}/>
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Status</label>
                                            <select className="form-select" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} placeholder={estate}>
                                                <option selected>select menu</option>
                                                <option value="Active">Active</option>
                                                <option value="Deactive">Deactive</option>

                                            </select>
                                        </div>
                                        


                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Update Users</button>

                                        </div>
                                    </form>*/}


                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        
          
            

            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span>Ajay Sharma</span></strong>. All Rights Reserved
                </div>

            </footer>

        </Fragment>
    )
}


export default Updateusers;