import React from 'react'
import { BsFillPeopleFill } from "react-icons/bs";
import { BsTrophyFill } from "react-icons/bs";

import { FaUserSecret } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const CompanyFact = () => {
    return (
        <>
            <div className="parallax">
                <div className="container">
                    <h2 className="heading text-center">COMPANY FACTS</h2>
                    <hr />
                    <section id="counter" className="counter">
                        <div className="container">
                            <div className="row">
                                <div className="main_counter_content row text-center white-text wow fadeInUp">
                                    <div className="col-sm-4 overlay ">
                                        <span className=''>
                                            <BsFillPeopleFill className='fact-icon' />
                                        </span>
                                        <div className="single_counter p-y-2 m-t-1">

                                            <span>
                                                <span className="count">7532</span>
                                                <p>Happy Client</p>
                                            </span>
                                        </div>
                                        <hr className='hr-adjust' />
                                    </div>
                                    <div className=" overlay col-md-4">
                                        <span className=''>
                                            <FaUserSecret className='fact-icon' />
                                        </span>
                                        <div className="single_counter p-y-2 m-t-1">
                                            <span>
                                                <span className="count">1290</span>
                                                <p>Expert Advisors</p>
                                            </span>
                                        </div>
                                        <hr className='hr-adjust' />
                                    </div>
                                    <div className=" col-md-4">
                                        <span className=''>
                                            <BsTrophyFill className='fact-icon' />
                                        </span>
                                        <div className="single_counter p-y-2 m-t-1">
                                            <span>
                                                <span className="count">2684</span>
                                                <p>Project Success</p>
                                            </span>
                                        </div>
                                        <hr className='hr-adjust' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>


                </div>
            </div>
            {/* End of counter Section */}
            <div className="skin-highlight vcr_after-content">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-9">
                            <h4>2000+ people have put their trust in CCTV, How about you?</h4>
                        </div>
                        <div className="col-xs-12 col-sm-4 medium-filled col-md-2 get">
                            <Link className='nav-link dt-sc-button '
                                to="#"
                            >

                                Get Started Now</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
