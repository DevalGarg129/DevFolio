import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <Navbar bg="success" variant="dark" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Deval Garg
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
