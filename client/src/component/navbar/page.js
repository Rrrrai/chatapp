import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const TopBar = () => {
  return (
    <div className=''>
        <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">Friend</p>
      </NavbarBrand>
    </Navbar>
    </div>
  )
}

export default TopBar