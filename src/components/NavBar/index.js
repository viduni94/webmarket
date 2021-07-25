import { memo, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from 'assets/images/logo.png';
import styles from './navBar.module.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className={styles.main} color="light" light expand="md">
        <NavbarBrand className={styles.brandname} href="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/product-recommendations">Product Recommendations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/trend-analysis">Trend Analysis</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default memo(NavBar);
