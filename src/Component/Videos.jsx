import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Videos = () => {

    const video = [
        { image: "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" },
        { image: "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"} 
    ]

  return (
    <Container className='row text-center  video-sec'>
         <h3>VIDEOS</h3>
         <hr />
         <div className="row">
  <div className="col-md-6">
    <div className="o-video">
      <iframe className='video'
        width="100%"
        height="300px"
        src="https://www.youtube.com/embed/xxQnfQqMMRU"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      />
    </div>
  </div>
  <div className="col-md-6">
    <div className="o-video">
      <iframe className='video'
        width="100%"
        height="300px"
        src="https://www.youtube.com/embed/wGMXmoLCfsc"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      />
    </div>
  </div>
  <div className="col-md-2 m-auto d-block pt-3 pb-3 text-center">
    <a
      href="#"
      target="_blank"
      className="link-btn-view"
    >
      View More
    </a>
  </div>
</div>
         
    </Container>
  )
}
