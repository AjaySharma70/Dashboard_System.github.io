import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Alert } from "react-bootstrap";
import Menu from "./Menu";
//import ProfileDataService from "../services/profiles.services";

function Addorgprofile(/*{ id, setProfileId }*/) {
    /*
    const [orgname, setOrgname] = useState("");
    const [orgid, setOrgid] = useState("");
    const [gst, setGst] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleOrgprofileSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (orgname === "" || orgid === "" || gst === "" || mobile === "" || address === "" ) {
            setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        }
        const newProfile = {
            orgname,
            orgid,
            gst,
            mobile,
            address,
        };
        console.log(newProfile);

        try {
            if (id !== undefined && id !== "") {
                await ProfileDataService.updateProfile(id, newProfile);
                setProfileId("");
                setMessage({ error: false, msg: "Updated successfully!" });
            } else {
                await ProfileDataService.addProfiles(newProfile);
                setMessage({ error: false, msg: "New Organisation Profiles added successfully!" });
            }

        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }

        setOrgname("");
        setOrgid("");
        setGst("");
        setMobile("");
        setAddress("");
    };


    const editHandler = async () => {
        setMessage("");
        try {
            const docSnap = await ProfileDataService.getProfile(id);
            console.log("the record is :", docSnap.data());
            setOrgname(docSnap.data().orgname);
            setOrgid(docSnap.data().setOrgid);
            setGst(docSnap.data().gst);
            setMobile(docSnap.data().mobile);
            setAddress(docSnap.data().address);
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
                    <h1>Add/Update Members</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>

                            <li className="breadcrumb-item active">Add/Update Members</li>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">

                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Form</h5>
                                    {/*
                                    {message?.msg && (
                                        <Alert
                                            variant={message?.error ? "danger" : "success"}
                                            dismissible
                                            onClose={() => setMessage("")}
                                        >
                                            {message?.msg}
                                        </Alert>
                                    )}
                                    */}


                                    <form className="row g-3" /*onSubmit={handleOrgprofileSubmit}*/>

                                        <div className="col-12">
                                            <label className="form-label">Organisation Name</label>
                                            <input type="text" className="form-control" name="orgname" id="orgname" /*value={orgname} onChange={(e) => {
                                                setOrgname(e.target.value);
                                            }} autoFocus *//>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Organisation ID</label>
                                            <input type="number" className="form-control" name="orgid" id="orgid" /*value={orgid} onChange={(e) => {
                                                setOrgid(e.target.value);
                                            }} *//>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">GST IN</label>
                                            <input type="text" className="form-control" name="gst" id="gst" /*value={gst} onChange={(e) => {
                                                setGst(e.target.value);
                                            }} *//>
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Mobile Number</label>
                                            <input type="number" className="form-control" name="mobile" id="mobile" /*value={mobile} onChange={(e) => {
                                                setMobile(e.target.value);
                                            }} *//>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Address</label>
                                            <input type="text" className="form-control" name="address" id="address" /*value={address} onChange={(e) => {
                                                setAddress(e.target.value);
                                            }} *//>
                                        </div>
                                        
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Add/Update Members</button>

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


export default Addorgprofile;