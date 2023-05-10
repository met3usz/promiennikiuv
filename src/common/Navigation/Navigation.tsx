import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavigationTitle, NavigationWrapper, StyledContainer } from './styled';

export function Navigation() {
  return (
    <NavigationWrapper collapseOnSelect expand="lg">
      <StyledContainer>
        <NavigationTitle>
          Sprzedaż, Serwis, Doradztwo Techniczne
        </NavigationTitle>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/" href="#home">
              Start
            </Nav.Link>
            <Nav.Link as={Link} to="/promienniki" href="#promienniki">
              Promienniki IRT
            </Nav.Link>
            <Nav.Link as={Link} to="/myjnie" href="#myjnie">
              Myjnie DRESTER
            </Nav.Link>
            <Nav.Link as={Link} to="/kontakt" href="#kontakt">
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </StyledContainer>
    </NavigationWrapper>
  );
}
