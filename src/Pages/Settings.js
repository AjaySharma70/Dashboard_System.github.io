import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import UserDataService from "../services/users.services";

function Settings({ getUserId }) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const data = await UserDataService.getAllUsers();
        console.log(data.docs);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const deleteHandler = async (id) => {
        await UserDataService.deleteUser(id);
        getUsers();
    };
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
                        <Link className="nav-link collapsed" to="/integ">
                            <i className="bi bi-journal-text"></i><span>Integrations</span>
                        </Link>
                    </li>

                </ul>


            </aside>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Settings</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>

                            <li className="breadcrumb-item active">Profile</li>
                        </ol>
                    </nav>
                </div>

                <section className="section profile">
                    <div className="row">

                        <div className="col-xl-4">
                            {users.map((item) => {
                                return (
                                    <div className="card">
                                        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                            <img src={item.img} alt="Profile" className="rounded-circle" style={{width:"120px", height:"120px"}}/>
                                            <h2></h2>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>


                        <div className="col-xl-8">

                            <div className="card">
                                <div className="card-body pt-3">

                                    <ul className="nav nav-tabs nav-tabs-bordered">

                                        <li className="nav-item">
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Details</button>
                                        </li>

                                    </ul>
                                    <div className="tab-content pt-2">
                                        {users.map((item) => {
                                            return (
                                                <div className="tab-pane fade show active profile-overview" id="profile-overview">

                                                    <h5 className="card-title">Profile Details</h5>


                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 label ">Full Name</div>
                                                        <div className="col-lg-9 col-md-8">{item.name}</div>
                                                    </div><div className="row">
                                                        <div className="col-lg-3 col-md-4 label ">Dashboard Role</div>
                                                        <div className="col-lg-9 col-md-8">{item.rolename}</div>
                                                    </div><div className="row">
                                                        <div className="col-lg-3 col-md-4 label">Phone Number</div>
                                                        <div className="col-lg-9 col-md-8">{item.mobile}</div>
                                                    </div><div className="row">
                                                        <div className="col-lg-3 col-md-4 label">Email</div>
                                                        <div className="col-lg-9 col-md-8">{item.email}</div>
                                                    </div>


                                                </div>
                                            );
                                        })}
                                    </div>

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


export default Settings;