import React from "react";
import {
  Col,
  Container,
  Navbar,
  Row,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Image from "next/image";
import mindevlogo from "../assets/mindevtran.png";
import Link from "next/link";

import { useRouter } from "next/router";

const Layouthead = () => {
  const path = useRouter().asPath;

  return (
    <Container className="mindev_header" fluid>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <Image src={mindevlogo} alt="mindev logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bars" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex search">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <i className="fas fa-search"></i>
            </Button>
          </Form>
          <ul className="navigations">
            <li className={`navigation ${path === "/" && "active"}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`navigation ${path === "/works" && "active"}`}>
              <Link href="/works">Works</Link>
            </li>
            <li className={`navigation ${path === "/services" && "active"}`}>
              <Link href="/services">Services</Link>
            </li>
            <li className={`navigation ${path === "/about" && "active"}`}>
              <Link href="/about">About us</Link>
            </li>
          </ul>
        </Navbar.Collapse>
        <div className="contact">
          <button>Contact Us</button>
        </div>
      </Navbar>
    </Container>
  );
};

export default Layouthead;