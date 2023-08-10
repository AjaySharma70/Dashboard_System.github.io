import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import Header from "./Header";
//import UserDataService from "../services/users.services";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import ModalComp from "../components/ModalComp";


function Users({ id }/*{ getUserId }*/) {

    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() })
            });
            setUsers(list);
            setLoading(false);
        },
            (error) => {
                console.log(error);
            }
        );
        return () => {
            unsub();
        };

    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure to delete that user ?")) {
            try {
                setOpen(false);
                await deleteDoc(doc(db, "users", id));
                setUsers(users.filter((user) => user.id !== id));
            } catch (err) {
                console.log(err);
            }
        }
    };

    const handleModal = (doc) => {
        setOpen(true);
        setUser(doc);
    };


    /*
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
        await userDoc(doc(db, "users", id));
        return deleteDoc(userDoc);
    };
    */




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
                    <h1>All Users</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item active">Users</li>
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
                                            <Link to="/addusers"><button type="submit" class="btn btn-primary">Add Users</button></Link>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">All Users</h5>
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
                                                        <th scope="col">Image</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email ID</th>
                                                        <th scope="col">Phone Number</th>
                                                        <th scope="col">Role Name</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.filter((doc) => {
                                                        if (searchTerm == "") {
                                                            return doc
                                                        } else if (doc.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                            return doc
                                                        }
                                                    }).map((doc, index) => {
                                                        return (
                                                            <tr key={doc.id}>
                                                                <td>{index + 1}</td>
                                                                <td><img src={doc.img} alt="" class="rounded-circle" style={{ width: "40px", height: "40px" }}></img></td>
                                                                <td>{doc.name}</td>
                                                                <td><a href="#">{doc.email}</a></td>
                                                                <td>{doc.mobile}</td>
                                                                <td>{doc.rolename}</td>
                                                                <td><span className="badge bg-success">{doc.state}</span></td>
                                                                <td>
                                                                <i className="fas fa-edit" style={{color:"#295fbc", fontSize:"23px",marginRight:"5px", cursor:"pointer"}} onClick={() => navigate(`/updateusers/${doc.id}`)}></i>
                                                                <i class="fa-solid fa-eye" style={{color:"#16b5d4", fontSize:"23px", cursor:"pointer"}} onClick={() => handleModal(doc)}></i>
                                                                    {/*<button type="button" className="btn btn-success" style={{ fontSize: "12px" }} onClick={() => navigate(`/updateusers/${doc.id}`)}>Edit</button>*/}
                                                                    {/*<button type="button" className="btn btn-info" style={{ position: "absolute", marginLeft: "2px", fontSize: "12px" }} onClick={() => handleModal(doc)}>View</button>*/}
                                                                    {open && (
                                                                        <ModalComp
                                                                            open={open}
                                                                            setOpen={setOpen}
                                                                            handleDelete={handleDelete}
                                                                            {...user}
                                                                        />
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                    {/*
                                                    {users.filter((doc) => {
                                                        if (searchTerm == "") {
                                                            return doc
                                                        } else if (doc.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                            return doc
                                                        }
                                                    }).map((doc, index) => {
                                                        return (
                                                            <tr key={doc.id}>
                                                                <td>{index + 1}</td>
                                                                <td>{doc.name}</td>
                                                                <td><a href="#">{doc.email}</a></td>
                                                                <td>{doc.mobile}</td>
                                                                <td>{doc.rolename}</td>
                                                                <td><span className="badge bg-success">{doc.state}</span></td>
                                                                <td>
                                                                    <Link to="/addusers"><button type="button" className="btn btn-success" style={{ fontSize: "12px" }} onClick={(e) => getUserId(doc.id)} >Edit</button></Link>
                                                                    <button type="button" className="btn btn-danger" style={{ position: "absolute", marginLeft: "2px", fontSize: "12px" }} onClick={(e) => deleteHandler(doc.id)}>Delete</button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}

                                                */}
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


export default Users;