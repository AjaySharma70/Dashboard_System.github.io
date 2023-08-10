import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Alert } from "react-bootstrap";
import Menu from "./Menu";
//import ProfileDataService from "../services/profiles.services";

function Profile(/*{ getProfileId }*/) {
    /*
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        getProfiles();
    }, []);

    const getProfiles = async () => {
        const data = await ProfileDataService.getAllProfiles();
        console.log(data.docs);
        setProfiles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const deleteHandler = async (id) => {
        await ProfileDataService.deleteProfile(id);
        getProfiles();
    };
    */

    return (

        <Fragment>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <Header />
            </header>

            <aside id="sidebar" className="sidebar">
                <Menu />

            </aside>


            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Organisation Profile</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item active">Organisation Profile</li>
                        </ol>
                    </nav>
                </div>

                <section className="section profile">
                    <div className="row">
                        {/*
                        <div className="col-xl-4">

                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                    <h2>Kevin Anderson</h2>
                                   

                                </div>
                            </div>

                        </div>
                        */}


                        <div className="col-xl-8">


                            <div className="card">
                                {/*
                                <div className="filter">
                                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" style={{ marginLeft: "10px" }}></i></a>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">

                                        <li><Link className="dropdown-item" to="/addorgprofile">Add/Update Profile</Link></li>

                                    </ul>
                                </div>
                                */}


                                <div className="card-body pt-3">

                                    <ul className="nav nav-tabs nav-tabs-bordered">

                                        <li className="nav-item">
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Details</button>
                                        </li>


                                    </ul>
                                    <div className="tab-content pt-2">

                                        <div className="tab-pane fade show active profile-overview" id="profile-overview">

                                            {/*<h5 className="card-title">Profile Details</h5>*/}
                                            {/*
                                            {profiles.map((doc) => {
                                                return (
                                                    <>
                                                */}

                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 label ">Organisation Name</div>
                                                            <div className="col-lg-9 col-md-8">Bse Ebix Insurance Broking Private Limited</div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 label ">Organisation ID</div>
                                                            <div className="col-lg-9 col-md-8">OSHE- 1600413298672</div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 label">GST IN</div>
                                                            <div className="col-lg-9 col-md-8">09AAFCE347G1WS</div>
                                                        </div>


                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 label">Mobile Number</div>
                                                            <div className="col-lg-9 col-md-8">+91 9899024871</div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 label">Address</div>
                                                            <div className="col-lg-9 col-md-8">Gautam Buddha Nagar</div>
                                                        </div>
                                                        {/*
                                                    </>

                                                );
                                            })}

                                        */}

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


export default Profile;