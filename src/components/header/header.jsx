import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Toggle from '../toggle/toggle';
import { Ctx } from '../../context/context';
import './header.css';

const Header = () => {
  const { pathname } = useLocation();
  const context = useContext(Ctx);

  const handleThemeChange = (e) => {
    context.setGlobalState((state) => {
        return {...state, theme: e.target.checked ? "dark" : "light"}
    })
  };

  console.log("header-rerender")

  return (
    <Navbar expand="lg" variant={context.globalState.theme === "dark" ? "dark" : "light"} style={{ backgroundColor: context.globalState.theme === "dark" ? '#212529' : '' }}>
      <Container fluid>
        <Navbar.Brand>GekoClientApi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center justify-content-between w-100">
            <div className="d-flex">
              <Link
                to="/"
                className={`nav-link ${pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </div>
            <Toggle label={`${context.globalState.theme}-theme`} labelColor={context.globalState.theme === "dark" ? "white" : "black"} onChange={handleThemeChange} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
