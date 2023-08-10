import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";


function Updateroles() {
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
                    <h1>Update Roles</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>

                            <li className="breadcrumb-item active">Update Roles</li>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">

                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Form</h5>


                                    <form className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label">Role Name</label>
                                            <input type="text" className="form-control" id="rolename" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" id="description" required rows="3"></textarea>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Update Roles</button>
                                        </div>
                                    </form>

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


export default Updateroles;