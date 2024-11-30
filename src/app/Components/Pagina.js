import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"; 

export default function Pagina(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">inicío</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/usuario">Usuário</Nav.Link>
            <Nav.Link href="/Jogos">Jogos</Nav.Link>
            <Nav.Link href="/Categoria">Categoria</Nav.Link>
            <Nav.Link href="/Pedidos">Pedidos</Nav.Link>
            <Nav.Link href="/Vendedores">Vendedores</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="bg-secondary text-white text-center p-3">
        <h1 className="page-title">{props.titulo}</h1>
      </div>
      <Container>{props.children}</Container>
    </>
  );
}