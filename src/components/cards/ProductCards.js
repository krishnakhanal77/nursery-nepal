import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import {BsBasket2} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { add } from '../../store/cartSlice'
import { fetchProducts } from '../../store/productSlice'

const ProductCards = (props) => {

  // const dispatch = useDispatch();

  // const { data: products, status } = useSelector((state) => state.product);

  // console.log("this is product", products)

  // useEffect(() => {
  //   dispatch(fetchProducts())
  // }, [dispatch])

  // const handleAdd = (product) => {
  //   dispatch(add(product))
  // }

 // const { data: products, status } = useSelector((state) => state.product);

 // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts())
  // }, [dispatch])

  // const handleAdd = (product) => {
  //   dispatch(add(product))
  // }


  return (
    <>
    <Card className='product'>
      <Card.Img className='product__card' variant="top" src={props.Image} height="200px" />
      <Card.Body>
        <h2>{props.name}</h2>
        <p>Rs:{props.price}</p>
        <Button onClick={props.handleAdd} className='product__card__btn' variant="primary"><NavLink to='/cart'>Buy</NavLink></Button>
        <Button className='product__card__cart' variant="primary"><BsBasket2/></Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ProductCards;
