import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";

function Invoice() {

const printClick = () => {
    window.print();
};

    return (
        <Fragment>
            
            <header id="header" className="header fixed-top d-flex align-items-center">
                <Header />
            </header>

            <aside id="sidebar" className="sidebar">
                <Menu />

            </aside>
            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Invoice</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li class="breadcrumb-item active">Invoice</li>
                        </ol>
                    </nav>
                </div>

                <div class="container">
                    <div class="row">

                        <div class="col-xs-12">
                            <div class="grid invoice">
                                <div class="grid-body">
                                    <div class="invoice-title">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <a href="index.html" class="logo d-flex align-items-center">
                                                    <img src="assets/img/BSEEBIX_logo.jpg" alt="" />

                                                </a>
                                                <div>
                                                <button type="print" id="print" onClick={printClick} class="btn btn-dark" /*onClick={() => window.print()}*/ style={{float:"right",position:"relative",marginLeft:"5px"}}>Print</button>
                                                
                                                </div>   
                                            </div>
                                            <div>
                                            </div>
                                        </div>

                                        <br />

                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <address>
                                                <strong style={{ color: "blue" }}>Bsc ebix Private Limited</strong> <br />
                                                Villa No. 55, Gran Carmen Address,<br />
                                                Opp. Decathlon, Mulluru,<br />
                                                Bengaluru, Karnataka- 5252522.<br />
                                                <a href="">www.bseebix.com</a><br />
                                                <strong>GSTIN:</strong> 29AADCO1206A1Z3<br />
                                                <strong>PAN:</strong> AADCO1206A, <strong>CIN:</strong> U74999KA2020PTC132386
                                            </address>
                                        </div>
                                        <div class="col-xs-6" >
                                            <address style={{ float: "right" }}>
                                                <strong>Bill To</strong><br />
                                                <strong style={{ color: "blue" }}>Onedios Private Limited</strong> <br />
                                                Villa No. 89, Gran Carmen Address,<br />
                                                Opp. Decathlon,<br />
                                                Bengaluru, Karnataka- 5685652.<br />
                                                <a href="">a@onedios.com</a><br />
                                            </address>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <h3 class="text-center">Tax invoice</h3>
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr class="line">
                                                        <td><strong>ID</strong></td>
                                                        <td><strong>ESTIMATE NO</strong></td>
                                                        <td><strong>INVOICE NO</strong></td>
                                                        <td><strong>INVOICE DATE</strong></td>
                                                        <td><strong>START DATE</strong></td>
                                                        <td><strong>END DATE</strong></td>
                                                        <td><strong>CLIENT ID</strong></td>
                                                        <td><strong>AMOUNT</strong></td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>EST-1602078111930</td>
                                                        <td>INV20221055946</td>
                                                        <td>Oct 10, 2022</td>
                                                        <td>Oct 1, 2022</td>
                                                        <td>Oct 21, 2022</td>
                                                        <td>OSHE-1602078111930</td>
                                                        <td><span className="bi bi-currency-rupee">405</span></td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </main>
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span>BSE EBIX</span></strong>. All Rights Reserved
                </div>

            </footer>
            

        </Fragment>
    )
}


export default Invoice;