import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert } from "react-bootstrap";
//import GoogleButton from "react-google-button";

function Login() {
    //const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };
/*
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };
*/
    return (
        <Fragment>

            <main>
                <div className="container">

                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                    <div className="d-flex justify-content-center py-4">
                                        <a href="index.html" className="logo d-flex align-items-center">
                                            <img src="assets/img/BSEEBIX_logo.jpg" alt="" style={{ marginLeft: "50px" }} />

                                        </a>
                                    </div>

                                    <div className="card mb-3">

                                        <div className="card-body">

                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Login</h5>

                                            </div>
                                            {error && <Alert variant="danger">{error}</Alert>}

                                            <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                                               

                                                <div className="col-12">
                                                    <label for="yourEmail" className="form-label">Email</label>
                                                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />

                                                </div>

                                                <div className="col-12">
                                                    <label for="yourPassword" className="form-label">Password</label>
                                                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />

                                                </div>
                                                
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">Login</button>
                                                </div>
                                            </form>
                                            {/*
                                            <hr />
                                            <div>
                                                <GoogleButton
                                                    className="g-btn"
                                                    type="dark" style={{ width: "370px" }}
                                                    onClick={handleGoogleSignIn}
                                                />
                                            </div>
    */}
                                            <br />
                                            <div className="col-12">
                                                <p className="small mb-0">Don't have an account? <Link to="/register">Register</Link></p>
                                            </div>

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


export default Login;