import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Container } from 'react-bootstrap';

const HomePageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <>
      <Container className='px-0'>
        <Slider {...settings}>
          <div className='slider'>
            <div className="card bg-dark text-white border-0">
              <img src="https://images.squarespace-cdn.com/content/v1/5a206c4bdc2b4affa2b76f82/1614574796827-72GBOPQ7L52105S2T01D/L%26G_InstantPlantBackground.jpg" height={435} alt="background" />
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container slider-card">
                  <p className="card-text lead fs-6">Sale Upto 40% off!</p>
                  <h5 className="card-title display-4 fw-bold mb-0">Plants For Health</h5>
                  <p className="card-text fw-bold lead fs-7">New Price: <span>Rs.1700.00</span></p>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="card bg-dark text-white border-0">
              <img src="https://images.squarespace-cdn.com/content/v1/5a206c4bdc2b4affa2b76f82/1614574796827-72GBOPQ7L52105S2T01D/L%26G_InstantPlantBackground.jpg" height={435} alt="background" />
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container slider-card">
                  <p className="card-text lead fs-6">Sale Upto 40% off!</p>
                  <h5 className="card-title display-4 fw-bold mb-0">Plants For Health</h5>
                  <p className="card-text fw-bold lead fs-7">New Price: <span>Rs.1700.00</span></p>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="card bg-dark text-white border-0">
              <img src="https://images.squarespace-cdn.com/content/v1/5a206c4bdc2b4affa2b76f82/1614574796827-72GBOPQ7L52105S2T01D/L%26G_InstantPlantBackground.jpg" height={435} alt="background" />
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container slider-card">
                  <p className="card-text lead fs-6">Sale Upto 40% off!</p>
                  <h5 className="card-title display-4 fw-bold mb-0">Plants For Health</h5>
                  <p className="card-text fw-bold lead fs-7">New Price: <span>Rs.1700.00</span></p>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="card bg-dark text-white border-0">
              <img src="https://images.squarespace-cdn.com/content/v1/5a206c4bdc2b4affa2b76f82/1614574796827-72GBOPQ7L52105S2T01D/L%26G_InstantPlantBackground.jpg" height={435} alt="background" />
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container slider-card">
                  <p className="card-text lead fs-6">Sale Upto 40% off!</p>
                  <h5 className="card-title display-4 fw-bold mb-0">Plants For Health</h5>
                  <p className="card-text fw-bold lead fs-7">New Price: <span>Rs.1700.00</span></p>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="card bg-dark text-white border-0">
              <img src="https://images.squarespace-cdn.com/content/v1/5a206c4bdc2b4affa2b76f82/1614574796827-72GBOPQ7L52105S2T01D/L%26G_InstantPlantBackground.jpg" height={435} alt="background" />
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container slider-card">
                  <p className="card-text lead fs-6">Sale Upto 40% off!</p>
                  <h5 className="card-title display-4 fw-bold mb-0">Plants For Health</h5>
                  <p className="card-text fw-bold lead fs-7">New Price: <span>Rs.1700.00</span></p>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="card bg-dark text-white border-0">
              <img src="https://images.squarespace-cdn.com/content/v1/5a206c4bdc2b4affa2b76f82/1614574796827-72GBOPQ7L52105S2T01D/L%26G_InstantPlantBackground.jpg" height={435} alt="background" />
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container slider-card">
                  <p className="card-text lead fs-6">Sale Upto 40% off!</p>
                  <h5 className="card-title display-4 fw-bold mb-0">Plants For Health</h5>
                  <p className="card-text fw-bold lead fs-7">New Price: <span>Rs.1700.00</span></p>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </>
  )
}

export default HomePageSlider;