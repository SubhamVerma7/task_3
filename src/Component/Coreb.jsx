import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const Coreb = () => {

    const solution = [
        { image: "https://www.pramaindia.in/wp-content/uploads/2020/12/offer-3.png", title: "PERCEPTION", text: "Front-end multi-dimensional, stereo and intelligent perception" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2020/12/offer-4.png", title: "TRANSMISSION", text: "H.265+ smart codec, PoE 2.0 PoC power" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2020/12/offer-3.png", title: "STORAGE", text: "Back-end NVR/DVRs, storage devices power" },
        { image: "https://www.pramaindia.in/wp-content/uploads/2020/12/offer-4.png", title: "ANALYSIS", text: "VMS, big data, cloud technology, cloud computing, video analytics, AI" },


    ]

    return (
        <Container className='m-auto text-center coreb'>
            <h3>CORE BUSINESS</h3>
            <hr />
            <h5>Complete Solutions for Security Needs</h5>
            <p  style={{ textAlign: 'justify' }}>Prama products and solutions synergize intelligent technologies in every vertical application. We provide seamless integration of system components, resulting in an exceptional user experience. From data perception, transmission, storage, and management to analysis and most importantly, action. We create real-world solutions a true "one-stop-shop" for the security needs of a broad spectrum of industries.</p>
            <div className='row'>
                {solution.map((item, index) => {
                    return (
                        <div className='col-sm-3 ' >
                            <Card className='solution-card text-center m-3 Core-Detial' key={index}>
                                <Card.Img variant="top" style={{ width: '3rem' }} className='card-img1' src={item.image} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '12px' }}>{item.title}</Card.Title>
                                    <Card.Text className="solution-text">{item.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card></div>)
                })}
                </div>
        </Container>
    )
}
