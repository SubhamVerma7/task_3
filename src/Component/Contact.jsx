import React, { useState } from 'react'
import './contact.css'
import ReCAPTCHA from "react-google-recaptcha";
import { TitleChange } from './Titlechange/TitleChange';

export const Contact = () => {
    TitleChange('Socus Contact Page')

    const [inputFieldData, setinputFieldData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const inputData = (e) => {
        const name = e.target.name;
        const inputvalue = e.target.value;
        setinputFieldData({ ...inputFieldData, [name]: inputvalue })
    }


    const dataSubmit = (e) => {
        e.preventDefault();


    }

    const onChange = ()=>{

    }

    return (
        <div className="content pt-5">
            <div className="page-header-cover">
                <h3>Contact With Us</h3>
            </div>
            <div className="container">
                <div className="row align-items-stretch no-gutters contact-wrap">
                    <div className="col-md-8 form h-100 col">
                        <div className="map-div">
                            <fieldset>
                                <legend>
                                    <img src="img/location-img.png" /> Located Map
                                </legend>
                                <div className="col-md-8 map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.9092428479!2d75.7237600342887!3d22.724228432387644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1674804570792!5m2!1sen!2sin"
                                        width={600}
                                        height={450}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </fieldset>
                        </div>
                        <fieldset>
                            <legend>
                                <img className="mail.img" src="img/mail-img.png" />
                                Get In Touch{" "}
                            </legend>
                            <div className="form h-100">
                                <h3>Send us a message</h3>
                                <form
                                    className="mb-5"
                                    method="POST    "
                                    id="contactForm"
                                    name="contactForm"
                                    noValidate="novalidate"
                                    onSubmit={dataSubmit}
                                >
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-5">
                                            <label htmlFor="" className="col-form-label">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control input"
                                                name="name"
                                                id="name"
                                                placeholder="Your name"
                                                required
                                                autoComplete='off'
                                                onChange={inputData}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group mb-5">
                                            <label htmlFor="" className="col-form-label">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control input"
                                                name="email"
                                                id="email"
                                                placeholder="Your email"
                                                required
                                                autoComplete='off'
                                                onChange={inputData}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-5">
                                            <label htmlFor="" className="col-form-label">
                                                Phone *
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control input"
                                                name="phone"
                                                id="phone"
                                                placeholder="Phone"
                                                required
                                                autoComplete='off'
                                                onChange={inputData}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group mb-5">
                                            <label htmlFor="message" className="col-form-label">
                                                Message *
                                            </label>
                                            <textarea
                                                className="form-control input"
                                                name="message"
                                                id="message"
                                                cols={30}
                                                rows={4}
                                                placeholder="Write your message"
                                                defaultValue={""}
                                                required
                                                autoComplete='off'
                                                onChange={inputData}
                                            />
                                        </div>
                                    </div>
                                    <ReCAPTCHA
                                        sitekey="Your client site key"
                                        onChange={onChange}
                                    />
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <input
                                                type="submit"
                                                defaultValue="Send Message"
                                                className="btn btn-primary rounded-0 py-2 px-4 send-msg"
                                            />
                                            <span className="submitting" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-md-4 col">
                        <div className="contact-info h-100">
                            <fieldset id="contact-inf">
                                <legend className="contact-inf">
                                    <img src="img/call-img.png" /> Contact Information
                                </legend>
                                <p className="mb-5">
                                    Socus is the leading electronics Security Systems as well as all
                                    kind of Electronics Anti-Theft Systems solution provider.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex">
                                        <span className=" mr-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="bi bi-geo-alt-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                        </span>
                                        <span className="text ">
                                            {" "}
                                            Plot No-138,First floor, E-BLOCK-IIIrd ,Molarband ,
                                            Extn,Badarpur,Near Kasana Chawk, New Delhi-110044
                                        </span>
                                    </li>
                                    <li className="d-flex">
                                        <span className=" mr-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="bi bi-telephone-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text mb-no">
                                            <a href="+91-2619-789">+91-2619-789</a>
                                        </span>
                                    </li>
                                    <li className="d-flex">
                                        <span className=" mr-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="bi bi-envelope-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                            </svg>
                                        </span>
                                        <span className="text mb-no">
                                            <a href="info@socus.co.in">info@socus.co.in</a>
                                        </span>
                                    </li>
                                </ul>
                            </fieldset>
                            <fieldset id="contact-inf">
                                <legend className="contact-inf">
                                    <img src="img/call-img.png" /> Contact Information
                                </legend>
                                <p className="mb-5">
                                    Socus is the leading electronics Security Systems as well as all
                                    kind of Electronics Anti-Theft Systems solution provider.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex">
                                        <span className=" mr-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="bi bi-geo-alt-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                        </span>
                                        <span className="text">
                                            {" "}
                                            Plot No-138,First floor, E-BLOCK-IIIrd ,Molarband ,
                                            Extn,Badarpur,Near Kasana Chawk, New Delhi-110044
                                        </span>
                                    </li>
                                    <li className="d-flex">
                                        <span className=" mr-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="bi bi-telephone-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text">
                                            <a href="+91-2619-789">+91-2619-789</a>
                                        </span>
                                    </li>
                                    <li className="d-flex">
                                        <span className=" mr-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="bi bi-envelope-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                            </svg>
                                        </span>
                                        <span className="text">
                                            <a href="info@socus.co.in">info@socus.co.in</a>
                                        </span>
                                    </li>
                                </ul>
                            </fieldset>
                            <div className="branch_dtls">
                                <p>
                                    <b>Zone : </b>North Zone
                                </p>
                            </div>
                            <div className="branch_dtls">
                                <p>
                                    <b>Zone : </b>South Zone
                                </p>
                            </div>
                            <div className="branch_dtls">
                                <p>
                                    <b>Zone : </b>East Zone
                                </p>
                            </div>
                            <div className="branch_dtls">
                                <p>
                                    <b>Zone : </b>West Zone
                                </p>
                            </div>
                            <div className="socail-media">
                                <h3>Contact with Social Network</h3>
                                <ul>
                                    <li>
                                        <a href="http://facebook.com/">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="bi bi-facebook"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://twitter.com/">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="bi bi-twitter"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/uas/login">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="bi bi-linkedin"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
