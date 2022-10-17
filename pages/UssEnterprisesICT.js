import Head from "next/head";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import AOS from "aos";
import "aos/dist/aos.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import Image from "next/image";
import NavBar from "../Components/NavBar";
import Script from "next/script";

import SA from "../styles/images/sa-min.jpg";
import computing from "../styles/images/user-computing.jpg";
import enterprise from "../styles/images/enterprise-computing.png";
import software from "../styles/images/software.png";
import swa from "../styles/images/swa-min.jpg";
import min from "../styles/images/-min1.jpg";

import Solor from "../styles/images/solar.jpg";
import Attendence from "../styles/images/bio.jpg";
import Printer from "../styles/images/printer.jpg";
import AIO from "../styles/images/aioscanner.jpg";
import PhotoMachine from "../styles/images/photocopier.jpg";
import Grid from "../styles/images/2.jpg";
import Energy from "../styles/images/649853.png";
import UPS from "../styles/images/558385.png";
import Generator from "../styles/images/3118354.png";
import Icon from "../styles/images/709605.png";
import Clentt1 from "../styles/images/client5.jpg";
import Clentt2 from "../styles/images/client7.jpg";
import Clentt3 from "../styles/images/client8.png";
import Clentt4 from "../styles/images/client13.png";
import Clentt5 from "../styles/images/client14.jpg";
import Clentt6 from "../styles/images/client7.jpg";
import Clentt7 from "../styles/images/client14.jpg";

import ContactForm from "../Components/ContactForm";
import CEO from "../Components/CEO";
import Clients, { Button } from "../Components/Clients";
import { Lines } from "react-preloaders";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";
import Acear from "../styles/images/acerlogo-removebg-preview.png";
import Lenveo from "../styles/images/Lenvove.png";
import Microsoft from "../styles/images/download-removebg-preview.png";
import Firewall from "../styles/images/firewalls.png";
import Link from "next/link";

export default function UssEnterprisesICT() {
	const [loading, setloading] = useState(false);
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
		setloading(true);
		setTimeout(() => {
			setloading(false);
		}, 10000);
	}, []);

	return (
		<div>
			<Head>
				<title>USS Enterprise An ICT Solution C​ompany</title>
				<meta
					name="description"
					content="USS Enterprises is one of the fastest emerging IT Solution
				 provider serving in IT industry since 2015 with a wide range of our “Products and Services Portfolio."
				/>
				<meta
					property="og:title"
					content="USS Enterprise An ICT Solution C​ompany"
				></meta>
				<meta
					property="og:description"
					content="USS Enterprises is one of the fastest emerging IT Solution
				 provider serving in IT industry since 2015 with a wide range of our “Products and Services Portfolio."
				/>
				<meta
					property="og:url"
					content="https://ussseb.com/UssEnterprisesICT"
				></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:image"
					content="https://mywebsite.net/assets/opengraph/theogimage.jpg"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Script
				className="u-script"
				type="text/javascript"
				src="../Components/jquery.js"
			/>
			<Script
				className="u-script"
				type="text/javascript"
				src="../Components/nicepage.js"
			/>

			<div
				className="u-body u-overlap u-overlap-contrast u-overlap-transparent u-xl-mode"
				data-lang="en"
			>
				<section
					className="u-align-left u-clearfix u-image u-shading u-section-1"
					id="carousel_5ad0"
					data-image-width="1782"
					data-image-height="1080"
				>
					<NavBar theme="dark" color="white" />
					<div className="u-clearfix u-sheet u-sheet-1">
						<h1 className="u-align-left u-text u-text-palette-3-base u-text-1">
							<b>Universal Systemic Solution Enterprise</b>
							<br />
							<b style={{ color: "white" }}>an ICT solution c​ompany</b>
						</h1>
						<p className="u-text u-text-body-alt-color u-text-3">
							USS Enterprises is one of the fastest emerging IT Solution
							provider serving in IT industry since 2015 with a wide range of
							our{" "}
							<b>
								<i>
									“
									<span className="u-text-palette-3-base">
										Products and Services Portfolio.
									</span>
								</i>
							</b>
						</p>
						<a
							href="tel:+92-21-34390018"
							className="u-active-white u-border-2 u-border-hover-white u-border-white u-btn u-button-style u-hover-white u-none u-text-active-black u-text-body-alt-color u-text-hover-palette-1-base u-btn-1"
						>
							Call Now
						</a>
						<p className="u-text u-text-body-alt-color u-text-4">
							Consultancy with Excellency.
						</p>
					</div>
				</section>
				{/* <section
					className="u-align-right u-clearfix u-grey-5 u-section-2 backgroundimage"
					id="sec-227e"
					data-aos="fade-in"
				>
					<div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
						<div className="u-container-style u-expanded-width-xs u-group u-image u-image-tiles u-image-1">
							<div className="u-container-layout u-container-layout-1"></div>
						</div>
						<div className="u-expanded-width-xs u-image u-image-default u-image-2">
							<Image src={SA} alt="USS Enterprise ICT company" />
						</div>
						<div className="u-list u-list-1">
							<div className="u-repeater u-repeater-1">
								<div className="u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-1">
									<div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
										<div className="u-icon u-icon-1">
											<Image src={Acear} alt="USS Enterprise ICT company" />
										</div>
										<h4 className="u-align-center u-text u-text-1">
											<b>
												<i>
													ACER<span></span>
												</i>
											</b>
										</h4>
									</div>
								</div>
								<div className="u-align-center u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-2">
									<div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
										<div className="u-icon u-icon-circle  u-icon-2">
											<Image src={Lenveo} alt="USS Enterprise ICT company" />
										</div>
										<h4 className="u-text u-text-2">
											<b>
												<i>LENOVO</i>
											</b>
										</h4>
									</div>
								</div>
								<div className="u-align-center u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-3">
									<div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
										<div className="u-icon u-icon-circle  u-icon-3">
											<Image src={Microsoft} alt="USS Enterprise ICT company" />
										</div>
										<h4 className="u-text u-text-3">MICROSOFT</h4>
									</div>
								</div>
								<div className="u-align-center u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-4">
									<div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
										<div className="u-icon u-icon-circle  u-icon-4">
											<Image src={Firewall} alt="USS Enterprise ICT company" />
										</div>
										<h4 className="u-text u-text-4">Firewalls</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}
				<section
					style={{
						backgroundImage: "linear-gradient(220deg,#db545a, #232b79 50%)",
					}}
					className="u-align-center u-clearfix u-grey-5 u-section-3"
					id="carousel_082c"
					data-aos="fade-in"
				>
					<div className="u-align-center u-clearfix u-sheet u-sheet-1">
						<h2 className=" text-white u-text u-text-default-lg u-text-default-md u-text-default-sm u-text-default-xl u-text-1 mt-10">
							Our Offering Services
						</h2>
						<div
							className="u-border-2 u-border-palette-1-base u-shape u-shape-svg u-text-grey-5 u-shape-1"
							data-aos="fade-up"
						>
							<svg className="u-svg-link" viewBox="0 0 160 50">
								<use
									xmlnsXlink="http://www.w3.org/1999/xlink"
									xlinkHref="#svg-0c8e"
								></use>
							</svg>
							<svg
								className="u-svg-content"
								viewBox="-1 -1 162 52"
								x="0px"
								y="0px"
								id="svg-0c8e"
							>
								<path
									d="M133,26.7c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,22
	c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0
	l-3.8,4.7C146.9,20.2,142.3,20.2,133,26.7z M133,10.8c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0
	c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,6.1c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0C75.1-2,85.9-1.6,97,6.1
	c11.4,8,20.3,8.3,32.2,0C140.8-2,148.4-2,160,6.1l-3.8,4.7C146.9,4.3,142.3,4.3,133,10.8z M32.2,38c11,7.6,19,8.5,31.3,0
	c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0l-3.8,4.7c-9.3-6.5-13.9-6.5-23.3,0
	c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,38
	C11.2,30.2,20.6,29.9,32.2,38z"
								></path>
							</svg>
						</div>
						<div
							className="u-align-center-sm u-align-center-xs u-list u-list-1"
							data-aos="slide-up"
						>
							<div className="u-repeater u-repeater-1">
								<div className="u-align-left u-container-style u-list-item u-repeater-item u-white u-list-item-1">
									<div className="u-container-layout u-similar-container u-container-layout-1">
										<h2 className="u-text u-text-2">
											END USING Computing<span></span>
										</h2>
										<p className="u-text u-text-3">
											Desktops, Laptops, AIO PCs, Tablets, Smart Devices, Thin
											Clients, Zero Clients etc
										</p>
										<div className="u-align-center u-image u-image-contain u-image-default u-image-1">
											<Image
												src={computing}
												alt="USS Enterprise ICT company"
												width="928"
												height="449"
											/>
										</div>
									</div>
								</div>
								<div className="u-align-left u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-2">
									<div className="u-container-layout u-similar-container u-container-layout-2">
										<h2 className="u-text u-text-4"> ENTERPRISE Computing</h2>
										<p className="u-text u-text-5">
											&nbsp; Servers, NAS/SAN/Hybrid Storages, Tape Libraries,
											Backup &amp; Archiving solutions, Virtualization
											Solutions, Core Networking, Data Centers Designing &amp;
											Implementation&nbsp;
										</p>
										<div className="u-align-center u-image u-image-default u-image-2">
											<Image
												src={enterprise}
												alt="USS Enterprise ICT company"
												width="486"
												height="237"
											/>
										</div>
									</div>
								</div>
								<div className="u-align-left u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-3">
									<div className="u-container-layout u-similar-container u-container-layout-3">
										<h2 className="u-text u-text-6">SOFTWARE SOLUTION</h2>
										<p className="u-text u-text-7">
											&nbsp; Software designing as per requirement with
											consultancy.&nbsp;&nbsp;
										</p>
										<div className="u-align-center u-image u-image-default u-image-3">
											<Image
												src={software}
												alt="USS Enterprise ICT company"
												width="450"
												height="382"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className="u-image u-image-circle u-preserve-proportions u-image-4"
							alt=""
							data-image-width="800"
							data-image-height="800"
							data-aos="zoom-in"
						></div>
						<p
							style={{
								textAlign: "justify",
								fontSize: "18px",
								color: "white",
							}}
							data-aos="zoom-in"
						>
							USS Enterprises is committed to the provision of various
							Information & Communication Technology and other equipments Sales
							and services such as Hardware, software, Local area Network
							solutions & Optical fiber installations and configurations,
							Security Equipment’s Video Surveillance, Walk, Through Gates,
							HESCO Bags, Hand Held Detecting System, Explosive Detective, CCTV
							Solution, LED Walls, UPS, Generators, etc. The company has been in
							operation since 2012. The key personnel in the organization have a
							combined experience of more than 15 years in the information &
							Communication Technology. We are able to supply and install a
							world renowned brand of below equipments.
						</p>
						<a
							href="#"
							className="u-btn u-btn-rectangle u-button-style u-color-scheme-summer-time u-color-style-multicolor-1 u-palette-2-base u-radius-0 u-btn-1"
						>
							Catch Us
						</a>
					</div>
				</section>
				<section
					className="u-align-center u-clearfix u-palette-1-base u-section-4"
					id="carousel_5f6d"
					data-aos="fade-in"
				>
					<div className="u-expanded-width u-image u-image-1 res">
						<Image src={swa} />
					</div>
					<div className="u-list u-list-1">
						<div className="u-repeater u-repeater-1" data-aos="slide-up">
							<div className="u-align-center u-container-style u-list-item u-repeater-item u-shape-round u-white u-list-item-1">
								<div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
									<div className="u-align-center u-container-style u-group u-palette-1-base u-radius-50 u-shape-round u-group-1">
										<div className="u-container-layout u-valign-middle u-container-layout-2">
											<span className="u-custom-font u-font-oswald u-text u-text-1">
												01
											</span>
										</div>
									</div>
									<h2 className="u-text u-text-2">
										{" "}
										NETWORK &amp; POWER SOLUTION
									</h2>
									<p className="u-text u-text-grey-60 u-text-3">
										Firewalls, End User Security, Internet Management, WAN
										Optimization&nbsp;
									</p>
									<Link href="/Services">
										<a className="u-border-1 u-border-active-black u-border-hover-black u-border-palette-1-base u-btn u-button-style u-none u-text-active-grey-60 u-text-body-color u-text-hover-grey-60 u-btn-1">
											learn more
										</a>
									</Link>
								</div>
							</div>
							<div className="u-align-center u-container-style u-list-item u-repeater-item u-shape-round u-white u-list-item-2">
								<div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
									<div className="u-align-center u-container-style u-group u-palette-1-base u-radius-50 u-shape-round u-video-cover u-group-2">
										<div className="u-container-layout u-valign-middle u-container-layout-4">
											<span className="u-custom-font u-font-oswald u-text u-text-4">
												02
											</span>
										</div>
									</div>
									<h2 className="u-text u-text-5">securities solution</h2>
									<p className="u-text u-text-grey-60 u-text-6">
										&nbsp; CCTV &amp; Walkthrough gates
										Securitysolutions.&nbsp;&nbsp;
										<b>
											<span>
												technological tools and services that help protect
												organizations against cyber attacks
											</span>
										</b>
										&nbsp;
									</p>
									<Link href="/Services">
										<a className="u-border-1 u-border-active-black u-border-hover-black u-border-palette-1-base u-btn u-button-style u-none u-text-active-grey-60 u-text-body-color u-text-hover-grey-60 u-btn-1">
											learn more
										</a>
									</Link>
								</div>
							</div>
							<div className="u-align-center u-container-style u-list-item u-repeater-item u-shape-round u-white u-list-item-3">
								<div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
									<div className="u-align-center u-container-style u-group u-palette-1-base u-radius-50 u-shape-round u-video-cover u-group-3">
										<div className="u-container-layout u-valign-middle u-container-layout-6">
											<span className="u-custom-font u-font-oswald u-text u-text-7">
												03
											</span>
										</div>
									</div>
									<h2 className="u-text u-text-8">
										{" "}
										Services &amp; component solution
									</h2>
									<p className="u-text u-text-grey-60 u-text-9">
										<i>Service Level Agreements (SLA’s).&nbsp;</i>Local warranty
										Extensions.
									</p>
									<Link href="/Services">
										<a className="u-border-1 u-border-active-black u-border-hover-black u-border-palette-1-base u-btn u-button-style u-none u-text-active-grey-60 u-text-body-color u-text-hover-grey-60 u-btn-1">
											learn more
										</a>
									</Link>
								</div>
							</div>
							<div className="u-align-center u-container-style u-list-item u-repeater-item u-shape-round u-white u-list-item-3">
								<div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
									<div className="u-align-center u-container-style u-group u-palette-1-base u-radius-50 u-shape-round u-video-cover u-group-3">
										<div className="u-container-layout u-valign-middle u-container-layout-6">
											<span className="u-custom-font u-font-oswald u-text u-text-7">
												04
											</span>
										</div>
									</div>
									<h2 className="u-text u-text-8">IT CONSULTANT</h2>
									<p className="u-text u-text-grey-60 u-text-12">
										Solution recommendations according to requirements with
										inspections
									</p>
									<Link href="/Services">
										<a className="u-border-1 u-border-active-black u-border-hover-black u-border-palette-1-base u-btn u-button-style u-none u-text-active-grey-60 u-text-body-color u-text-hover-grey-60 u-btn-1">
											learn more
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="u-clearfix u-grey-5 u-valign-middle-sm u-valign-middle-xs u-section-5"
					id="carousel_c9da"
					data-aos="fade-in"
				>
					<div className="u-expanded-width u-palette-1-dark-1 u-shape u-shape-rectangle u-shape-1"></div>
					<div className="u-palette-1-light-2 u-shape u-shape-rectangle u-shape-2"></div>
					<div className="u-shape u-shape-rectangle u-white u-shape-3"></div>
					<div className="u-image u-image-1">
						<Image
							src={min}
							width="1200"
							height="1048"
							alt="USS Enterprise ICT company"
							style={{ marginBottom: "80px" }}
						/>
					</div>
					<div className="u-align-left u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-similar-fill u-group-1">
						<div className="u-container-layout u-container-layout-1">
							<h2 className="u-align-center u-text u-text-1">
								{" "}
								Multimedia &amp; Digital Platform
							</h2>
							<p className="u-align-center u-large-text u-text u-text-variant u-text-2">
								Multimedia projectors allow for presentations that can be used
								for work functions, classroom instruction or enjoyment of films
								and television at home.
							</p>
							<p className="u-align-center u-text u-text-3">
								Smart Conference room | Smart Labs | Projectors |LEDs | Sound
								Systems&nbsp;
							</p>
							<Link href="/Services">
								<a className="u-border-1 u-border-active-black u-border-hover-black u-border-palette-1-base u-btn u-button-style u-none u-text-active-grey-60 u-text-body-color u-text-hover-grey-60 u-btn-1">
									learn more
								</a>
							</Link>
						</div>
					</div>
				</section>

				<section
					data-aos="fade-in"
					style={{ backgroundColor: "#282c7c", height: "600px" }}
				>
					<br></br>
					<h2 style={{ textAlign: "center", color: "white" }}>
						Smart Attendance Solutions.
					</h2>
					<p style={{ textAlign: "center", color: "white" }}>
						Wall mount, ATM Kiosk, Short range, Long range RFID’s, Finger Print,
						Face Detections solutions,<br></br>Walk Through Floor Stand Single &
						Multiple Module.
					</p>
					<div className="u-align-center u-image u-image-round u-radius-10 u-image-1">
						{" "}
						<Image
							data-image-width="764"
							data-image-height="447"
							src={Attendence}
							alt="USS Enterprise ICT company"
						/>
					</div>
				</section>

				<section
					className="u-align-center u-clearfix u-white u-section-7 mb-[10re]"
					id="carousel_d7d1"
					data-aos="fade-in"
				>
					<h2 className="u-text u-text-default u-text-1 text-center">
						{" "}
						Technology Of The Future
					</h2>
					<p className="u-text u-text-default u-text-2">
						<b>
							<i>Printing &amp; Photocopying Devices.</i>
						</b>
					</p>
					<div className="u-border-2 u-border-palette-1-base u-shape u-shape-svg u-text-grey-5 u-shape-1">
						<svg className="u-svg-link" viewBox="0 0 160 50">
							<use
								xmlnsXlink="http://www.w3.org/1999/xlink"
								xlinkHref="#svg-78f4"
							></use>
						</svg>
						<svg
							className="u-svg-content"
							viewBox="-1 -1 162 52"
							x="0px"
							y="0px"
							id="svg-78f4"
						>
							<path
								d="M133,26.7c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,22
	c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0
	l-3.8,4.7C146.9,20.2,142.3,20.2,133,26.7z M133,10.8c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0
	c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,6.1c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0C75.1-2,85.9-1.6,97,6.1
	c11.4,8,20.3,8.3,32.2,0C140.8-2,148.4-2,160,6.1l-3.8,4.7C146.9,4.3,142.3,4.3,133,10.8z M32.2,38c11,7.6,19,8.5,31.3,0
	c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0l-3.8,4.7c-9.3-6.5-13.9-6.5-23.3,0
	c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,38
	C11.2,30.2,20.6,29.9,32.2,38z"
							></path>
						</svg>
					</div>
				</section>

				<section
					className="u-align-center u-clearfix u-white u-section-8"
					id="carousel_5def"
					data-aos="fade-in"
				>
					<div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
						<div className="u-layout">
							<div className="u-layout-row">
								<div className="u-container-style u-expand-resize u-layout-cell u-left-cell u-size-28 u-layout-cell-1">
									<div className="u-container-layout">
										<div className="u-align-left u-expanded-width-sm u-expanded-width-xs u-palette-1-base u-shape u-shape-2"></div>
										<div className="u-align-center u-image u-image-round u-radius-10 u-image-1">
											{" "}
											<Image
												data-image-width="764"
												data-image-height="447"
												src={Printer}
												alt="USS Enterprise ICT company"
											/>
										</div>
									</div>
								</div>
								<div
									className="u-container-style u-layout-cell u-right-cell u-size-32 u-layout-cell-2  mt-[2rem]"
									data-aos="zoom-in"
								>
									<div className="u-container-layout u-valign-bottom-sm u-valign-bottom-xs u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-container-layout-2 ">
										<h2 className="u-align-center ">Printers</h2>
										<h3
											style={{
												textAlign: "center",
												color: "#eda80e",
												fontWeight: "bold",
												fontSize: "20px",
											}}
										>
											Best Printers USS Enterprises
										</h3>
										<p style={{ textAlign: "justify" }}>
											Are you looking to buy printers for your organization,
											<b>school or company?</b>
											We sell high quality printers to different IT industry
											with best prices and packages. Printers include{" "}
											<b>
												Multi Function Printers, Inkjet Printers, Laser Printers
												etc
											</b>
											. Dont waste your time on other plateforms contact us now
											we will assist you in a very quick way.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						style={{ backgroundColor: "#282c7c" }}
						className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1"
					>
						<div className="u-layout">
							<div className="u-layout-row" data-aos="zoom-in">
								<div className="u-container-style u-layout-cell u-right-cell u-size-32 u-layout-cell-2">
									<div className="u-container-layout u-valign-bottom-sm u-valign-bottom-xs u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-container-layout-2">
										<h2 className="u-align-center text-white ">AIO-Scanners</h2>
										<h3
											style={{
												textAlign: "center",
												color: "#eda80e",
												fontWeight: "bold",
												fontSize: "20px",
											}}
										>
											Best AIO-Scanners USS Enterprises
										</h3>

										<p
											className=" text-white "
											style={{ textAlign: "justify" }}
										>
											Are you looking to buy all in one scanners for your shop?
											We sell high quality all in one scanners with best prices
											and packages. These scanners are Easy to add products to
											lines using a mobile scanner. Its a handy tool for the
											user to scan product quickly using Barcode or QRCode.
											contact us now we will assist you in a very quick way.
										</p>
									</div>
								</div>
								<div className="u-container-style u-expand-resize u-layout-cell u-left-cell u-size-28 u-layout-cell-1">
									<div className="u-container-layout">
										<div className="u-align-left u-expanded-width-sm u-expanded-width-xs u-palette-1-base u-shape u-shape-2"></div>
										<br></br>
										<br></br>
										<div
											style={{ width: "90%", height: "50%" }}
											className="u-align-center u-image u-image-round u-radius-10 u-image-1 "
										>
											{" "}
											<Image
												data-image-width="764"
												data-image-height="447"
												src={AIO}
												alt="USS Enterprise ICT company"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
						<div className="u-layout">
							<div className="u-layout-row mt-[9rem]" data-aos="zoom-in">
								<div className="u-container-style u-expand-resize u-layout-cell u-left-cell u-size-28 u-layout-cell-1">
									<div className="u-container-layout">
										<div className="u-align-left u-expanded-width-sm u-expanded-width-xs u-palette-1-base u-shape u-shape-2"></div>
										<div className="u-align-center u-image u-image-round u-radius-10 u-image-1">
											{" "}
											<Image
												data-image-width="764"
												data-image-height="447"
												src={PhotoMachine}
												alt="USS Enterprise ICT company"
											/>
										</div>
									</div>
								</div>
								<div className="u-container-style u-layout-cell u-right-cell u-size-32 u-layout-cell-2 mt-[4rem]">
									<div className="u-container-layout u-valign-bottom-sm u-valign-bottom-xs u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-container-layout-2">
										<h2 className="u-align-center ">Heavy Duty Photocopiers</h2>
										<h3
											style={{
												textAlign: "center",
												color: "#eda80e",
												fontWeight: "bold",
												fontSize: "20px",
											}}
										>
											Best Heavy Duty Photocopiers USS Enterprises
										</h3>

										<p style={{ textAlign: "justify" }}>
											Are you looking to buy photocopier machine for your
											bussiness and want to increase your bussiness revenue? We
											sell high quality photocopier machine with best prices and
											packages. These machines have highly functionalites with
											color and fast printing services. contact us now we will
											assist you in a very quick way.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="u-clearfix u-sheet u-sheet-1">
						<div
							style={{ backgroundColor: "#282c7c" }}
							className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1"
						>
							<div className="u-layout">
								<div className="u-layout-row" data-aos="zoom-in">
									<div className="u-container-style u-expand-resize u-layout-cell u-left-cell u-size-28 u-layout-cell-1">
										<div className="u-container-layout">
											<div className="u-align-left u-expanded-width-sm u-expanded-width-xs u-palette-1-base u-shape u-shape-2"></div>
											<div className="u-align-center u-image u-image-round u-radius-10 u-image-1">
												{" "}
												<br></br>
												<br></br>
												<Image
													data-image-width="764"
													data-image-height="447"
													src={Solor}
													alt="USS Enterprise ICT company"
												/>
											</div>
										</div>
									</div>
									<div className="u-container-style u-layout-cell u-right-cell u-size-32 u-layout-cell-2">
										<div className="u-container-layout u-valign-bottom-sm u-valign-bottom-xs u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-container-layout-2">
											<h2 className="u-align-center text-white">
												Alternate Energy solution
											</h2>
											<h3
												style={{
													textAlign: "center",
													color: "#eda80e",
													fontWeight: "bold",
													fontSize: "20px",
												}}
											>
												Best Alternate Energy solution USS Enterprises
											</h3>

											<p
												style={{ fontWeight: "lighter" }}
												className="u-align-justify text-white "
											>
												We have the best alernate energy solution for you. These
												alternative energy solutions include&nbsp;
												<b>
													solar photovoltaic energy, solar thermal energy, wind
													energy, hydroelectric energy and biomass energy
												</b>
												&nbsp;to name a few. The energy from these alternative
												energy solutions is derived from naturally-occurring
												sources that can be constantly replenished.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="u-expanded-width u-list u-list-1">
							<div className="u-repeater u-repeater-1" data-aos="zoom-in">
								<div className="u-align-center u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-valign-top-sm u-valign-top-xs u-container-layout-3">
										<span className="u-align-center-sm u-align-center-xs u-border-2 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-1">
											<div>
												<Image src={Grid} alt="USS Enterprise ICT company" />
											</div>
										</span>
										<h3 className="u-text u-text-3">On Grid, Off Grid</h3>
										<p className="u-text u-text-4">
											<b>
												On-grid system is one in which the solar power system is
												connected to the utilitys power grid
											</b>
											&nbsp;while being off-grid means the system works
											independently&nbsp;
										</p>
									</div>
								</div>
								<div className="u-align-center u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-valign-top-sm u-valign-top-xs u-container-layout-4">
										<span className="u-align-center-sm u-align-center-xs u-border-2 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-2">
											<div>
												<Image src={Energy} alt="USS Enterprise ICT company" />
											</div>
										</span>
										<h3 className="u-text u-text-5">Hybrid Solar Energy</h3>
										<p className="u-text u-text-6">
											hybrid solar system is&nbsp;
											<b>grid-tied with battery storage</b>. They come with a
											special smart inverter that can transmit direct current
											(DC) power to and from your batteries
										</p>
									</div>
								</div>
								<div className="u-align-center u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-valign-top-sm u-valign-top-xs u-container-layout-5">
										<span className="u-align-center-sm u-align-center-xs u-border-2 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-3">
											<div>
												<Image src={UPS} alt="USS Enterprise ICT company" />
											</div>
										</span>
										<h3 className="u-text u-text-7">UPS</h3>
										<p className="u-text u-text-8">
											An uninterruptible power supply (UPS) is&nbsp;
											<b>
												a device that allows a computer to keep running for at
												least a short time when incoming power is interrupted
											</b>
										</p>
									</div>
								</div>
								<div className="u-align-center u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-valign-top-sm u-valign-top-xs u-container-layout-6">
										<span className="u-align-center-sm u-align-center-xs u-border-2 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-icon-4">
											<div>
												<Image
													src={Generator}
													alt="USS Enterprise ICT company"
												/>
											</div>
										</span>
										<h3 className="u-text u-text-9">Generators</h3>
										<p className="u-text u-text-10">
											Electric generator is a device which is used to&nbsp;
											<b>produce electric energy</b>, which can be stored in
											batteries or can be directly supplied to the homes, shops,
											offices, etc
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="u-align-center u-clearfix u-section-9"
					id="sec-96e6"
					data-aos="fade-in"
				>
					<div className="u-align-center u-clearfix u-sheet u-sheet-1">
						<span className="u-text u-text-default u-text-1">Want To Buy?</span>
						<p className="u-text u-text-2">
							If you are looking for the above services contact us now
						</p>
						<a
							href="tel:+92-21-34390018"
							className="u-active-white u-border-2 u-border-hover-white u-border-white u-btn u-button-style u-hover-white u-palette-1-base u-text-active-black u-text-body-alt-color u-text-hover-palette-1-base u-btn-1"
						>
							Call Now
						</a>
					</div>
				</section>
				<section
					className="u-clearfix u-section-10"
					id="carousel_d06f"
					data-aos="fade-in"
				>
					<div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
						<div className="u-gutter-0 u-layout">
							<div className="u-layout-row" data-aos="zoom-in">
								<div className="u-container-style u-layout-cell u-palette-1-base u-size-30 u-layout-cell-1">
									<div className="u-container-layout u-valign-middle u-container-layout-1">
										<span className="u-custom-font u-font-montserrat u-text u-text-body-alt-color u-text-1">
											What We Do
										</span>
										<p className="u-align-justify u-text u-text-body-alt-color u-text-2">
											&nbsp; USS Enterprises is one of the fastest emerging IT
											Solution provider serving in IT industry since 2015 with a
											wide range of our{" "}
											<b>
												<i>“Products and Services Portfolio” </i>
											</b>
											covering every end to end requirement in IT
											Infrastructure. &nbsp; We believe in working as technology
											partner and solution provider for our clientele with an
											experienced and well qualified team of professionals and
											technology specialists. The key to our success is our
											Customer Oriented policies, our belief in Consultative
											Selling and the top of the line Support and Post Sales
											Services to our valued customers.
											<br />
											<br />
											&nbsp; Our Core values which form the basis of our
											business operations and our corporate social
											responsibility are&nbsp;&nbsp;
										</p>
									</div>
								</div>
								<div className="u-align-left u-container-style u-layout-cell u-size-30 u-layout-cell-2">
									<div className="u-container-layout u-valign-middle u-container-layout-2">
										<div
											className="u-align-center-sm u-align-center-xs u-image u-image-circle u-image-contain u-image-1"
											alt="USS Enterprise ICT company"
											data-image-width="241"
											data-image-height="192"
										></div>
										<p className="u-text u-text-black u-text-3">
											Establishing a strong and valuable brand that is connected
											to a reliable business image A strategy consultant who is
											known for creating and solving customers business
											challenges through technical advancement and innovation
											With a broad variety of our Products and Services
											Portfolio, USS Enterprises is one of the fastest-emerging
											IT solution providers serving the IT market since 2015.
											With an experienced and highly skilled team of experts and
											technology specialists, we believe in serving as our
											clients technology partners and solution providers. Our
											customer-focused policies, commitment to consultative
											selling, and commitment to providing our esteemed clients
											with the best support and post-sale services are the
											foundation of our success.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="u-clearfix u-section-11"
					data-aos="slide-up"
					id="sec-69dc"
				>
					<div className="u-clearfix u-sheet u-sheet-1">
						<div className="u-expanded-width u-list u-list-1">
							<div className="u-repeater u-repeater-1">
								<div className="u-align-center u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-1">
										<span className="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-1">
											<Image src={Icon} alt="USS Enterprise ICT company" />
										</span>
										<h3 className="u-text u-text-1">
											Committed with dedication.
										</h3>
									</div>
								</div>
								<div className="u-align-center u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-2">
										<span className="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-2">
											<Image src={Icon} alt="USS Enterprise ICT company" />
										</span>
										<h3 className="u-text u-text-2">
											&nbsp;Teamwork &amp; Synchronization.
										</h3>
									</div>
								</div>
								<div className="u-align-center u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-3">
										<span className="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-3">
											<Image src={Icon} alt="USS Enterprise ICT company" />
										</span>
										<h3 className="u-text u-text-3">
											Compliance professionally.
										</h3>
									</div>
								</div>
								<div className="u-align-center u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-4">
										<span className="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-4">
											<Image src={Icon} alt="USS Enterprise ICT company" />
										</span>
										<h3 className="u-text u-text-4">
											&nbsp;Best Recommendations.{" "}
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					className="u-align-center u-clearfix u-white u-section-13"
					id="carousel_fb5a"
					data-aos="fade-in"
				>
					<div className="u-clearfix u-sheet u-sheet-1" data-aos="slide-up">
						<h2 className="u-custom-font u-font-montserrat u-text u-text-default u-text-1 pb-10">
							Our Core Alliances
						</h2>
						<Swiper
							id="carousel-8627"
							slidesPerView={3}
							spaceBetween={30}
							freeMode={true}
							pagination={{
								clickable: true,
							}}
							modules={[FreeMode, Pagination]}
							className="u-carousel u-expanded-width mt-10"
						>
							<SwiperSlide>
								<div className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5 ">
									<Image
										src={Clentt1}
										alt="USS Enterprise ICT company"
										data-image-width="341"
										data-image-height="123"
									/>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<div className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5 ">
									<Image
										src={Clentt2}
										alt="USS Enterprise ICT company"
										data-image-width="341"
										data-image-height="123"
									/>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<div className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5 ">
									<Image
										src={Clentt3}
										alt="USS Enterprise ICT company"
										data-image-width="341"
										data-image-height="123"
									/>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<div className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5 ">
									<Image
										src={Clentt4}
										alt="USS Enterprise ICT company"
										data-image-width="341"
										data-image-height="123"
									/>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<div className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5 ">
									<Image
										src={Clentt5}
										alt="USS Enterprise ICT company"
										data-image-width="341"
										data-image-height="123"
									/>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<div className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5 ">
									<Image
										src={Clentt6}
										alt="USS Enterprise ICT company"
										data-image-width="341"
										data-image-height="123"
									/>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<div className="u-image u-image-contain u-image-default u-preserve-proportions u-image-5 ">
									<Image
										src={Clentt7}
										alt="USS Enterprise ICT company"
										data-image-width="341"
										data-image-height="123"
									/>
								</div>
							</SwiperSlide>
						</Swiper>
						<Link href="/About">
							<a className="u-border-1 u-border-active-black u-border-hover-black u-border-palette-1-base u-btn u-button-style u-none u-text-active-grey-60 u-text-body-color u-text-hover-grey-60 u-btn-1">
								learn more
							</a>
						</Link>
					</div>
				</section>
				<Clients />
				<div className="u-section-3  ">
					<Link href="/OurClients">
						<a className="u-btn u-btn-rectangle u-button-style u-color-scheme-summer-time u-color-style-multicolor-1 u-palette-2-base u-radius-0 u-btn-1">
							View More
						</a>
					</Link>
				</div>

				<section
					className="u-align-center u-black u-clearfix u-section-15"
					id="sec-4a71"
					data-aos="fade-in"
				>
					<div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
						<div className="u-expanded-width u-list u-list-1">
							<div className="u-repeater u-repeater-1">
								<div className="u-align-center u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-1">
										<p
											style={{ color: "#eda80e" }}
											data-animation-name="counter"
											data-animation-event="scroll"
											data-animation-duration="3000"
										>
											100
										</p>
										<p className="u-text u-text-2">Project</p>
									</div>
								</div>
								<div className="u-align-center u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-2">
										<p
											style={{ color: "#eda80e" }}
											data-animation-name="counter"
											data-animation-event="scroll"
											data-animation-duration="3000"
										>
											45
										</p>
										<p className="u-text u-text-4">Clients</p>
									</div>
								</div>
								<div className="u-align-center u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-3">
										<p
											style={{ color: "#eda80e" }}
											data-animation-name="counter"
											data-animation-event="scroll"
											data-animation-duration="3000"
										>
											20
										</p>
										<p className="u-text u-text-6">Awards</p>
									</div>
								</div>
								<div className="u-align-center u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-4">
										<p
											style={{ color: "#eda80e" }}
											data-animation-name="counter"
											data-animation-event="scroll"
											data-animation-duration="3000"
										>
											10
										</p>
										<p className="u-text u-text-8">Our Team</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<ContactForm />
				<Footer />
			</div>
		</div>
	);
}
