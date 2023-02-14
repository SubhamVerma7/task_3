import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../Images/socus_logo.png'
import Modal from 'react-bootstrap/Modal';
import { AiOutlineRight } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const API = 'http://www.socus.co.in/socus_admin/api/get_categories';

export const Header = () => {

    const navigate = useNavigate()
    const [lgShow, setLgShow] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [apiData, setApiData] = useState([])
    const [subCat, setSubCat] = useState([])
    const [globalId, setGlobalId] = useState('Nil')
    const [asubCat, setASubCat] = useState([])
    const [show, setShow] = useState(false);


    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = (e) => {
        setShow(false);
    }
    
    const getProduct = async (url) => {
        const res = await axios.get(url);
        const product = res.data.data.categories_info;
        setApiData(product)
    }

    useEffect(() => {
        getProduct(API)
    }, [apiData]);



    const get_sub_data = async (catSort) => {
        setGlobalId(catSort)
        const res = await axios.get(`http://www.socus.co.in/socus_admin/api/get_sub_categories?main_cat_short=${catSort}`);
        const subProduct = (res.data.data.categories_info);
        setSubCat(subProduct)
    }
        ;




    const Navigatitem = (id) => {
        navigate(`/socus/${globalId}/${id}`)
    }


    return (
        <>
            <div>
                <Navbar className='nav-header' expand="lg">
                    <Navbar.Brand to="/"><img className='head-logo' src={logo} alt="" style={{ width: "140px" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content'>
                        <Nav className="nav-set">
                            <Link className="nav-link nav-bold" to="/socus">HOME</Link>




                            <NavDropdown title="PRODUCT" className='nav-bold'
                             id="collasible-nav-dropdown" 
                             show={show}
                             onMouseEnter={showDropdown} 
                             onMouseLeave={hideDropdown}
                            >
                                {show == true ?
                                <div className='size-increase'>
                                    <div className="row">

                                        <p className="col-sm-4" id="example-modal-sizes-title-lg">
                                            Product Categories
                                        </p >
                                        <p className="col-sm-8" id="example-modal-sizes-title-lg">
                                            Sub Categories
                                        </p>

                                        <div className="col-sm-3 product-border-right">
                                            {apiData.map((item, index) => {
                                                return (
                                                    <>
                                                        <NavDropdown.Item to="" className='col-sm-4 ' key={index} >
                                                            <Link className='catagory-nav'
                                                                onMouseEnter={() => { get_sub_data(item.short_name) }}>
                                                                {item.cat_name}
                                                            </Link>
                                                        </NavDropdown.Item>


                                                    </>
                                                )
                                            })}
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="row">
                                                        {subCat.map((item, index) => {
                                                            return (
                                                                <Link key={index} className='nav-link col-sm-4' onClick={hideDropdown} onMouseDown={() => {
                                                                    Navigatitem(item.short_name)
                                                                }}><AiOutlineRight /> {item.cat_name}</Link>
                                                            )
                                                        })}


                                                    </div>
                                                    {/* </div> */}
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="row">
                                                        {apiData.filter((item) => {
                                                            // console.log(item)

                                                            if (item.short_name == globalId) {
                                                                return []
                                                            }
                                                        }).map((item, index) => {
                                                            return (
                                                                <Link key={index} className='nav-link col-sm-4' >
                                                                    <img src={item.cat_image} alt="" style={{ width: 200, opacity: 0.4 }} /></Link>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="shop-by-brand col-sm-12 align-items-end">
                                                <h4 className="title-solution  col-sm-12">Solutions We Offer </h4>
                                                <div className="col-sm-12">
                                                    {apiData.filter((item) => {
                                                        // console.log(item)

                                                        if (item.short_name == globalId) {
                                                            return []
                                                        }
                                                    }).map((item, index) => {
                                                        // console.log(item)
                                                        return (

                                                            <span key={index} className="row">
<>
                                                                    {item.icons_array.map((icon, index) => {
                                                                        // console.log(icon)
                                                                        return (
                                                                            <Link className='col-img col-sm-1' xs lg="1" title="Tooltip on bottom" data-toggle="tooltip" data-placement="bottom">
                                                                                <img className='imgs' key={index} src={icon.icon_image} />
                                                                            </Link>
                                                                        )
                                                                    })}
                                                                    </>
                                                            </span>

                                                        )
                                                    })}
                                                </div>
                                               
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                : ""
                                
                            }



                            </NavDropdown>
                            <Link className="nav-link nav-bold" to="#link">SOLUTIONS</Link>
                            <NavDropdown title="SUPPORT" id="basic-nav-dropdown" className='nav-bold'>
                                <NavDropdown.Item> <Link className='nav-link' to='/'>
                                    Tools</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link className='nav-link' to='/'>
                                        Download Center</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item ><Link className='nav-link' to='/'>
                                    Warranty Status</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="ABOUT US" id="basic-nav-dropdown" className='nav-bold'>
                                <NavDropdown.Item>
                                    <Link className='nav-link' to='/socus'>
                                        Our Company</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item to="">
                                    <Link className='nav-link' to='/socus/career'>
                                        Career</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link className="nav-link nav-bold" to='/socus/contact-us'>
                                CONTACT US</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="nav-set">
                            <Link className="nav-link nav-bold" to="#home">LOGIN</Link>
                        </Nav>
                        <>

                            <div className="ScriptTop"></div>
                            <section>
                                <div className="Scriptcontent">
                                    <div className="navbar search">
                                        <ul>
                                            <li className="searchbar">
                                                <i className="fa fa-search" aria-hidden="true" />
                                                <div className="togglesearch">
                                                    <div className='search-bar'>
                                                        <input type="text" placeholder="" />
                                                        <input type="button" defaultValue="Search" />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <header className="ScriptHeader"></header>
                                </div>
                            </section>
                        </>

                    </Navbar.Collapse>

                </Navbar >


            </div >
        </>

    )
}
