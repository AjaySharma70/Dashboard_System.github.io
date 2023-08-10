import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import BillingDataService from "../services/billings.services";


function Billings({ getBillingId }) {
    const [billings, setBillings] = useState([]);
    useEffect(() => {
        getBillings();
    }, []);

    const getBillings = async () => {
        const data = await BillingDataService.getAllBillings();
        console.log(data.docs);
        setBillings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const deleteHandler = async (id) => {
        await BillingDataService.deleteBilling(id);
        getBillings();
    };
    const [searchTerm, setSearchTerm] = useState('');
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
                    <h1>All Invoices</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
                            <li className="breadcrumb-item active">Invoice</li>
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
                                        <Link to="/addinvoice"><button type="submit" class="btn btn-primary">Add Invoice</button></Link>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">All Invoice</h5>
                                            <div className="search-bar">
                                                <form className="search-form d-flex align-items-center">
                                                    <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} style={{ width: "250px", height: "30px" }} />
                                                </form>
                                            </div>
                                            <br />

                                            <table className="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Estimation Date</th>
                                                        <th scope="col">Start Date</th>
                                                        <th scope="col">End Date</th>
                                                        <th scope="col">Invoice Number</th>
                                                        <th scope="col">Invoice Date</th>
                                                        <th scope="col">Due Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {billings.filter((doc) => {
                                                        if (searchTerm == "") {
                                                            return doc
                                                        } else if (doc.invoicenumber.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                            return doc
                                                        }
                                                    }).map((doc, index) => {
                                                        return (
                                                            <tr key={doc.id}>
                                                                <td><Link to="/invoice">{index + 1}</Link></td>
                                                                <td>{doc.estimation}</td>
                                                                <td>{doc.billstart}</td>
                                                                <td>{doc.billend}</td>
                                                                <td><a href="#">{doc.invoicenumber}</a></td>
                                                                <td>{doc.invoicedate}</td>
                                                                <td>{doc.duedate}</td>
                                                                <td><span class="badge bg-success">{doc.statu}</span></td>
                                                                <td><span className="bi bi-currency-rupee">{doc.amount}</span></td>
                                                                <td><Link to="/addinvoice"><i className="fas fa-edit" style={{color:"#295fbc", fontSize:"23px",marginRight:"5px"}} onClick={(e) => getBillingId(doc.id)}></i></Link>
                                                                <i class="fas fa-trash-alt" style={{color:"red",fontSize:"23px", cursor:"pointer"}} onClick={(e) => deleteHandler(doc.id)}></i>
                                                                    {/*<Link to="/addinvoice"><button type="button" class="btn btn-success" style={{ fontSize: "12px" }} onClick={(e) => getBillingId(doc.id)}>Edit</button></Link>*/}
                                                                    {/*<button type="button" class="btn btn-danger" style={{ position: "absolute", marginLeft: "2px", fontSize: "12px" }} onClick={(e) => deleteHandler(doc.id)}>Delete</button>*/}
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
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


export default Billings;