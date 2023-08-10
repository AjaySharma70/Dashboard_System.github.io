import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import RoleDataService from "../services/roles.services";


function Roles({ getRoleId }) {
    const [roles, setRoles] = useState([]);
    useEffect(() => {
        getRoles();
    }, []);

    const getRoles = async () => {
        const data = await RoleDataService.getAllRoles();
        console.log(data.docs);
        setRoles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const deleteHandler = async (id) => {
        await RoleDataService.deleteRole(id);
        getRoles();
    };
    const [searchTerm, setSearchTerm] = useState('');

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
                    <h1>All Roles</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item active">Roles</li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-15">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">

                                        <div className="filter">
                                        <Link to="/addroles"><button type="submit" class="btn btn-primary">Add Roles</button></Link>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">All Roles</h5>
                                            <div className="search-bar">
                                                <form className="search-form d-flex align-items-center">
                                                    <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} style={{ width: "250px", height: "30px" }} />
                                                </form>
                                            </div>
                                            <br />

                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Role Name</th>
                                                        <th scope="col">Description</th>
                                                        <th scope="col">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {roles.filter((doc) => {
                                                        if (searchTerm == "") {
                                                            return doc
                                                        } else if (doc.rolenames.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                            return doc
                                                        }
                                                    }).map((doc, index) => {
                                                        return (
                                                            <tr key={doc.id}>
                                                                <td>{index + 1}</td>
                                                                <td>{doc.rolenames}</td>
                                                                <td>{doc.description}</td>

                                                                <td>
                                                                <Link to="/addroles"><i className="fas fa-edit" style={{color:"#295fbc", fontSize:"23px",marginRight:"5px"}} onClick={(e) => getRoleId(doc.id)}></i></Link>
                                                                <i class="fas fa-trash-alt" style={{color:"red",fontSize:"23px", cursor:"pointer"}} onClick={(e) => deleteHandler(doc.id)}></i>
                                                                    {/*<Link to="/addroles"><button type="button" className="btn btn-success" style={{ fontSize: "12px" }} onClick={(e) => getRoleId(doc.id)}>Edit</button></Link>*/}
                                                                    {/*<button type="button" className="btn btn-danger" style={{ position: "absolute", marginLeft: "2px", fontSize: "12px" }} onClick={(e) => deleteHandler(doc.id)}>Delete</button>*/}
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>

                                        </div>

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


export default Roles;