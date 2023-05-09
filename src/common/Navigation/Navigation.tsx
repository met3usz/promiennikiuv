import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavigationTitle, NavigationWrapper } from './styled';

export function Navigation() {
  // return (
  //   <NavigationWrapper>
  //     <NavigationTitle>Sprzedaż, Serwis, Doradztwo Techniczne</NavigationTitle>
  //     <NavigationList>
  //       < to="/">Start</>
  //       < to="/promienniki">Promienniki IRT</>
  //       < to="/myjnie">Myjnie DRESTER</>
  //       < to="/kontakt">Kontakt</>
  //     </NavigationList>
  //   </NavigationWrapper>
  // );

  return (
    <NavigationWrapper collapseOnSelect expand="lg">
      <Container>
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
      </Container>
    </NavigationWrapper>
  );
}
