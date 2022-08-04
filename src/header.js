import React from "react";

//부트스트랩
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
const Header= ()=>{
    return(
        <Navbar bg="light" expand='lg'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link href="#">Memo.js</Nav.Link>
                    <Nav.Link href="#">AboutUs</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header