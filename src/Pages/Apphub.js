import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";



function Apphub() {
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
                    <h1>Integrations</h1>

                </div>
                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-15">
                            <div className="row">

                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card ">

                                        <div className="card-body">
                                            <h5 className="card-title">Google Workplace<br /><span style={{ color: "blue" }}>Business Sulte</span></h5>

                                            <div className="d-flex align-items-center">
                                                <img src="assets/img/google.jpg" alt="" className="rounded-circle" style={{ width: "60px", marginTop: "-80px", position: "relative" }} />
                                                <div className="ps-3">
                                                    <p>Google Workspace is a collection
                                                        of cloud computing,
                                                        and collaboration tools...</p>

                                                    <button type="button" id="but" class="btn btn-primary">Connect</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card revenue-card">

                                        <div className="card-body">
                                            <h5 className="card-title">Microsoft 365<br /><span style={{ color: "blue" }}>Software</span></h5>

                                            <div className="d-flex align-items-center">
                                                <img src="assets/img/microsoft.png" alt="" className="rounded-circle" style={{ width: "60px", marginTop: "-80px", position: "relative" }} />
                                                <div className="ps-3">
                                                    <p>Microsoft 365, is
                                                        a line of subscription services offered
                                                        by Microsoft which adds to and...</p>

                                                    <button type="button" id="but" class="btn btn-primary">Connect</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-12">

                                    <div className="card info-card customers-card" style={{height:"242px"}}>

                                        <div className="card-body">
                                            <h5 className="card-title">ZingHR<br /><span style={{ color: "blue" }}>HR Management Solution</span></h5>

                                            <div className="d-flex align-items-center">
                                                <img src="assets/img/zing.png" alt="" className="rounded-circle" style={{ width: "60px", marginTop: "-80px", position: "relative" }} />
                                                <div className="ps-3">
                                                    <p>Connect your ZingHR to
                                                        automatically add and remove
                                                        employees.</p>

                                                    <button type="button" id="but" class="btn btn-primary">Connect</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xxl-3 col-xl-12">

                                    <div className="card info-card customers-card">

                                        <div className="card-body">

                                            <h5 className="card-title">Keka<br /><span style={{ color: "blue" }}>HR & Payroll</span></h5>

                                            <div className="d-flex align-items-center">
                                                <img src="assets/img/keka.jpg" alt="" className="rounded-circle" style={{ width: "60px", marginTop: "-80px", position: "relative" }} />

                                                <div className="ps-3">
                                                    <p>Keka HR helps your trams to adapt,
                                                        evolve, and scale by working more
                                                        effectively.</p>

                                                    <button type="button" id="but" class="btn btn-outline-primary">Coming Soon</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="pagetitle">
                    <h1>Partner Offers</h1>

                </div>
                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-15">
                            <div className="row">

                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card ">

                                        <div className="card-body">
                                            <h5 className="card-title">Jupiter<br /><span style={{ color: "blue" }}>Digital Banking</span></h5>

                                            <div className="d-flex align-items-center">
                                                <img src="assets/img/jup.png" alt="" className="rounded-circle" style={{ width: "50px", marginTop: "-80px", position: "relative" }} />
                                                <div className="ps-3">
                                                    <p>A digital banking experience that
                                                        keeps pace with you and helps you</p>
                                                    <button type="button" id="buttons" class="btn btn-outline-warning">Exclusive offer on membership</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card revenue-card" style={{height:"242px"}}>

                                        <div className="card-body">
                                            <h5 className="card-title">SmartOnboard<br /><span style={{ color: "blue" }}>Employee Onboarding</span></h5>

                                            <div className="d-flex align-items-center">
                                                <img src="assets/img/work.png" alt="" className="rounded-circle" style={{ width: "60px", marginTop: "-80px", position: "relative" }} />
                                                <div className="ps-3">
                                                    <p>The fastest digital background
                                                        verification process of onborading</p>

                                                    <button type="button" id="buttons" class="btn btn-outline-warning">Exclusive offer on signup</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-12">

                                    <div className="card info-card customers-card" style={{height:"242px"}}>

                                        <div className="card-body">
                                            <h5 className="card-title">WorkVerify<br /><span style={{ color: "blue" }}>Employee Verification</span></h5>

                                            <div className="d-flex align-items-center">
                                                <img src="assets/img/work.png" alt="" className="rounded-circle" style={{ width: "60px", marginTop: "-80px", position: "relative" }} />
                                                <div className="ps-3">
                                                    <p>Easily request & respond to
                                                        employment verification of</p>

                                                    <button type="button" id="buttons" class="btn btn-outline-warning">Exclusive offer on signup</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xxl-3 col-xl-12">

                                    <div className="card info-card customers-card">

                                        <div className="card-body">

                                            <h5 className="card-title">Empuls by Xoxoday<br /><span style={{ color: "blue" }}>Rewards & Loyalty</span></h5>

                                            <div className="d-flex align-items-center">
                                                <img src="assets/img/emp.png" alt="" className="rounded-circle" style={{ width: "60px", marginTop: "-80px", position: "relative" }} />

                                                <div className="ps-3">
                                                    <p>Rewards, incentives, benefits &
                                                        payouts infrastucture for employment.</p>

                                                    <button type="button" id="buttons" class="btn btn-outline-warning">Exclusive offer on purchase</button>
                                                </div>
                                            </div>
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


export default Apphub;