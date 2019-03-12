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
          <NavbarStart
            className="navbar-start"
            style={{flexGrow: 1, justifyContent: 'center'}}>
            <NavbarItem href='/' style={{color: '#ffdd57'}}>
              Made with &#160;
              <span className="icon" style={{color: '#FF0000'}}>
                <i className="fa fa-heart"/>
              </span>
              &#160; by Saravanabalagi
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem href='https://twitter.com/saravanabalagi'>
              <span className="icon">
                <i className="fa fa-twitter"/>
              </span>
            </NavbarItem>
            <NavbarItem href='https://github.com/saravanabalagi'>
              <span className="icon">
                <i className="fa fa-github"/>
              </span>
            </NavbarItem>
            <NavbarItem href='https://linkedin.com/in/saravanabalagi/'>
              <span className="icon">
                <i className="fa fa-linkedin"/>
              </span>
            </NavbarItem>
            <NavbarItem href='/'>Donate</NavbarItem>
            <NavbarItem href='https://github.com/saravanabalagi/graph_to_equation'>Fork</NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
        </Container>
      </Navbar>
    );
  }
}

export default AppNavBar
