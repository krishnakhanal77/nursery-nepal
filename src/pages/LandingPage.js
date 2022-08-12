import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import HomePageSlider from '../components/slider/HomePageSlider'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import { STATUS } from '../store/productSlice'
import { BsBasket2 } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

const LandingPage = () => {

  const dispatch = useDispatch();
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
        <Row className='homepage-hero'>
          <Col md={9} sm={12}>
            <HomePageSlider />
          </Col>
          <Col>
            <Row>
              <div className="card text-white border-0">
                <img src="https://cdn1.photostockeditor.com/t/2301/plant-green-plant-background-background-image.jpg" alt='imagess' height="210px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="container">
                    <div className="card-text">
                      <h5 className="card-title display-7 fw-bold mb-2">Grow Orchid</h5>
                      <p className="card-text  fs-7">Cras pulvinar lorem ipsum dolor conse</p>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
            <Row >
              <div className=" mt-4 card text-white border-0">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxAPDxANDw0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVIT0hJykrLi4uFx8zPzMuNygtLi0BCgoKDg0OFxAQFTcfHSYrLSsrLS8rLS0tLi41Li0tLystNzArKy0rLy0rNysvLTUtLysrLSs3LTEtLSstLSstLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAgEDBQQGBwj/xAA8EAACAgEDAQUFBQYEBwAAAAAAAQIDEQQSIQUGEzFBURQiYXGBBxUykaEjQlJysvAzgqKxJENiY8HR4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIxEBAQACAQMEAwEAAAAAAAAAAAECESEDElExMkHwBCJhE//aAAwDAQACEQMRAD8AzYRLoxCES2MTk6CMS6MQhEtUQCMS2KCMSxRAiKLYoFEsUQCMRtoyQ6iAqRaokKJZBALtBItwRgqJUSVEmJYkBXgEixxISKIUQ2j4BBENEFhDRQmBlEEh0AqRLROCcAVtC4LcENAJghxLMCsqKsDKIyQ2AKJozdbA1poz9WiVY87ZXywOmyPLAztVEIlkYhCJdGJFEYlsUEIlqiBEUWqJEYlsEBCRbCIKJZFAEYjbRkhkghVEsSJSJwUCQbSUOkAu0ZDJBgBsEbSYjNFQm0hRLMAkAuCGixInaUVJEsbaDQConAYJSAhogcjAEJCSiWtCyRUVoYlIMAVyRwatGjI4dSiVYxpx5YFk48gYacyRbCIRiWxQExiXQREUWRiBKiOokxiWKIBtGiiUh8BBFDJAkOkUQkMkMkTtAjaEUMkSkVAkNgEhkgEwSNgMACDAYABkiWESWUKkTtJSHSCKdg20twRgCraCiWuJCiUVtEOJdtFcQKGgwWNEYApkjj1K4O+aOPUxJVjInHkCyceSTm054xHigjEsUSomKLYoitFiQDQRbFCwRakURgfBCLEgIihkTgEgGSGwRgZIqCKGwTFEsBcDoVDJASkDQ0SWVCYI2jYACEGB8E4AVIfAJDYAMHJ1PqFWmqnffNV1VpbpPL5fCSS5bb8kduD5127ulqtXDRLYoUOqWJyjGE7ppPLz4rEkvhufjkW6S3T2XRer0anSrVxlKFc5yhCM8qWU8bXH14b49TRhhrK5TWU/Jo+a9aa0/TaYxbqS12J02Qff02RqlurnHwnJNcSeE47fTLbsv2xdNjq1HePTyjvjLiU6pYyspeUvTyyvLLM93wzL5fSMA0eM1Hb5PcqqHxHKlbYv1jH/ANmfT2z1e7nupLG7a61GKXnzlYXjy2LnId8e/lEVxMvs71+Os7xJJSpUMtNuMt2fDPOOP1NiSNSyzcal255I5NQjvaOS9CqypLkCyUeQMNOWKLIxIiiyKAmKLYohIeKKGih0QiyKCISHSBIdIAQ2Aih0ihdoyROCcAAMkhoAih8CodMCUDBMllRCQbSUOkAqRTrarZRxVONcsP3nDc/o/BfkzpwMhZsfP+pdndZJuUpTufPMpOTa+HL/APBzaCi+rhWXVS3bUlOUYpuain6Ne9D9T6Uked7U6uytZlCNeni1KWqcI3xXopxbi4848Po0zlcNcsTpW3im6X1xvbG7lZdbuSwo2xwpKf181/8ATy/bXSKHUHOdc7KtRTVPFcttsZRWxyr/AOpKKePPk1un9Zol3dduytWajvY3Vy36K9yTzCNn7km3F7JeniyvtlRJUVykpbKmnGyMverTXMG/LGE0/DxXpnfujN3OMmB2r6hKzSUpW06hwtzXqNmbO6UMJzjzicc45z48Hk8tNRlJtvLsnJ87mvP+/It6p1Rzm47lJVvO9RUJSfk5Y8WcmnolbZCLi271ZCteH7RJpLHzS/MxON2usw79SO2vWQjt3tpKDziLlmCePr4tFid2ok6qa5bU8OC96Tai5KU5L4J/D058Z6H2ds1dNd1s3VVRdbVZO3dulUsPbWvP8Uo+ia+hr6rWQrgtPpt1On2xhNygo2XSilFSsnuXGPJ4Ryzz51PV6cPxcbzfR7P7P+j9xpu9lKMrtTtctklONcI52wyuG+Xn8vI9O0eb7Eyrp0lcJWVq22cru6c8zhvxtg0+c4S+uT0rR6cPbHDPHttkVyRy3o7GjmvRplmSjyBZKPIGGnDBFsUJFFsEAyRZFERRYkESkOkEUOkUCQ6FQ6ABkQNEAJTDBIABBIEDIglBEjIUdFEjRFQ6AnBKQJC2XQh+OUIfzyUf9wLEjxP2taiP3e6FJq62yucK4rLnCEsyz8PD64PUrrekzj2nTZxn/Gh4eucnyf7U7sa/fKWa7KqnTOD3RdaWGovwb3buPivDJLfDp08Zb+3EeV6X1a6pSri5RTTwp+9VKWPwzi+Gn+nB9A7Ldpo6ur2VuEbLVOjudRvlVKfG1N+OXy/HLw/Fx5+e6qpXQVkU+FLcsPvJXLMspLOE4pvPrkr6fZGTzhqNn7K1xfvQnnNdkXjx3YfzSOWXmOvUw3+t58ffvDY6po64zjHuXVZRKUdZXCfeybjJPnzXDPTaTp8NHCT10U5aXUx1HT1K2Nc5Lb+9lr3M7WllZcX5JmO9XdqJw1l3d2Tjs9qde7Eqo6SCsVifg/cnGT8PxPyMfrPV7NRJ3WP3W/dWMe54JKPnwkvRJJcHHPp3K9svC9LUm69Nr+0dmrnGPd3Qk9yh7PqJWKTS4T2OMX9PAv6f2XtslGWo1tcI7uKldPVzjJc/gy+fhleHgzyHZvTPW6unS+9GvUTVc3n9psWZT5/ljL4fA/QHT+m1aeChTCMIpY4XLX9+XgdsOhjiZ/keHF0ToOn0qUq05WOOJXWczkvF8eEfokabGYrO7y27K0UWo6GVWIIz5Q5AtlHkCaVlxRbFERRbFEURRZFAkOkBKQ6RCHwAJDJAkMkAuCUhsAEQNgEgAgCQwBBKJwMolEJDpEYHQBgdIgZAcHXK9VKlw0cq4WzeHbY3iqHm4rDzL6HhLfs51k5OdmposnLDlKyV85Sa822j6ZEdDSzLT5Vqeweuj+CNFiXK2X4s3eq3KKR5rq3R9RVxqdNbVFNpNwlJc+anFbfLyZ9+SBxymmk0+Gnymiaa/wBK/N+ipdMlJZcbFOFq38xjhcpf5v1ObuIRc7FmKTxbXDmpbs7UpZzjhc/kfSftR7OafTaf2qjFO+2FcqV+GTll5j/D4eHh8j5h0/ULF0W85ULF5rMG0v6/p4k7Odu06suMlb/SupOrQa+9157yVej2uWyv9upuTS/FKTipLx4T9WeThCVuMv3o+65SwouPkvn4noq7YS6HOClBW/fMbbK8+/3S0ripeuN3GfUzekdM1Oons09U7rFjMa4KW35t+7D5senEccst3+PV/Z1po6fVPUXbd9MZxoqcX4yW2U1LwzhtYznl8H1OvtHS8pxtU1+4oqTfy9TzHZn7P7YyjbrreEk/ZaZyeXjwsszz8l+Z7yjR1V/4ddcP5IKLGMynrUtxvw46+qVSeMyg0k2rIOGEzq8VlYafg1yi2cc+OH8+RFWksJJLOeFjk2zdEEkixoVoI5ZR5AtaJAx4xLYoiKLFEipSHSBIeKAEh0iUhkgFSGRKQ2AFwTgbBKQFeCcD7QwAmASH2hgCEhoolIlICME4JSGSKISGihkh1EIWKLEgSHSAEjxj7Z2YknTFSTwnCSlHHx3YPbKJ8g1PuzkvSUv9yVYt7T6rUdQhGmyajSpqfu1RU4yw1lNfN8ZPE0di9crG0q5Qe5Z343Ra4eMfJnttNc/ga+mufA2tryum7KaxaB6NPKtveolXmEaoWQjmMs43ScmoxxworL5Zr9Oo7SVxUKXoK4LGIbKYwX0jBHo9O5ecuP1Rs6NfEsiWsTp+n7SSa7yfRMeeVqXL8orB67RaHUxrctTPTuay37PCyMGv8zydWjOy78EvkVlkNCtFziK4gUyQjR0OAuwDlcQOjYAGJFFiREYliRlpKQ6QKI6QAkMkSkOogKkNgZRG2gIok7SxRJ2gV7SNpcohtAq2gol2wNgFaiG0tUSdpRVgnBYok7QhEh4oNo0UBMUWRQRQ6RQRR8k6jFKyxf8Acn/Uz6/FHybqixfcvS61c/zMzVjm08OTT06fBxaVGtpqvoSFdemi/Pn44wbehgZVFbNfSJ8GozW3pY8I67V7kvkcumXB1z/C/wC/MDg2kOJdgjBRTtIcS/aRtKijaBdtADzsYliiEUWRMNhRHUQih0AKIyiSh0gIURlElDoIVRGURkMgE2k7R0iQE2E7CzBKQFWwnYWYJwUVKBOwtwGAKthKgW4DaAiQ6RO0ZIAij5J1t/8AE3r01F39bPriPjfaWe3WaheftFvHp7zFWLNO/DxNvSyR53RW5x5/FeRu6WXy+hCtjTmvo5GHppGvonjn4/3k1GW7p1k6p/hf9+ZyaaXB1OXukFGCMDAULgMEgAYAMgB5lTQ6sRmKbGUmZaaisQytRlqTDLA1lahlcvUyPeGxL4ga/foZahGPiXxGUJfEDXWpRPtSMju5+rJ7mXqwNf2uPqHtsfUyO4l8Q9mfxA1/b4+pH3jH1Mr2Vh7GwNR9SgR96R9TN9hYewSA0fvWJH3vH4mf93yD7tmB3vrK9GQ+uL+FnD91z9Q+6p+qA7H2gS/cf6CvtIv4H+Zy/dNnqgfRrH5xHIvl2oS/5f8AqPmvbXVxeplqI4ULsSms5cLEsP6PGfzPoEuz03/D+pn63sKruJqH+pA4fP8Ap3U48e94YPS6PqEJeGC1/ZNHxhbKv+Wbx+TLafsttj+HWzXzhGReB36XUceCzn18TU0+oxg4NL2B1EfHXS+lKz/uael7GSi8y1upl6qMaop/mmEaWm1a+BpUWZWfyOXSdFrhjmybXnZLP6LC/Q0VWAmCGi3aGwCjAMv7sO7A5wL9iAbHjFQPGgAIqyNIypAAHVJZGgAAsVAyqRAAOqhlUABDKlDqlEAA6pXoOqUAASqRlUgABlSiVSgABu5RPdL4AADKsdQAAJwG0AAnaSogAEpE7QACdpOwAANobQACcBgAAMAAAf/Z" height="210px" alt="background" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="container">
                    <div className="card-text">
                      <h5 className="card-title display-7 fw-bold mb-2">Grow Orchid</h5>
                      <p className="card-text  fs-7">Cras pulvinar lorem ipsum dolor conse</p>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>

        <Row className='mt-5'>
          {
            products?.slice(0, 4)?.map((product, index) => {
              return (
                <>
                  <Col key={index} xs={12} md={3}>
                    <Card className='product'>
                      <Card.Img className='product__card' variant="top" src={product.image} height="200px" />
                      <Card.Body>
                        <h2>{product.title.slice(0, 45)}...</h2>
                        <p>Rs:<span>  {Math.round(product.price + 50)}</span> {Math.round(product.price + 50 - 20)}</p>
                        <div className="rating"><span><AiFillStar /></span>{product.rating.rate}</div>
                        <div className="cart"><BsBasket2 /></div>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )
            })
          }
        </Row>
        <div className="banners">
          <Row>
            <Col>
              <div className="banner">
                <div className="banner__content">
                  <h6>Top Staff Pick</h6>
                  <h1>Shop Cactus</h1>
                  <p>Proin interdum magna primis id consequat dictum</p>
                  <NavLink to='/cart'><Button>Shop Now</Button></NavLink>
                </div>
              </div>
            </Col>
            <Col>
              <div className="banner2">
                <div className="banner__content">
                  <h6>Top Staff Pick</h6>
                  <h1>Shop Cactus</h1>
                  <p>Proin interdum magna primis id consequat dictum</p>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </Col>
          </Row>
          <div className="full-banner">
            <div className="full-banner__content">
              <h1>Living Things Grows</h1>
              <p>You have no car & Are you <br />
                ready to grow? come & shop with us!
              </p>
              <div className="price">Price from: <span>Rs.5600.</span></div>
              <div className="buttons">
                <Button>Shop Now</Button>
                <Button>View More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            {products?.length ?
              products?.slice(5, 13)?.map((product, index) => {
                return (
                  <>
                    <Col key={index} xs={12} md={3}>
                      <NavLink to={`/products/${product.id}`}>
                        <Card className='product'>
                          <Card.Img className='product__card' variant="top" src={product.image} height="200px" />
                          <Card.Body>
                            <h2>{product.title.slice(0, 45)}...</h2>
                            <p>Rs:<span>  {Math.round(product.price + 50)}</span> {Math.round(product.price + 50 - 20)}</p>
                            <div className="rating"><span><AiFillStar /></span>{product.rating.rate}</div>
                            <div onClick={() => handleAdd(product)} className="cart"><BsBasket2 /></div>
                          </Card.Body>
                        </Card>
                      </NavLink>
                    </Col>
                  </>
                )
              })
              : <>Loading... </>
            }
          </div>
        </div>
      </Container>
    </>
  )
}

export default LandingPage;

