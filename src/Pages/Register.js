import React, { Fragment, useState  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

function Register() {
    //const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <Fragment>
            <main>
                <div className="container">

                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                    <div className="d-flex justify-content-center py-4">
                                        <a href="/home" className="logo d-flex align-items-center">
                                            <img src="assets/img/BSEEBIX_logo.jpg" alt="" style={{ marginLeft: "50px" }} />

                                        </a>
                                    </div>

                                    <div className="card mb-3">

                                        <div className="card-body">

                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Register</h5>
                                                <p className="text-center small">Enter your personal details to create account</p>
                                            </div>
                                            {error && <Alert variant="danger">{error}</Alert>}

                                            <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                                            {/*
                                                <div className="col-12">
                                                    <label for="yourName" className="form-label">Username</label>
                                                    <input type="text" name="username" className="form-control" onChange={(e) => setUsername(e.target.value)} />

                                                </div>
                                            */}

                                                <div className="col-12">
                                                    <label for="yourEmail" className="form-label">Email</label>
                                                    <input type="email " name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />

                                                </div>

                                                <div className="col-12">
                                                    <label for="yourPassword" className="form-label">Password</label>
                                                    <input type="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                                   
                                                </div>

                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">Create Account</button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">Already have an account? <Link to="/login">Log in</Link></p>
                                                </div>
                                            </form>

                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </section>

                </div>
            </main>

        </Fragment>
    )
}


export default Register;