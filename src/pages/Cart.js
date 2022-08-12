import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { MdDelete } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { remove } from '../store/cartSlice';

const Cart = () => {

  const product = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const handleRemove = (cartItemId) => {
    dispatch(remove(cartItemId))
  }
  return (
    <>
      <Container className='mt-4'>
        {product.length ?
          product.map((cartItem) => {
            return (
              <>
                <div key={cartItem.id} className="cart-view m-2">
                  <div className="cart-image">
                    <img src={cartItem.image} style={{ height: '80px', width: '80px', borderRadius: '50%' }} alt={cartItem.name} />
                  </div>
                  <div className="cart-item-name">
                    <p>{cartItem.title.substring(0, 15)}...</p>
                    <p>Product id:{cartItem.id}</p>
                  </div>
                  <div className="cart-item-color">
                    <span>{cartItem.category}</span>
                  </div>
                  <div className="cart-counter">
                    <span >+</span>
                    <span>3</span>
                    <span  >-</span>
                  </div>
                  <div className="cart-price">
                    <span>Rs. 45
                      {/* {Math.round(cartItem.price * quantity)} */}
                    </span>
                  </div>
                  <div className="cart-item-del" onClick={() => handleRemove(cartItem.id)} >
                    <MdDelete />
                  </div>
                </div>
              </>
            )
          })
          :
          <div className="empty-cart">
            Your cart is Empty please select our product

          </div>


        }
        <div className="cart-bottom">
          <div className="back-cart">
            <NavLink to="/shop"><Button style={{ backgroundColor: 'green', border: 'none' }} >Back to Shop</Button></NavLink>
          </div>
          <div className="cart-total">
            paiso {/* <span>Total: Rs.{Math.round(price)}</span> */}
          </div>

        </div>
      </Container>
    </>
  )
}

export default Cart