import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Portfolio_Slider = () => {

    const titleSlider = [
        { title: "Traffic Products" },
        { title: "Network Camera" },
        { title: "HD-TVI Camera" },
        { title: "Mobile Camera" },
        { title: "Thermal Camera" },
        { title: "Digital Video Recorder" }
    ]

    const cardInfo = [
        { image: "https://www.pramaindia.in/wp-content/uploads/2022/05/MicrosoftTeams-image-1.png", title: "PT-NR2A08-Q2CKV", text: "Network Video Recorder" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2021/10/PT-LHV1050D-12MPIR.jpg", title: "PT-NR2A08-Q2CKV", text: "Intelligent 2 MP Varifocal Bullet Network Camera" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png", title: "PT-NC321P3-ISF(D)", text: "PT-NC321P3-ISF(D)" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2022/02/PT-NC350P3-ID.png", title: "PT-NR2A08-Q2CKV", text: "Network Video Recorder" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2021/10/PT-NCX780P5-APD.jpg", title: "PT-NR2A08-Q2CKV", text: "Network Video Recorder" }
    ]

    const renderCard = (card, index) => {
        return (
            <Card className='port-card-card col-sm-2 m-3' key={index}>
                <Card.Img variant="top" style={{ width: '8rem' }} className='card-img' src={card.image} />
                <Card.Body>
                    <Card.Title style={{ fontSize: '15px' }}>{card.title}</Card.Title>
                    <Card.Text style={{ fontSize: '10px' }}>{card.text}
                    </Card.Text>
                </Card.Body>
            </Card>

        )
    }

    return (
        <>
          
  <div className='potfolio-sec'>
 
      <Row>
        <Col>

        <section className="potfolio">
        <h3 class="product-detial">PRODUCT PORTFOLIO</h3>
  <ul>

    <li className="list" data-filter="camera">
    Network Camera
    </li>
    <li className="list" data-filter="mobile">
    HD-TVI Camera
    </li>
    <li className="list" data-filter="headerphone">
    Mobile Camera
    </li>
    <li className="list" data-filter="shop">
    Thermal Camera
    </li>
    <li className="list" data-filter="Recorder">
    Digital Video Recorder
    </li>
    
    
  </ul>
  <div className="product">
    <div className="itemBox camera">
    {" "}
      <img className='3'  src="https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
    <div className="itemBox camera">
    {" "}
      <img className='3'  src="https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
    <div className="itemBox camera">
      {" "}
      <img className='3'  src="https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
    <div className="itemBox camera">
      {" "}
      <img className='4'  src="https://www.pramaindia.in/wp-content/uploads/2022/02/PT-NC350P3-ID.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
    <div className="itemBox camera">
      {" "}
      <img className='5'  src="https://www.pramaindia.in/wp-content/uploads/2021/10/PT-NCX780P5-APD.jpg" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
    
    <div className="itemBox mobile">
    {" "}
      <img className='3'  src="https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
    <div className="itemBox mobile">
    {" "}
      <img className='3'  src="https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
    
    {/* Network Camera */}

    {/* HD-TVI Camera */}
    <div className="itemBox headerphone">
    {" "}
      <img className='3'  src="https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
    <div className="itemBox headerphone">
    {" "}
      <img className='3'  src="https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
    <div className="itemBox headerphone">
    {" "}
      <img className='3'  src="https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
    
   
    {/* HD-TVI Camera */}

    {/* Mobile Camera */}
    <div className="itemBox shop">
    {" "}
      <img className='3'  src="https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
    
    <div className="itemBox shop">
    {" "}
      <img className='3'  src="https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
  
    {/* Mobile Camera */}

    {/* Digital Video Recorder */}
    <div className="itemBox Recorder">
    {" "}
      <img className='3'  src="https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
    
    <div className="itemBox Recorder">
    {" "}
      <img className='3'  src="https://www.pramaindia.in/wp-content/uploads/2022/03/PT-NC321P3-ISFD-2.png" />{" "}
      <div className='prd-heading'>
      <h6>PT-NR2A08-Q2CKV</h6>
	  <p>Network Video Recorder</p>
      </div>
    </div>
 
    {/* Digital Video Recorder */}
  </div>
</section>

       
        </Col>
        
      </Row>
    
  </div>
        </>
    )
}
