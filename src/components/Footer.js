// import { Formik, useFormik } from 'formik'
// import Link from 'next/link'
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
//import { ArrowRight } from './icon/regular'

const Footer = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //   },
  //   onSubmit: (values, { resetForm }) => {
  //     resetForm();
  //     console.log(values)
  //   },
  // });
  //onSubmit={formik.handleSubmit}
  return (
    <>
      <footer id="site-footer" className="site-footer">
        <Container>
          {/* nursery nepal Footer navigation start */}
          <div className="site-footer__footer-navigation">
            <Row className="gx-5">
              <Col md={4}>
                <div className="footer-block">
                  <h2>Nursery Nepal</h2>
                  <p>
                    As a digital and social entrepreneur, MICK
                    invests and it is a consults with a wide
                    array of start ups and early stage is an
                    companies. and social entrepreneur, MICK
                    invests and op consults with a wide array of
                    start ups and early stage on the companies.
                    and social entrepreneur.
                  </p>
                </div>
                <div className="footer-subscription">
                  <h3>Subscribe to Nursery Nepal</h3>
                  <Form  >
                    <Form.Group className=" footer-form mb-3 d-flex" controlId="formBasicEmail">
                      <Form.Control className='footer-input-form' required
                        name="email"
                        type="email"
                        // onChange={formik.handleChange}
                        // value={formik.values.email}
                        placeholder="Enter email" />
                      <Button className='footer-btn' variant="primary" type="submit">
                        send
                        {/* <ArrowRight /> */}
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
              </Col>
              <Col md={2}>
                <div className="footer-block">
                  <ul>
                    <li>For Clients</li>
                    <li>
                      <NavLink to="/">
                        <a>How to Book?</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Tourist Guide</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="//">
                        <a>Services</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Top places in Nepal</a>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={2}>
                <div className="footer-block">
                  <ul>
                    <li>Company</li>
                    <li>
                      <NavLink to="/">
                        <a>Destination</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Tours</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Flight Booking</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Hotel Booking</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Movie Booking</a>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={2}>
                <div className="footer-block">
                  <ul>
                    <li>Resources</li>
                    <li>
                      <NavLink to="/">
                        <a>Help and Support</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Community</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Resources</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Blog</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Discover</a>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={2}>
                <div className="footer-block">
                  <ul>
                    <li>Company</li>
                    <li>
                      <NavLink to="/">
                        <a>About Us</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Contact Us</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Privacy Policy</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="//">
                        <a>FAQs</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <a>Terms & Conditions</a>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          {/* Darshan Footer navigation end */}

          {/* Darshan footer social links section start */}
          <div className="site-footer__social-links">
            <h3>Follow Us</h3>
            <Row>
              <Col>
                <div className="social-sites">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="wrapper facebook"
                  >
                    fb
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="wrapper twitter"
                  >
                    twt
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="wrapper twitter"
                  >
                    link
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="wrapper twitter"
                  >
                    inst
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="wrapper twitter"
                  >
                    you
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        {/* Darshan footer social links section end */}
        <hr />
        <Container>
          <div className="site-footer__copyright d-md-flex d-block">
            <p>© 2022-Nursery Nepal® All Rights Reserved</p>
          </div>
        </Container>

      </footer>

    </>
  )
}

export default Footer