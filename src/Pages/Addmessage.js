import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Header from "./Header";
import Menu from "./Menu";
//import UserDataService from "../services/users.services";
import { storage, db } from "../firebase";
import { Loader } from "semantic-ui-react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";


const initialState = {
    name: "",
    message: "",
};


function Addmessage() {
    const [data, setData] = useState(initialState);
    const { name, message} = data;
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        id && getSingleMessage();
    }, [id])

    const getSingleMessage = async () => {
        const docRef = doc(db, "messages", id);
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
        if (!message) {
            errors.message = "Message is Required"
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
                await addDoc(collection(db, "messages"), {
                    ...data,
                    timestamp: serverTimestamp(),
                });
            } catch (error) {
                console.log(error);
            }

        } else {
            try {
                await updateDoc(doc(db, "messages", id), {
                    ...data,
                    timestamp: serverTimestamp(),
                });
            } catch (error) {
                console.log(error);
            }
        }

        navigate("/home");
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
                    <h1>Add Message</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>

                            <li className="breadcrumb-item active">Add Message</li>
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
                                            <h5 className="card-title"></h5>
                                            <form className="row g-3" onSubmit={handleSubmit}>

                                                <div className="col-12">
                                                    <label className="form-label">Name</label>
                                                    <input type="text" error={errors.name ? { content: errors.name } : null} className="form-control" id="name" name="name" onChange={handleChange} value={name} autoFocus />
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Message</label>
                                                    <input type="text" className="form-control" error={errors.message ? { content: errors.message } : null} id="message" name="message" onChange={handleChange} value={message} />
                                                </div>

                                               
                                                <div className="col-12">
                                                    <label className="form-label">Image</label>
                                                    <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])}  />
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary" disabled={progress !== null && progress < 100}>Submit</button>

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


export default Addmessage;