import React from 'react'
import { Alert, Button, Container, NavItem } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { TitleChange } from './Titlechange/TitleChange';




const API = 'http://www.socus.co.in/socus_admin/api/get_categories';

export const Category = () => {
  
  const [categoryData, setcategoryData] = useState([])
  const [cat, setCat] = useState([]);
  const [globalId, setGlobalId] = useState();
  const [subCat, setSubCat] = useState([])
  const [selected, setselected] = useState()
  const [modalInput, setModalInput] = useState(
    {
      model_no: ""
    }
    )
    const uid = useParams();
    const navigate = useNavigate();
    const GETPRODUCTDATA = `http://www.socus.co.in/socus_admin/api/get_category_products?main_cat_short=${uid.globalId}&sub_cat_short=${uid.id}`;
    TitleChange(`Socus ${uid.id}-${uid.globalId}`)



  const getDataProduct = async (url) => {

    const res = await axios.get(url);
    const subProduct = (res.data.data.products_series_array);;

    setcategoryData(subProduct)

  }

  useEffect(() => {
    getDataProduct(GETPRODUCTDATA)
  }, [categoryData])


  const getProduct = async (url) => {
    const res = await axios.get(url);
    const product = res.data.data.categories_info;
    setCat(product)
  }

  useEffect(() => {
    getProduct(API)
  }, [cat]);

  const navigate_modal_num = (modalN) => {
    navigate(`/socus/product/${modalN}`)
  }

  const catFilter = async (filterdropdown, short) => {
    setselected(filterdropdown)
    setGlobalId(short)

    const res = await axios.get(`http://www.socus.co.in/socus_admin/api/get_sub_categories?main_cat_short=${short}`);
    const subProduct = (res.data.data.categories_info);
    setSubCat(subProduct)

  }

  const Navigatitem = (id) => {

    if (id) {
      navigate(`/socus/${globalId}/${id}`)
    }
  }


  const modalinput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setModalInput(value)
  }

  const filterData = async () => {
    navigate(`/socus/product/${modalInput}`)
    setModalInput(
      {
        model_no: ""
      }
    )

  }


  return (
    <>
      <div className='pt-5'>
        {categoryData.slice(0, 1).map((item, index) => {
          return (

            <div className="page-header-cover" key={index}>
              <h3>{item.sub_category_name} - {item.category_name}</h3>
            </div>
            )
            
          }
        
        )}
        <div className='cat-bg-color'>
          <Container >

            <div className="row">
              <div className="col-sm-3 cat-section-color">
                <h6>Filter By</h6>
                <hr />
                <div>
                  <p>Product</p>
                  <input type="text" placeholder='Enter Model Number' onChange={modalinput} name="model_no" className='p-2' style={{ width: "100%" }} value={modalInput.model_no} /><br />
                  <Button className='btn-dark mt-2 mb-4' onClick={filterData}  >Filter</Button>

                </div>
                <div>
                  <h5>Category</h5>
                  <hr />
                  <div className="row " style={{ paddingLeft: 10, paddingRight: 10 }}>
                    {cat.map((item, index) => {
                      return (
                        <>
                          <div className="col-sm-10" key={index}>
                            <div className='capclock-div' style={{ fontSize: 15 }}>
                              <div>
                                <Link
                                  className="netww nav-link"
                                  data-bs-toggle="collapse"
                                  to="#collapseExample"
                                  aria-expanded="false"
                                  aria-controls="collapseExample"
                                  onClick={() => { { catFilter(item.cat_id, item.short_name) } }}

                                ><IoIosArrowDown />
                                  {item.cat_name}
                                </Link>
                                {item?.subcat_array?.filter((filterdata) => {
                                  if (selected == filterdata.cat_id) {
                                    return []
                                  }
                                })?.map((items, index) => {

                                  return (
                                    <div className="collapse" id="collapseExample" key={index}>
                                      <div
                                        id="MenuCat_5"
                                        className="collapse show"
                                        data-parent="#search-category-list"
                                        style={{}}

                                      >
                                        <>
                                          <ul id="innerul_5" style={{ marginBottom: 0 }}>
                                            <li onClick={() => { Navigatitem(items.short_name) }}>
                                              <Link to="" className='nav-link' style={{ fontSize: 12 }}> {items.cat_name}</Link>
                                            </li>
                                          </ul>
                                        </>


                                      </div>
                                    </div>
                                  )
                                })}

                              </div>
                            </div>

                          </div>
                          <div className='col-sm-2' style={{ padding: 0 }}>({item.subcat_count})</div>
                          <hr />

                        </>
                      )
                    })}
                  </div>
                </div>
              </div>



              <div className="search-toolbar col-sm-9">
                {/* BEGIN row */}
                <div className="row cat-filter-bg mx-3 ">
                  <div className="col-sm-3 mt-3">
                    <p>
                      We found{" "}
                      <span id="notsearchdivcountresult">
                        <strong className="text-danger">1</strong>
                      </span>
                      Items
                    </p>
                  </div>


                </div>

                <div className='row m-3'>
                  {categoryData.map((item, index) => {
                    // console.log(item)
                    return (
                      <>

                        <h6 className="col-sm-12"><span style={{ fontSize: 20, color: 'green' }} className="m-2">{item.series_name}</span>{item.sub_category_name} - {item.category_name}</h6>
                        {/* <Card className=' col-sm-12 ' key={index} > */}

                          {item.prodcuts.map((item, index) => {
                            return (
                              <Card className='port-card-card1 mb-5 col-sm-4' onMouseDown={() => { navigate_modal_num(item.model_no) }} key={index} >
                             
                                <Card.Img variant="top" style={{ width: '8rem' }} className='card-img' src={item.product_image} />
                                <Card.Body>
                                  <Card.Title style={{ fontSize: '15px', marginTop: -30 }}>{item.product_name}</Card.Title>
                                  <Card.Text style={{ fontSize: '10px' }}>{item.short_description}
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            )
                          })}
                        {/* </Card> */}
                      </>
                    )
                  })}
                </div>

              </div>

        </div>
      </Container>
    </div>
      </div >
    </>
  )
}
