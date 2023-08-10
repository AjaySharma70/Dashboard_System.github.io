import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { db } from "../firebase";
import { useUserAuth } from "../context/UserAuthContext";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import ModalMessage from "../components/ModalMessage";

function Header() {
    const { user } = useUserAuth();
    const { logOut } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };


    const [messages, setMessages] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({});
    const [loading, setLoading] = useState(false);
    //const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const unsub = onSnapshot(collection(db, "messages"), (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() })
            });
            setMessages(list);
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
        if (window.confirm("Are you sure to delete that message ?")) {
            try {
                setOpen(false);
                await deleteDoc(doc(db, "messages", id));
                setMessages(messages.filter((message) => message.id !== id));
            } catch (err) {
                console.log(err);
            }
        }
    };

    const handleModal = (doc) => {
        setOpen(true);
        setMessage(doc);
    };



    return (
        <Fragment>
            <div className="d-flex align-items-center justify-content-between">
                <a href="/home" className="logo d-flex align-items-center">
                    <img src="assets/img/BSEEBIX_logo.jpg" alt="" />

                </a>
                <i className="bi bi-list toggle-sidebar-btn"></i>
            </div>

            <div className="search-bar">
                <form className="search-form d-flex align-items-center">
                    <input type="text" placeholder="Search" />
                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                </form>
            </div>


            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    {/*
                    <li className="nav-item d-block d-lg-none">
                        <a className="nav-link nav-icon search-bar-toggle " href="#">
                            <i className="bi bi-search"></i>
                        </a>
                    </li>
        */}

                    <li className="nav-item dropdown">

                        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            <i className="bi bi-chat-left-text"></i>

                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                            <li className="dropdown-header" style={{ width: "300px" }}>
                                <Link to="/addmessage"><button type="button" class="btn btn-primary">Add Message</button></Link>

                            </li>
                            <form className="search-form d-flex align-items-center">
                                <input type="text" placeholder="Search" /*onChange={(e) => setSearchTerm(e.target.value)}*/ style={{ width: "250px", height: "30px", marginLeft: "25px" }} />
                            </form>

                            <br />
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            {messages.map((doc, index) => {
                                return (
                                    <>
                                        <li className="message-item">
                                            <a href="#">
                                                <img src={doc.img} alt="" className="rounded-circle" style={{width:"40px"}}/>
                                                <div>
                                                    <h4>{doc.name}</h4>
                                                    <i class="fa-solid fa-eye" id="msg" style={{color:"#16b5d4", fontSize:"23px"}} onClick={() => handleModal(doc)}></i>
                                                    {/*<button type="button" id="msg" class="btn btn-info" onClick={() => handleModal(doc)}>View</button>*/}
                                                    <p>{doc.message}</p>
                                                    {open && (
                                                        <ModalMessage
                                                            open={open}
                                                            setOpen={setOpen}
                                                            handleDelete={handleDelete}
                                                            {...message}
                                                        />
                                                    )}
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                    </>
                                );
                            })}
                        </ul>

                    </li>


                    <li className="nav-item dropdown pe-3">

                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />*/}
                            <span className="d-none d-md-block dropdown-toggle ps-2">{user && user.email}</span>
                        </a>


                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>{user && user.email}</h6>

                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <Link className="dropdown-item d-flex align-items-center" to="/profile">
                                    <i className="bi bi-person"></i>
                                    <span>My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <Link className="dropdown-item d-flex align-items-center" to="/settings">
                                    <i className="bi bi-gear"></i>
                                    <span>Settings</span>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>


                            <li>
                                <Link className="dropdown-item d-flex align-items-center" to="/login">
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span onClick={handleLogout}>Sign Out</span>
                                </Link>
                            </li>

                        </ul>
                    </li>

                </ul>
            </nav>

        </Fragment>
    )
}


export default Header;