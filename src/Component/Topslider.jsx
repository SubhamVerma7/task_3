import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

const IMGAPI = 'http://www.socus.co.in/socus_admin/api/get_home_slider';

export const Topslider = () => {
  const [sliderImg, setSliderImg] = useState([])
  const getImg = async (url) => {
    const res = await axios.get(url);
    const img = res.data.data.categories_info;
    setSliderImg(img)
  }

  useEffect(() => {
    getImg(IMGAPI)
  }, []);

  return (
    
    <Carousel>
      {sliderImg.map((item, index)=>{
      
   return(
      <Carousel.Item  key={index}>
        <img
          className="d-block w-100"
          src={item.slider_image}
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
       )})}
    </Carousel>
  )
}
