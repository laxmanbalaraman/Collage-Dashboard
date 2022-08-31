import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

function TopBar() {
  return (
    <>
      <Navbar className="navbar" bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand className="nav-title" href="/">
            College Dashboard by Laxman B 19BCE1105
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
