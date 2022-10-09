import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
  return (
		<footer className="footer-48201" data-aos="fade-in">
			<div className="container">
				<div className="row">
					<div className="col-md-4 pr-md-5">
						<a
							style={{ color: "#eda80e" }}
							href="#"
							className="footer-site-logo d-block mb-4"
						>
							USS ENTERPRISES
						</a>
						<p>
							USS Enterprises is one of the fastest emerging IT Solution
							provider serving in IT industry since 2015 with a wide range of
							our “Products and Services Portfolio.
						</p>
					</div>
					<div className="col-md">
						<ul className="list-unstyled nav-links">
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href="/Services">
									<a>Services</a>
								</Link>
							</li>
							<li>
								<Link href="/Portfolio">
									<a>Core Product</a>
								</Link>
							</li>
							<li>
								<Link href="/About">
									<a>About Us</a>
								</Link>
							</li>
							
						</ul>
					</div>
					<div className="col-md">
						<ul className="list-unstyled nav-links">
							<li>
								<Link href="/OurClients">
									<a>Our Clients</a>
								</Link>
							</li>
							<li>
								<Link href="OurTeam">
									<a>OurTeam</a>
								</Link>
							</li>
						</ul>
					</div>

					<div className="col-md text-md-center">
						<ul className="social list-unstyled">
							<li>
								<a href="#">
									<span className="icon-instagram">
										<BsLinkedin size="2em" />
									</span>
								</a>
							</li>
							<li className="ml-16">
								<a href="https://www.facebook.com/USS-Enterprises-101631834747302/" target="_blank" rel="noopener noreferrer">
									<span className="icon-facebook">
										<BsFacebook size="2em" />
									</span>
								</a>
							</li>
						</ul>
						<p className="">
							<Link href="/Contact">
								<a className="btn btn-primary">Contact Us</a>
							</Link>
						</p>
					</div>
				</div>

				<div className="row ">
					<div className="col-12 text-center">
						<div className="copyright mt-5 pt-5">
							<p>
								<small>
									&copy; 2022 All Rights Reserved - USS ENTERPRISES{" "}
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer