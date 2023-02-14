import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const Solution = () => {

    const solution = [
        { image: "https://www.pramaindia.in/wp-content/uploads/2020/12/sol-7.png", title: "BANKING & FINANCE", text: "Best Security Systems For bfsi Sectors Money, finance, and security businesses are vulnerable to constant threats" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2020/11/education-sol.png", title: "EDUCATION", text: "Educational Institute Based Security Ideas All educational campuses can be vulnerable to internal and external threats. PRAMA is providi" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2020/12/sol-4.png", title: "HOTEL & LEISURE", text: "Smart CCTV Solutions For Hotels : PRAMA A hotel has a large number of visitors each day. In order to better manage various services" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2020/12/sol-1.png", title: "HEALTHCARE & PHARMA", text: "Custom Healthcare Security Services : PRAMA Hospitals and health care facilities are designed to be places of healing, recovery, and tranquility" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2020/12/sol-3.png", title: "MANUFACTURING & INDUSTRIES", text: "Top CCTV And Accessories Manufacturing Unit Faced with soaring labor costs and fiercer competition, " },
        { image: "https://www.pramaindia.in/wp-content/uploads/2020/12/sol-5.png", title: "RETAIL", text: "High-End Solutions To Retail Security : PRAMA Shopping malls around the world are more than just retail centers" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2020/11/real-estate.png", title: "REAL ESTATE", text: "Secured CCTV Services For Real Estate: PRAMA Imagine a busy morning in the city: people hurry out of their apartments, stop at th" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2020/11/smart-city.png", title: "SMART CITY", text: "Intelligent Security Solutions For A Smart-city The PRAMA’s Safe City Solution provides sound, stable, and reliable municipal public security," }
    ]


  return (


    <Container className='row m-auto text-center'>
         <h3>OUR SOLUTIONS</h3>
         <hr />
        {solution.map((item, index)=>{
         return(
         <div className='col-sm-3 '>
         <Card  className='solution-card text-center m-3 our-solution-detial' key={index}>
                <Card.Img variant="top" style={{ width: '3rem' }} className='card-img1' src={item.image} />
                <Card.Body>
                    <Card.Title style={{ fontSize: '14px' }} className="">{item.title}</Card.Title>
                    <Card.Text  className="solution-text">{item.text}
                    </Card.Text>
                </Card.Body>
            </Card></div>)
            })}
    </Container>
  )
}
