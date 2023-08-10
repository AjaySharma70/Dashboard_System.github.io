import React, { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import { db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore/lite";

function Updateinvoice() {
    const { id } = useParams();
    const [estimation, setestimation] = useState('');
    const [billstart, setbillstart] = useState('');
    const [billend, setbillend] = useState('');
    const [invoicenumber, setinvoicenumber] = useState('');
    const [invoicedate, setinvoicedate] = useState('');
    const [duedate, setduedate] = useState('');
    const [statu, setstatu] = useState('');
    const [amount, setamount] = useState('');

    const [eestimation, seteestimation] = useState('');
    const [ebillstart, setebillstart] = useState('');
    const [ebillend, setebillend] = useState('');
    const [einvoicenumber, seteinvoicenumber] = useState('');
    const [einvoicedate, seteinvoicedate] = useState('');
    const [eduedate, seteduedate] = useState('');
    const [estatu, setestatu] = useState('');
    const [eamount, seteamount] = useState('');

    const decRef = doc(db, 'billings', id);
    const getd = async () => {
        const billingSnapshot = await getDoc(decRef);
        seteestimation(billingSnapshot.data().estimation);
        setebillstart(billingSnapshot.data().billstart);
        setebillend(billingSnapshot.data().billend);
        seteinvoicenumber(billingSnapshot.data().invoicenumber);
        seteinvoicedate(billingSnapshot.data().invoicedate);
        seteduedate(billingSnapshot.data().duedate);
        setestatu(billingSnapshot.data().statu);
        seteamount(billingSnapshot.data().amount);
    }
    getd();
    const updateInvoice = async () => {
        await updateDoc(decRef, {
            estimation: estimation,
            billstart: billstart,
            billend: billend,
            invoicenumber: invoicenumber,
            invoicedate: invoicedate,
            duedate: duedate,
            statu: statu,
            amount: Number(amount)
        });
    }
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
                    <h1>Update Invoice</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>

                            <li className="breadcrumb-item active">Update Invoice</li>
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
                                            <label className="form-label">Estimation Date</label>
                                            <input type="date" className="form-control" id="estimation" name="estimation" value={estimation} onChange={(e) => {
                                                setestimation(e.target.value);
                                            }} placeholder={eestimation} required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Billing Start Date</label>
                                            <input type="date" className="form-control" id="billstart" name="billstart" value={billstart} onChange={(e) => {
                                                setbillstart(e.target.value);
                                            }} placeholder={ebillstart} required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Billing End Date</label>
                                            <input type="date" className="form-control" id="billend" name="billend" value={billend} onChange={(e) => {
                                                setbillend(e.target.value);
                                            }} placeholder={ebillend} required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Invoice Number</label>
                                            <input type="text" className="form-control" id="invoicenumber" name="invoicenumber" value={invoicenumber} onChange={(e) => {
                                                setinvoicenumber(e.target.value);
                                            }} placeholder={einvoicenumber} required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Invoice Date</label>
                                            <input type="date" className="form-control" id="invoicedate" name="invoicedate" value={invoicedate} onChange={(e) => {
                                                setinvoicedate(e.target.value);
                                            }} placeholder={einvoicedate} required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Due Date</label>
                                            <input type="date" className="form-control" id="duedate" name="duedate" value={duedate} onChange={(e) => {
                                                setduedate(e.target.value);
                                            }} placeholder={eduedate} required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Status</label>
                                            <select className="form-select" id="statu" name="statu" value={statu} onChange={(e) => {
                                                setstatu(e.target.value);
                                            }} placeholder={estatu} >
                                                <option selected>select menu</option>
                                                <option value="paid">Paid</option>
                                                <option value="unpaid">Unpaid</option>

                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Amount</label>
                                            <input type="number" className="form-control" id="amount" value={amount} onChange={(e) => {
                                                setamount(e.target.value);
                                            }} placeholder={eamount} required />
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary" onClick={() => {
                                                updateInvoice();
                                            }}>Update Invoice</button>
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


export default Updateinvoice;