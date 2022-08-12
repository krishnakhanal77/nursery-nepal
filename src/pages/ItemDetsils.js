import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsId } from '../store/itemSlice';
//import { AiFillStar } from 'react-icons/ai'
import { STATUS } from '../store/itemSlice';

const ItemDetsils = () => {

  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProductsId(id))
  }, [dispatch, id])
  const { item: products, status } = useSelector((state) => state.item);
  const [qty, setQty] = useState(1)
  const handleAdd = () => {
    setQty(qty + 1);
  }
  const handleSub = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }

  }

  if (STATUS.LOADING === status) {
    return (
      <><h2>Loading...</h2></>
    )
  }
  if (status === STATUS.ERROR) {
    return (
      <><h4>SOMETHIUNG WENT WRONG</h4></>
    )
  }
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col>
            <div className="items">
              <img src={products.image} alt="ree" />
            </div>
            <div className="items__sub-image">

            </div>

          </Col>
          <Col>
            <div className="item-details">
              <div className="item-details__title">
                <h2>{products.title}</h2>
              </div>
              <div className="item-details__description">
                <p>{products.description}</p>
              </div>
              <div className="item-details__rating">
                {/* <h5><AiFillStar /><span>{products.rating.rate}</span>/5</h5>
               <h6>Total:<span>{products.rating.count}</span></h6>  */}
              </div>
              <div className="item-details__price">
                <p>Price: Rs<span>{products.price * qty}</span> </p>
              </div>
              <div className="item-details__qty">
                <div onClick={handleAdd} className="symbol">+</div>
                <div className="val">{qty}</div>
                <div onClick={handleSub} className="symbol">-</div>
              </div>
              <div className="item-details__buttons">
                <Button>Buy</Button>
                <Button>Add Cart</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default ItemDetsils