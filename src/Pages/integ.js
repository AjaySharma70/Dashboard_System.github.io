import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";


function Integ() {

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
                    <h1>Integrations</h1>

                </div>

                <section className="section profile">
                    <div className="row">
                        <div className="col-xl-6">

                            <div className="card" style={{ height: "350px" }}>
                                <div className="card-body pt-3">
                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/inter.png" alt="" className="rounded-circle" style={{ width: "380px", marginTop: "20px",marginLeft:"70px", position: "relative" }} />
                                        
                                    </div>
                                    <h5 className="card-title" style={{textAlign:"center"}}>No active integrations</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>


            <footer id="footer" className="footer">
            <div className="copyright">
                    &copy; Copyright <strong><span>BSE EBIX</span></strong>. All Rights Reserved
                </div>

            </footer>

        </Fragment>
    )
}


export default Integ;