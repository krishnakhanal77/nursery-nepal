import React, { useState } from 'react'
import { Button, Container, Dropdown, DropdownButton, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { BsBasket2 } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const items = useSelector((state) => state.cart);

  const [term, setTerm] = useState('')

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(term)
  }
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">Navbar Scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <DropdownButton
                id="dropdown-button-dark-example2"
                menuVariant="dark"
                title="Dropdown button"
                className="upper-nav-drop"
              >
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </DropdownButton>
              <Form onSubmit={handleSubmit} className="d-flex">
                <Form.Control
                  type="text"
                  value={term}
                  placeholder="Search"
                  className="top-nav-search"
                  aria-label="Search"
                  onChange={(e) => setTerm(e.target.value)}
                />
                <Button type='submit' className='nav-search-btn' variant="outline-success"><FiSearch /></Button>
              </Form>

            </Nav>
            <div className="logo-links">
              <NavLink to="/cart"> <BsBasket2 /><span>({items.length})</span> </NavLink>
              <NavLink to="/register"><AiOutlineUserAdd /></NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

