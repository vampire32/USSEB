/* eslint-disable @next/next/no-html-link-for-pages */
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
import { Transition } from "@headlessui/react";

const mystyle = {
	textDecoration: "none",
	marginLeft: "20px",
};

const NavBar = (props) => {
	const Color=props.color;
	const [isOpen, setIsOpen] = useState(false); 
	
	
	return (
		<>
			{/* <Navbar
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
							<Nav.Link >
								<Link href="/">
									Home
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
								<Link href="/UssEnterprisesICT">
									<a style={{ color: Color }}>USS Enterprises </a>
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
			</Navbar> */}

			<div>
				<nav
					className=" shadow-sm  w-full z-10"
					style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
				>
					<div className="w-full">
						<div className="flex items-center h-20 w-full">
							<div className="flex  mx-2  justify-evenly w-full">
								<div className="flex  flex-shrink-0 ">
									<Image src={LOgo} width={40} height={40} />
									<span className=" font-bold  cursor-pointer text-white">
										Universal Systemic Solution
									</span>
								</div>
								<div className="hidden md:block navbar-design">
									<div className="ml-10 flex items-baseline space-x-4">
										<a className="cursor-pointer text-white font-semibold px-3 py-2 text-md ">
											<Link href="/">Home</Link>
										</a>

										<a className="cursor-pointer text-white font-semibold px-3 py-2 text-md hover:font-black">
											<Link href="/Services">Services</Link>
										</a>
										<a className="cursor-pointer text-white font-semibold px-3 py-2 text-md hover:font-black">
											<Link href="/UssEnterprisesICT">USS Enterprises</Link>
										</a>

										<a className="cursor-pointer text-white font-semibold px-3 py-2 text-md hover:font-black">
											<Link href="/Furniture">Furniture</Link>
										</a>

										<a className="cursor-pointer text-white font-semibold px-3 py-2 text-md hover:font-black">
											<Link href="/OurClients">Our Clients</Link>
										</a>
										<a className="cursor-pointer text-white font-semibold px-3 py-2 text-md hover:font-black">
											<Link href="/OurTeam">Our Teams</Link>
										</a>
										<a className="cursor-pointer text-white font-semibold px-3 py-2 text-md hover:font-black">
											<Link href="/About">About</Link>
										</a>
										<a className="cursor-pointer text-white font-semibold px-3 py-2 text-md hover:font-black">
											<Link href="/Contact">Contact</Link>
										</a>
									</div>
								</div>
							</div>
							<div className="mr-10 flex md:hidden ">
								<button
									onClick={() => setIsOpen(!isOpen)}
									type="button"
									className="bg-yellow-500 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500  focus:ring-white"
									aria-controls="mobile-menu"
									aria-expanded="false"
								>
									<span className="sr-only">Open main menu</span>
									{!isOpen ? (
										<svg
											className="block h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									) : (
										<svg
											className="block h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>

					<Transition
						show={isOpen}
						enter="transition ease-out duration-100 transform"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="transition ease-in duration-75 transform"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						{(ref) => (
							<div className="md:hidden" id="mobile-menu">
								<div
									ref={ref}
									className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
								>
									<a className="cursor-pointer hover:bg-yellow-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										<Link href="/">Home</Link>
									</a>

									<a className="cursor-pointer hover:bg-yellow-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										<Link href="/Services">Services</Link>
									</a>

									<a className="cursor-pointer hover:bg-yellow-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										<Link href="/UssEnterprisesICT">Uss Enterprise</Link>
									</a>
									<a className="cursor-pointer hover:bg-yellow-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										<Link href="/Furniture">Furniture</Link>
									</a>

									<a className="cursor-pointer hover:bg-yellow-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										<Link href="/OurClients">Our Clients</Link>
									</a>
									<a className="cursor-pointer hover:bg-yellow-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										<Link href="/OurTeam">Our Teams</Link>
									</a>
									<a className="cursor-pointer hover:bg-yellow-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										<Link href="/About">About</Link>
									</a>
									<a className="cursor-pointer hover:bg-yellow-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										<Link href="/Contact">Contact</Link>
									</a>
								</div>
							</div>
						)}
					</Transition>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
