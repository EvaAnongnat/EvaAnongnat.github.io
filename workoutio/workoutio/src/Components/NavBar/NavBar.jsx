import React, { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarStyle';
import Dropdown from './Dropdown'
const NavBar = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>WORKOUTIO</h1>
        </NavLink>
        <Bars onClick={() => setOpen(true)} />
        <Dropdown isOpen={open} handleClose={() => setOpen(false)} />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Profile
          </NavLink>
          <NavLink to="/" activeStyle>
            Activity
          </NavLink>
          <NavLink to="/activity_list" activeStyle>
            History
          </NavLink>
          <NavLink to="/" activeStyle>
            Settings
          </NavLink>
          <NavBtnLink to="/">Log out</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
        <NavBtnLink to="/logout">Log out</NavBtnLink>
      </NavBtn> */}
      </Nav>
    </>
  );
}

export default NavBar;