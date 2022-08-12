import React from 'react'
//import { NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const LowerNab = () => {
  return (
    <>
      <nav className="lower-navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav lower-nav-items">
              <DropdownButton
                id="dropdown-button-dark-example2"
                menuVariant="dark"
                title={<><RiBarChartHorizontalLine/>Categories</>}
                className="lower-nav-dropdown"
              >
                <Dropdown.Item href="#/action-1">
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </DropdownButton>
              <li className="nav-item active">
                <NavLink className="nav-link active" to="/">Home <span className="sr-only"></span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">Shop</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">Pages</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">Blogs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default LowerNab