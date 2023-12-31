import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cabecalho = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Acadêmico</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/cursps">Cursos</Nav.Link>
                    <Nav.Link href="/displinas">Disciplinas</Nav.Link>
                    <Nav.Link href="/alunos">Alunos</Nav.Link>
                    <Nav.Link href="/professores">Professores</Nav.Link>
                    <Nav.Link href="/turmas">Turmas</Nav.Link>
                    <Nav.Link href="/salas">Salas</Nav.Link>
                    <Nav.Link href="/semrestres">Semestres</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Cabecalho