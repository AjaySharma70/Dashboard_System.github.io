import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import { Alert } from "react-bootstrap";
import BillingDataService from "../services/billings.services";

function Addinvoice({ id, setBillingId }) {
    const [estimation, setestimation] = useState("");
    const [billstart, setbillstart] = useState("");
    const [billend, setbillend] = useState("");
    const [invoicenumber, setinvoicenumber] = useState("");
    const [invoicedate, setinvoicedate] = useState("");
    const [duedate, setduedate] = useState("");
    const [statu, setstatu] = useState("");
    const [amount, setamount] = useState("");
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleBillingSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (estimation === "" || billstart === "" || billend === "" || invoicenumber === "" || invoicedate === "" || duedate === "" || amount === "") {
            setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        }
        const newBilling = {
            estimation,
            billstart,
            billend,
            invoicenumber,
            invoicedate,
            duedate,
            statu,
            amount,
        };
        console.log(newBilling);

        try {
            if (id !== undefined && id !== "") {
                await BillingDataService.updateBilling(id, newBilling);
                setBillingId("");
                setMessage({ error: false, msg: "Updated successfully!" });
            } else {
                await BillingDataService.addBillings(newBilling);
                setMessage({ error: false, msg: "New Billings added successfully!" });
            }

        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }

        setestimation("");
        setbillstart("");
        setbillend("");
        setinvoicenumber("");
        setinvoicedate("");
        setduedate("");
        setstatu("");
        setamount("");
    };


    const editHandler = async () => {
        setMessage("");
        try {
            const docSnap = await BillingDataService.getBilling(id);
            console.log("the record is :", docSnap.data());
            setestimation(docSnap.data().estimation);
            setbillstart(docSnap.data().billstart);
            setbillend(docSnap.data().billend);
            setinvoicenumber(docSnap.data().invoicenumber);
            setinvoicedate(docSnap.data().invoicedate);
            setduedate(docSnap.data().duedate);
            setstatu(docSnap.data().statu);
            setamount(docSnap.data().amount);
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
                <Menu />

            </aside>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Add/Update Invoice</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>

                            <li className="breadcrumb-item active">Add/Update Invoice</li>
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



                                    <form className="row g-3" onSubmit={handleBillingSubmit}>
                                        <div className="col-12">
                                            <label className="form-label">Estimation Date</label>
                                            <input type="date" className="form-control" id="estimation" name="estimation" value={estimation} onChange={(e) => {
                                                setestimation(e.target.value);
                                            }} autoFocus />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Billing Start Date</label>
                                            <input type="date" className="form-control" id="billstart" name="billstart" value={billstart} onChange={(e) => {
                                                setbillstart(e.target.value);
                                            }} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Billing End Date</label>
                                            <input type="date" className="form-control" id="billend" name="billend" value={billend} onChange={(e) => {
                                                setbillend(e.target.value);
                                            }} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Invoice Number</label>
                                            <input type="text" className="form-control" id="invoicenumber" name="invoicenumber" value={invoicenumber} onChange={(e) => {
                                                setinvoicenumber(e.target.value);
                                            }} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Invoice Date</label>
                                            <input type="date" className="form-control" id="invoicedate" name="invoicedate" value={invoicedate} onChange={(e) => {
                                                setinvoicedate(e.target.value);
                                            }} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Due Date</label>
                                            <input type="date" className="form-control" id="duedate" name="duedate" value={duedate} onChange={(e) => {
                                                setduedate(e.target.value);
                                            }} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Status</label>
                                            <select className="form-select" id="statu" name="statu" value={statu} onChange={(e) => {
                                                setstatu(e.target.value);
                                            }} >
                                                <option selected>select menu</option>
                                                <option value="Paid">Paid</option>
                                                <option value="Unpaid">Unpaid</option>

                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Amount</label>
                                            <input type="number" className="form-control" id="amount" value={amount} onChange={(e) => {
                                                setamount(e.target.value);
                                            }} />
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Add/Update Invoice</button>
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


export default Addinvoice;