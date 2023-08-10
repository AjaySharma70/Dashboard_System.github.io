import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Alert } from "react-bootstrap";
import Menu from "./Menu";
import MemberDataService from "../services/members.services";

function Addmembers({ id, setMemberId }) {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [employeeno, setEmployeeno] = useState("");
    const [memberid, setMemberid] = useState("");
    const [activate, setActivate] = useState("");
    const [membership, setMembership] = useState("");
    const [plan, setPlan] = useState("");
    const [cost, setCost] = useState("");
    const [statu, setStatu] = useState("");
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleMemberSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (name === "" || mobile === "" || employeeno === "" || memberid === "" || activate === "" || membership === "" || plan === "" || cost === "") {
            setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        }
        const newMember = {
            name,
            mobile,
            employeeno,
            memberid,
            activate,
            membership,
            plan,
            cost,
            statu,
        };
        console.log(newMember);

        try {
            if (id !== undefined && id !== "") {
                await MemberDataService.updateMember(id, newMember);
                setMemberId("");
                setMessage({ error: false, msg: "Updated successfully!" });
            } else {
                await MemberDataService.addMembers(newMember);
                setMessage({ error: false, msg: "New Members added successfully!" });
            }

        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }

        setName("");
        setMobile("");
        setEmployeeno("");
        setMemberid("");
        setActivate("");
        setMembership("");
        setPlan("");
        setCost("");
        setStatu("");
    };


    const editHandler = async () => {
        setMessage("");
        try {
            const docSnap = await MemberDataService.getMember(id);
            console.log("the record is :", docSnap.data());
            setName(docSnap.data().name);
            setMobile(docSnap.data().mobile);
            setEmployeeno(docSnap.data().employeeno);
            setMemberid(docSnap.data().memberid);
            setActivate(docSnap.data().activate);
            setMembership(docSnap.data().membership);
            setPlan(docSnap.data().plan);
            setCost(docSnap.data().cost);
            setStatu(docSnap.data().statu);
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
    
    const handleChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)){
            setMobile(e.target.value);
        }
    
    };
  

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
                                    {message?.msg && (
                                        <Alert
                                            variant={message?.error ? "danger" : "success"}
                                            dismissible
                                            onClose={() => setMessage("")}
                                        >
                                            {message?.msg}
                                        </Alert>
                                    )}


                                    <form className="row g-3" onSubmit={handleMemberSubmit}>

                                        <div className="col-12">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" name="name" id="name" value={name} onChange={(e) => {
                                                setName(e.target.value);
                                            }} autoFocus />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Phone Number</label>
                                            <input type="number" className="form-control" name="mobile" id="mobile" onChanges={handleChange} value={mobile} onChange={(e) => {
                                                setMobile(e.target.value);
                                            }} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Employee No</label>
                                            <input type="text" className="form-control" name="employeeno" id="employeeno" value={employeeno} onChange={(e) => {
                                                setEmployeeno(e.target.value);
                                            }} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Member ID</label>
                                            <input type="text" className="form-control" name="memberid" id="memberid" value={memberid} onChange={(e) => {
                                                setMemberid(e.target.value);
                                            }} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Activated Date</label>
                                            <input type="date" className="form-control" name="activate" id="activate" value={activate} onChange={(e) => {
                                                setActivate(e.target.value);
                                            }} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Membership Type</label>
                                            <input type="text" className="form-control" name="membership" id="membership" value={membership} onChange={(e) => {
                                                setMembership(e.target.value);
                                            }} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Plan</label>
                                            <input type="text" className="form-control" name="plan" id="plan" value={plan} onChange={(e) => {
                                                setPlan(e.target.value);
                                            }} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Monthly Cost</label>
                                            <input type="text" className="form-control" name="cost" id="cost" value={cost} onChange={(e) => {
                                                setCost(e.target.value);
                                            }} />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Status</label>
                                            <select className="form-select" name="statu" id="statu" value={statu} onChange={(e) => {
                                                setStatu(e.target.value);
                                            }}>
                                                <option selected>select menu</option>
                                                <option value="Active">Active</option>
                                                <option value="Deactive">Deactive</option>

                                            </select>
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


export default Addmembers;