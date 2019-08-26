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
            <NavbarItem href='https://github.com/saravanabalagi' style={{color: '#ffdd57'}}>
              Made with &#160;
              <span className="icon" style={{color: '#FF0000'}}>
                <i className="fa fa-heart"/>
              </span>
              &#160; by Saravanabalagi
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem target='_blank' href='https://twitter.com/saravanabalagi'>
              <span className="icon">
                <i className="fa fa-twitter"/>
              </span>
            </NavbarItem>
            <NavbarItem target='_blank' href='https://linkedin.com/in/saravanabalagi/'>
              <span className="icon">
                <i className="fa fa-linkedin"/>
              </span>
            </NavbarItem>
            <NavbarItem href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6VHRX2LP5D5KY&source=url'>Donate</NavbarItem>
            <NavbarItem target='_blank' href='https://github.com/saravanabalagi/graph_to_equation'>Fork</NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
        </Container>
      </Navbar>
    );
  }
}

export default AppNavBar
