import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";


function Updatemembers() {
  
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
                    <h1>Update Members</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>

                            <li className="breadcrumb-item active">Update Members</li>
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
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" name="name" id="name" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Phone Number</label>
                                            <input type="text" className="form-control" name="mobile" id="mobile" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Employee No</label>
                                            <input type="text" className="form-control" name="employeeno" id="employeeno" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Member ID</label>
                                            <input type="text" className="form-control" name="memberid" id="memberid" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Activated Date</label>
                                            <input type="date" className="form-control" name="activate" id="activate" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Membership Type</label>
                                            <input type="text" className="form-control" name="membership" id="membership" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Plan</label>
                                            <input type="text" className="form-control" name="plan" id="plan" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Monthly Cost</label>
                                            <input type="text" className="form-control" name="cost" id="cost" required />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Status</label>
                                            <select className="form-select">
                                                <option selected>select menu</option>
                                                <option value="1">Active</option>
                                                <option value="2">Deactive</option>

                                            </select>
                                        </div>


                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Update Members</button>
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


export default Updatemembers;