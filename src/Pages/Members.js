import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import MemberDataService from "../services/members.services";


function Members({ getMemberId }) {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        getMembers();
    }, []);

    const getMembers = async () => {
        const data = await MemberDataService.getAllMembers();
        console.log(data.docs);
        setMembers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const deleteHandler = async (id) => {
        await MemberDataService.deleteMember(id);
        getMembers();
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
                    <h1>All Members</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item active">Members</li>
                        </ol>
                    </nav>
                </div>



                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-15">
                            <div className="row">

                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card sales-card">

                                        <div className="card-body">
                                            <h5 className="card-title">Total Members</h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>52</h6>
                                                    {/*<span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>*/}

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6">
                                    <div className="card info-card revenue-card">



                                        <div className="card-body">
                                            <h5 className="card-title">Total Onboarded</h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-person-check-fill"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>27</h6>
                                                    {/*<span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>*/}

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-12">

                                    <div className="card info-card customers-card">

                                        <div className="card-body">
                                            <h5 className="card-title">Total Deactivated</h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-person-x-fill"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>0</h6>
                                                    {/*<span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>*/}

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-xxl-3 col-xl-12">

                                    <div className="card info-card customers-card" style={{height:"160px"}}>

                                        <div className="card-body">
                                            <h5 className="card-title">Deactivation Pending</h5>

                                            <div className="d-flex align-items-center">
                                                

                                                <div className="ps-3">
                                                    <h6>0</h6>
                                                    {/*<span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>*/}
                                                    

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                      

                                        <div className="filter">
                                        <Link to="/addmembers"><button type="submit" class="btn btn-primary">Add Members</button></Link>
                                        {/*
                                            <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">

                                                <li><Link className="dropdown-item" to="/addmembers">Add Members</Link></li>

                                            </ul>

                                        */}    
                                        </div>


                                        <div className="card-body">
                                            <h5 className="card-title">All Members</h5>
                                            <div className="search-bar">
                                                <form className="search-form d-flex align-items-center">
                                                    <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} style={{width:"250px",height:"30px"}}/>
                                                </form>
                                            </div>
                                            <br/>

                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Phone Number</th>
                                                        <th scope="col">Employee No</th>
                                                        <th scope="col">Member ID</th>
                                                        <th scope="col">Activated Date</th>
                                                        <th scope="col">Membership Type</th>
                                                        <th scope="col">Plan</th>
                                                        <th scope="col">Monthly cost</ th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {members.filter((doc) => {
                                                        if (searchTerm == "") {
                                                            return doc
                                                        } else if (doc.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                            return doc
                                                        }
                                                    }).map((doc, index) => {
                                                        return (
                                                            <tr key={doc.id}>
                                                                <td>{/*<input type="checkbox" style={{ position: "absolute", marginLeft: "-25px", marginTop: "4px" }} />*/}{index + 1}</td>
                                                                <td>{doc.name}</td>
                                                                <td><a href="#">{doc.mobile}</a></td>
                                                                <td>{doc.employeeno}</td>
                                                                <td>{doc.memberid}</td>
                                                                <td>{doc.activate}</td>
                                                                <td>{doc.membership}</td>
                                                                <td>{doc.plan}</td>
                                                                <td><span className="bi bi-currency-rupee">{doc.cost}</span></td>
                                                                <td><span className="badge bg-success">{doc.statu} </span></td>
                                                                <td><Link to="/addmembers"><i className="fas fa-edit" style={{color:"#295fbc", fontSize:"23px",marginRight:"5px"}} onClick={(e) => getMemberId(doc.id)}></i></Link>
                                                                <i class="fas fa-trash-alt" style={{color:"red", fontSize:"23px", cursor:"pointer"}} onClick={(e) => deleteHandler(doc.id)}></i>
                                                                    {/*<Link to="/addmembers"><button type="button" className="btn btn-success" style={{ fontSize: "12px" }} onClick={(e) => getMemberId(doc.id)}>Edit</button></Link>*/}
                                                                    {/*<button type="button" className="btn btn-danger" style={{ position: "absolute", marginLeft: "2px", fontSize: "12px" }} onClick={(e) => deleteHandler(doc.id)}>Delete</button>*/}
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


export default Members;