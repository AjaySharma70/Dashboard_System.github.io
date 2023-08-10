import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Header from "./Header";
//import UserDataService from "../services/users.services";
import { storage, db } from "../firebase";
import { Loader } from "semantic-ui-react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";

const initialState = {
    name: "",
    email: "",
    mobile: "",
    rolename: "",
    state: "",
};

function Addusers(/*{ id, setUserId }*/) {
    const [data, setData] = useState(initialState);
    const { name, email, mobile, rolename, state } = data;
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        id && getSingleUser();
    }, [id])

    const getSingleUser = async () => {
        const docRef = doc(db, "users", id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            setData({ ...snapshot.data() });
        }
    };

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is Pause");
                        break;
                    case "running":
                        console.log("Uplaod is Running");
                        break;
                    default:
                        break;
                }
            }, (error) => {
                console.log(error)
            },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData((prev) => ({ ...prev, img: downloadURL }));
                    });
                }
            );
        };

        file && uploadFile();
    }, [file]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let errors = {};
        if (!name) {
            errors.name = "Name is Required"
        }
        if (!email) {
            errors.email = "Email is Required"
        }
        if (!mobile) {
            errors.mobile = "Mobile is Required"
        }
        if (!rolename) {
            errors.rolename = "Rolename is Required"
        }
        if (!state) {
            errors.state = "State is Required"
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errors = validate();
        if (Object.keys(errors).length) return setErrors(errors);
        setIsSubmit(true);
        if (!id) {
            try {
                await addDoc(collection(db, "users"), {
                    ...data,
                    timestamp: serverTimestamp(),
                });
            } catch (error) {
                console.log(error);
            }

        } else {
            try {
                await updateDoc(doc(db, "users", id), {
                    ...data,
                    timestamp: serverTimestamp(),
                });
            } catch (error) {
                console.log(error);
            }
        }

        navigate("/users");
    };

    /*
    //const ref = useRef();

    //const [file, setFile] = useState(null);
    //const [progress, setProgress] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [rolename, setRolename] = useState("");
    const [state, setState] = useState("");
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (name === "" || email === "" || mobile === "" || rolename === "") {
            setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        }
        const newUser = {
            //file,
            //progress,
            name,
            email,
            mobile,
            rolename,
            state,
        };
        console.log(newUser);

        try {
            if (id !== undefined && id !== "") {
                await UserDataService.updateUser(id, newUser);
                setUserId("");
                setMessage({ error: false, msg: "Updated successfully!" });
            } else {
                await UserDataService.addUsers(newUser);
                setMessage({ error: false, msg: "New User added successfully!" });
            }

        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }
        //setProgress("");
        //setFile("");
        setName("");
        setEmail("");
        setMobile("");
        setRolename("");
        setState("");
    };


    const editHandler = async () => {
        setMessage("");
        try {
            const docSnap = await UserDataService.getUser(id);
            console.log("the record is :", docSnap.data());
            //setFile(docSnap.data().file);
            setName(docSnap.data().name);
            setEmail(docSnap.data().email);
            setMobile(docSnap.data().mobile);
            setRolename(docSnap.data().rolename);
            setState(docSnap.data().state);
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }
    };

    useEffect(() => {
        console.log("The id here is : ", id);
        if (id !== undefined && id !== "") {
            editHandler();
        }
        /*
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage,file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is Pause");
                        break;
                    case "running":
                        console.log("Uplaod is Running");
                        break;
                    default:
                        break;
                }
         });
        };*/
    /*
    },[id]);

    */



    return (
        <Fragment>

            <header id="header" className="header fixed-top d-flex align-items-center">
                <Header />
                
            </header>
           

            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link " to="/settings">
                            <i className="bi bi-grid"></i>
                            <span>Organisation Profile</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-person"></i><span>User & Roles</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/users">
                                    <i className="bi bi-circle"></i><span>Users</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/roles">
                                    <i className="bi bi-circle"></i><span>Roles</span>
                                </Link>
                            </li>
                        </ul>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="#">
                            <i className="bi bi-journal-text"></i><span>Integrations</span>
                        </Link>
                    </li>

                </ul>


            </aside>
            <main id="main" className="main">
            

                <div className="pagetitle">
                    <h1>Add/Update Users</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>

                            <li className="breadcrumb-item active">Add/Update Users</li>
                        </ol>
                    </nav>
                </div>
                <section className="section">
                    <div className="row">

                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    {isSubmit ? <Loader active inline="centered" size="huge" /> : (
                                        <>
                                            <h5 className="card-title">{id ? "Update Form" : "Add Form"}</h5>
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

                                            <form className="row g-3" onSubmit={handleSubmit}>




                                                <div className="col-12">
                                                    <label className="form-label">Name</label>
                                                    <input type="text" error={errors.name ? { content: errors.name } : null} className="form-control" id="name" name="name" onChange={handleChange} value={name} /*onChange={(e) => setName(e.target.value)} */ autoFocus />
                                                </div>


                                                <div className="col-12">
                                                    <label className="form-label">Email ID</label>
                                                    <input type="email" error={errors.email ? { content: errors.email } : null} className="form-control" id="email" name="email" onChange={handleChange} value={email} /*onChange={(e) => setEmail(e.target.value)} */ />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Phone Number</label>
                                                    <input type="number" error={errors.mobile ? { content: errors.mobile } : null} className="form-control" id="mobile" name="mobile" onChange={handleChange} value={mobile} /* onChange={(e) => setMobile(e.target.value)} */ />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Role Name</label>
                                                    <input className="form-control" error={errors.rolename ? { content: errors.rolename } : null} id="rolename" name="rolename" onChange={handleChange} value={rolename} /* onChange={(e) => setRolename(e.target.value)} */ />
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Status</label>
                                                    <select className="form-select" error={errors.state ? { content: errors.state } : null} id="state" name="state" onChange={handleChange} value={state} /* onChange={(e) => setState(e.target.value)}*/>
                                                        <option selected>select menu</option>
                                                        <option value="Active">Active</option>
                                                        <option value="Deactive">Deactive</option>

                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Image</label>
                                                    <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} />
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary" disabled={progress !== null && progress < 100}>Add/Update Users</button>

                                                </div>
                                            </form>
                                        </>
                                    )}
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


export default Addusers;