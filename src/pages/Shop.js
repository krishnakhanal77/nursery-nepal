import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import { BsBasket2 } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { add } from '../store/cartSlice'
import { fetchProducts, STATUS } from '../store/productSlice'

const Shop = () => {

  const dispatch = useDispatch()
  const { data: products, status } = useSelector((state) => state.product);
  // console.log("this is product", products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const handleAdd = (product) => {
    dispatch(add(product))
  }

  if (STATUS.LOADING === status) {
    return (
      <><h2>Loading...</h2></>
    )
  }
  if (status === STATUS.ERROR) {
    return (
      <><h4>SOMETHIUNG WENT WRONG PLEASE TRY AGAIN</h4></>
    )
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={2}>
            filter options
          </Col>
          <Col md={10}>
            <Row>
              {
                products?.slice(0, 8)?.map((product, index) => {
                  return (
                    <>
                      <Col key={index} xs={12} md={3}>
                        <Card className='product'>
                          <NavLink to={`/products/${product.id}`}>
                            <Card.Img className='product__card' variant="top" src={product.image} height="200px" />
                            <Card.Body>
                              <h2>{product.title.slice(0, 25)}...</h2>
                              <p>Rs:<span>  {Math.round(product.price + 50)}</span> {Math.round(product.price + 50 - 20)}</p>
                              <div className="rating"><span><AiFillStar /></span>{product.rating.rate}</div>
                              <div onClick={handleAdd(product)} className="cart"><BsBasket2 /></div>
                            </Card.Body>
                          </NavLink>
                        </Card>
                      </Col>
                    </>
                  )
                })
              }
              <h2>Flowers</h2>
              {
                products?.slice(8, 20)?.map((product, index) => {
                  return (
                    <>
                      <Col key={index} xs={12} md={3}>
                        <Card className='product'>
                          <Card.Img className='product__card' variant="top" src={product.image} height="200px" />
                          <Card.Body>
                            <h2>{product.title.slice(0, 45)}...</h2>
                            <p>Rs:<span>  {Math.round(product.price + 50)}</span> {Math.round(product.price + 50 - 20)}</p>
                            <div className="rating"><span><AiFillStar /></span>{product.rating.rate}</div>
                            <div className="cart"><NavLink to="/cart"><BsBasket2 /></NavLink></div>
                          </Card.Body>
                        </Card>
                      </Col>

                    </>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Shop