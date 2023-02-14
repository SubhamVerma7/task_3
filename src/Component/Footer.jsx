import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { HiOfficeBuilding } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";



export const Footer = () => {
  return (
    <MDBFooter bgColor='dark' className='footer-text text-center text-lg-start'>
      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <img src='http://localhost:3000/socus/static/media/socus_logo.53d9b8b8e7bc0e09b607.png' alt='' />
              <p>
                Socus is the leading electronics Security Systems as well as all kind of Electronics Anti-Theft Systems solution provider.
              </p>
              <section className=''>
                <div className=' text-center m-auto'>
                  <h6>Social Networks:</h6>
                </div>
                <div className='icon-set2'>
                  <Link href='' className='me-2'>
                    <AiFillInstagram className='social-icon' />
                  </Link>
                  <Link href='' className='me-2 '>
                    <AiFillYoutube className='social-icon' />
                  </Link>
                  <Link href='' className='me-2 '>
                    <AiFillFacebook className='social-icon' />
                  </Link>
                </div>
              </section>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'> Useful links</h6>
              <p>
                <Link href='#!' className='nav-link text-reset'>
                  Home
                </Link>
              </p>
              <p>
                <Link href='#!' className='nav-link text-reset'>
                  About Us
                </Link>
              </p>
              <p>
                <Link href='#!' className='nav-link text-reset'>
                  Contact Us
                </Link>
              </p>
              <p>
                <Link href='#!' className='nav-link text-reset'>
                  Laravel
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p className='text-reset1'>
                <Link href='#' className='nav-link text-reset productness'>
                 <GrFormNextLink className='icon'/> NETWORK CAMERA
                </Link>
              </p>
              <p className='text-reset1'>
                <Link href='#!' className='nav-link text-reset productness'>
                <GrFormNextLink className='icon'/>  
                <span>MOBILE CAMERA </span>
                </Link>
              </p>
              <p className='text-reset1'>
                <Link href='#!' className='nav-link text-reset productness'>
                <GrFormNextLink className='icon'/>
                <span> THERMAL CAMERA</span>
                </Link>
              </p>
              <p className='text-reset1'>
                <Link href='#!' className='nav-link text-reset productness'>
                <GrFormNextLink className='icon'/> 
                <span> DIGITAL VIDEO RECORDER </span>
                </Link>
              </p>
              <p className='text-reset1'>
                <Link href='#!' className='nav-link text-reset productness  '>
                <GrFormNextLink className='icon'/> 
                <span> NETWORK VIDEO RECORDER </span>
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p className='address-div'><Link href='' className='me-2 '>
                {/* <HiOfficeBuilding className='social-icon3' /> */}
              
                <MDBIcon color='secondary' icon='home' className='' /></Link>
                <span>Plot No-138,First floor, E-BLOCK-IIIrd ,Molarband , Extn,Badarpur,Near Kasana Chawk, New Delhi-110044</span> 
              </p>
              <p className='address-div'><Link href='' className='me-2 '>
                {/* <AiOutlineMail className='social-icon3' /> */}
                <MDBIcon color='secondary' icon='envelope' className='' /></Link>
                <span>info@socus.co.in </span>
              </p>
              <p className='address-div'>
                <Link href='' className='me-2 '>
                  {/* <AiFillPhone className='social-icon3' /> */}
              
                <MDBIcon color='secondary' icon='phone' className='' />
                </Link>
              <span>+91-2619-789</span> 
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Copyright © 2018. All rights reserved by Socus Design & Developed by
        <Link className='text-reset nav-link fw-bold' href='https://mdbootstrap.com/'>
          Socus
        </Link>
      </div>
    </MDBFooter>
  )
}
