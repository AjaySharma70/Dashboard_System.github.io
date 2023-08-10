import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Menu() {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <Fragment>
            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <Link className="nav-link " to="/home">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/members">
                        <i className="bi bi-menu-button-wide"></i>
                        <span>Members</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/billings">
                        <i className="bi bi-journal-text"></i><span>Billings</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/apphub">
                        <i className="bi bi-app"></i><span>App Hub</span>
                    </Link>
                </li>
{/*
                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" to="">
                        <i className="bi bi-layout-text-window-reverse"></i><span>Personal</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to="">
                                <i className="bi bi-circle"></i><span>Personal Details</span>
                            </Link>
                            <Link to="">
                                <i className="bi bi-circle"></i><span>Family Info</span>
                            </Link>
                        </li>

                    </ul>
                </li>
    */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/profile">
                        <i className="bi bi-person"></i>
                        <span>Organisation Profile</span>
                    </Link>
                </li>

                {/*
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/register">
                        <i className="bi bi-card-list"></i>
                        <span>Register</span>
                    </Link>
                </li>
                */}

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/login">
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span onClick={handleLogout}>Logout</span>
                    </Link>
                </li>

            </ul>


        </Fragment>
    )
}


export default Menu;