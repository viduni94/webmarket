import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
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
              <Link className={styles.navLink} to="/product-recommendations">
                Product Recommendations
              </Link>
            </NavItem>
            <NavItem>
              <Link className={styles.navLink} to="/trend-analysis">
                Trend Analysis
              </Link>
            </NavItem>
            <NavItem>
              <Link className={styles.navLink} to="/price-analysis">
                Product Price Analysis
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default memo(NavBar);
