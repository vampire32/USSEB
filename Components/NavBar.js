import React,{useState,forwardRef,} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import NavDropdown from "react-bootstrap/NavDropdown";
import LOgo from "../styles/images/logo.png";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

const NavBar = (props) => {
	const Color=props.color;
	
	
	
	return (
		<>
			<Navbar
				style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
				variant={props.theme}
				expand="lg"
			>
				<Container className="text-[props.color]">
					<Navbar.Brand href="#home">
						<div className="d-inline-block align-top">
							<Image alt="" src={LOgo} width="30" height="30" />
							<span className="text-[17px] ">Universal Systemic Solution</span>
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav ">
						<Nav className="justify-content-center flex-grow-1 navbar-design ml-auto align-items-center    ">
							<Nav.Link style={{ color: Color }}>
								<Link href="/">
									<a style={{ color: Color }}>Home</a>
								</Link>
							</Nav.Link>
							&nbsp;&nbsp;
							<Nav.Link style={{ color: Color }}>
								<Link href="/Services">
									<a style={{ color: Color }}>Services</a>
								</Link>
							</Nav.Link>
							&nbsp;&nbsp;
							<Nav.Link style={{ color: Color }}>
								<Link href="/Portfolio">
									<a style={{ color: Color }}> Core Product</a>
								</Link>
							</Nav.Link>
							&nbsp;&nbsp;
							<Nav.Link style={{ color: Color }}>
								<Link href="/Furniture">
									<a style={{ color: Color }}> Furniture</a>
								</Link>
							</Nav.Link>
							&nbsp;&nbsp;
							<Nav.Link style={{ color: Color }}>
								<Link href="/OurClients">
									<a style={{ color: Color }}>Our Clients</a>
								</Link>
							</Nav.Link>
							&nbsp;&nbsp;
							<Nav.Link style={{ color: Color }}>
								<Link href="/OurTeam">
									<a style={{ color: Color }}>Our Teams</a>
								</Link>
							</Nav.Link>
							&nbsp;&nbsp;
							<Nav.Link style={{ color: Color }}>
								<Link href="/About">
									<a style={{ color: Color }}>About Us</a>
								</Link>
							</Nav.Link>
							&nbsp;&nbsp;
							<Nav.Link>
								{" "}
								<Link href="/Contact">
									<a style={{ color: Color }}>Contact Us</a>
								</Link>
							</Nav.Link>
							<Nav.Link>
								{" "}
								&nbsp;&nbsp;
								<Link href="tel:+92-21-34390018">
									<button className="btn  btn-design" type="button">
										<a style={{ color: Color }}>Call Now</a>
									</button>
								</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
