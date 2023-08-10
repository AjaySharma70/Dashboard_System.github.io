import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Header from "./Header";
import RoleDataService from "../services/roles.services";

function Addroles({ id, setRoleId }) {
    const [rolenames, setRolenames] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleRoleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (rolenames === "" || description === "" ) {
            setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        }
        const newRole = {
            rolenames,
            description,
        };
        console.log(newRole);

        try {
            if (id !== undefined && id !== "") {
                await RoleDataService.updateRole(id, newRole);
                setRoleId("");
                setMessage({ error: false, msg: "Updated successfully!" });
            } else {
                await RoleDataService.addRoles(newRole);
                setMessage({ error: false, msg: "New Roles added successfully!" });
            }

        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }

        setRolenames("");
        setDescription("");
    };


    const editHandler = async () => {
        setMessage("");
        try {
            const docSnap = await RoleDataService.getRole(id);
            console.log("the record is :", docSnap.data());
            setRolenames(docSnap.data().rolenames);
            setDescription(docSnap.data().description);
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }
    };

    useEffect(() => {
        console.log("The id here is : ", id);
        if (id !== undefined && id !== "") {
            editHandler();
        }
    }, [id]);

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
                    <h1>Add/Update Roles</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>

                            <li className="breadcrumb-item active">Add/Update Roles</li>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">

                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Form</h5>
                                    {message?.msg && (
                                        <Alert
                                            variant={message?.error ? "danger" : "success"}
                                            dismissible
                                            onClose={() => setMessage("")}
                                        >
                                            {message?.msg}
                                        </Alert>
                                    )}


                                    <form className="row g-3" onSubmit={handleRoleSubmit}>
                                  
                                        <div className="col-12">
                                            <label className="form-label">Role Name</label>
                                            <input type="text" className="form-control" id="rolenames" name="rolenames" value={rolenames} onChange={(e) => setRolenames(e.target.value)} autoFocus/>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" id="description" name="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                        </div>
                                    

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Add/Update Roles</button>

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
                    &copy; Copyright <strong><span>BSE EBIX</span></strong>. All Rights Reserved
                </div>

            </footer>

        </Fragment>
    )
}


export default Addroles;