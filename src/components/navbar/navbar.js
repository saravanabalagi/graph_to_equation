import React, {Component} from 'react';
import {Container, Navbar, NavbarBrand, NavbarEnd, NavbarItem, NavbarMenu, NavbarStart} from "bloomer";
import logo from 'src/assets/logo-white.png';

class AppNavBar extends Component {
  render() {
    return (
      <Navbar className='is-fixed-top is-dark'>
        <Container>
        <NavbarBrand>
          <NavbarItem href='/'>
            <img src={logo} style={{ marginRight: 5 }} alt="Logo"/>
            {" Graph to Equation"}
          </NavbarItem>
        </NavbarBrand>
        <NavbarMenu>
          <NavbarStart>
            <NavbarItem href='/code'>Home</NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem href='/'>Donate</NavbarItem>
            <NavbarItem href='/about'>
              <span className="icon">
                <i className="fa fa-github"/>
              </span>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
        </Container>
      </Navbar>
    );
  }
}

export default AppNavBar
