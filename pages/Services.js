import React,{useEffect} from 'react'
import LandingPage from '../Components/LandingPage';
import NavBar from '../Components/NavBar';
import xsx from '../styles/images/xsx.jpg'
import Image from 'next/image'
import Footer from '../Components/Footer';
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";


const Services = () => {
	useEffect(() => {
	  AOS.init({
			duration: 2000,
		});
	}, [])
	
  return (
		<>
				
			<Head>
				<title>Services</title>
				<meta name="description" content="USS Enterprises is committed to the provision of various Information & Communication Technology and other equipments Sales and services such as Hardwares and softwares." />
				<meta property="og:title" content="Services"></meta>
				<meta property="og:description" content="USS Enterprises is committed to the provision of various Information & Communication Technology and other equipments Sales and services such as Hardwares and softwares" />
				<meta property="og:url" content="https://usseb.com"></meta>
				<meta property="og:type" content="website"></meta>	
				<meta property="og:image" content="https://mywebsite.net/assets/opengraph/theogimage.jpg"/>
				
				<link rel="icon" href="/favicon.ico" />
			
				
			</Head>
			

			<div className="u-body u-xl-mode">
				<section
					className="u-align-center u-clearfix u-gradient u-section1"
					src=""
					id="sec-a2a2"
				>
					<NavBar theme="dark" color="white" />
					<LandingPage
						Name="Our Offering Services"
						desc="USS Enterprises is committed to the provision of various Information & Communication Technology and other equipments Sales and services such as Hardware, software, 
					Local area Network solutions & Optical fiber installations and configurations."
					/>
				</section>
				<section
					className="u-align-left u-border-2 u-border-palette-1-base u-clearfix u-palette-1-base u-section-22"
					id="sec-c70c"
				>
					<div className="u-clearfix u-sheet u-sheet-1" data-aos="zoom-in">
						<span className="u-custom-font u-font-source-sans-pro u-text u-text-1">
							We believe in
							<br />
							Customer Satisfaction
						</span>
						<p className="u-text u-text-grey-40 u-text-2">
							<span
								style={{ fontSize: "1.8rem" }}
								className="u-text-palette-1-base"
							>
								Easily Accessible &amp; Secure
							</span>
						</p>
						<h2 className="u-align-center u-text u-text-palette-3-base u-text-3" style={{paddingBottom:"4rem"}}>
							Features
						</h2>
						<div className="u-expanded-width u-list u-list-1">
							<div className="u-repeater u-repeater-1">
								<div className="u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-1">
										<span className="u-custom-font u-text u-text-palette-3-light-2 u-text-4">
											{" "}
											01
										</span>
										<div className="u-container-style u-group u-group-1">
											<div className="u-container-layout u-container-layout-2">
												<span className="u-icon u-icon-circle u-text-palette-1-base u-icon-1">
													<svg
														className="u-svg-link"
														preserveAspectRatio="xMidYMin slice"
														viewBox="0 0 24 24"
													>
														<use
															xmlnsXlink="http://www.w3.org/1999/xlink"
															xlinkHref="#svg-b827"
														></use>
													</svg>
													<svg
														className="u-svg-content"
														viewBox="0 0 24 24"
														id="svg-b827"
													>
														<path d="m7.5 24h-5c-.276 0-.5-.224-.5-.5v-5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v5c0 .276-.224.5-.5.5zm-4.5-1h4v-4h-4z"></path>
														<path d="m15.5 24h-5c-.133 0-.261-.053-.354-.147s-.147-.223-.146-.356l.06-10c.002-.275.225-.497.5-.497h4.94c.276 0 .5.224.5.5v10c0 .276-.224.5-.5.5zm-4.497-1h3.997v-9h-3.943z"></path>
														<path d="m23.5 24h-5c-.276 0-.5-.224-.5-.5v-15c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v15c0 .276-.224.5-.5.5zm-4.5-1h4v-14h-4z"></path>
														<path d="m7.258 11.838c-.128 0-.256-.049-.354-.146l-3.596-3.597c-.188-.188-.196-.491-.018-.688l2.946-3.271c2.093-2.417 5.413-4.083 8.255-4.136.123-.016.267.051.363.146.096.097.148.228.146.363-.053 2.842-1.719 6.162-4.144 8.261l-3.264 2.94c-.094.086-.214.128-.334.128zm-2.907-4.114 2.926 2.926 2.918-2.629c2.076-1.797 3.542-4.542 3.774-6.99-2.448.232-5.192 1.698-6.983 3.767z"></path>
														<path d="m8.604 14.21c-.045 0-.091-.006-.136-.019-.174-.05-.308-.188-.351-.365l-.707-2.95c-.064-.268.102-.538.37-.603.272-.063.539.102.603.37l.469 1.959c.869-1.359 1.042-3.098 1.06-4.115.005-.276.23-.492.509-.491.276.004.496.233.491.508-.042 2.366-.736 4.34-1.955 5.559-.095.095-.223.147-.353.147z"></path>
														<path d="m4.241 7.603c-.039 0-.078-.004-.117-.014l-2.95-.707c-.176-.042-.316-.175-.365-.35-.049-.174 0-.361.127-.489 1.219-1.219 3.193-1.913 5.56-1.955.265-.025.504.215.508.491s-.214.504-.491.509c-1.018.018-2.756.191-4.115 1.06l1.959.469c.268.064.434.334.37.603-.056.229-.26.383-.486.383z"></path>
														<path d="m.5 15c-.131 0-.258-.052-.354-.146-.13-.13-.178-.321-.125-.497.165-.552 1.023-3.338 1.695-4.01.809-.81 2.126-.811 2.938 0 .81.81.81 2.128 0 2.938-.671.672-3.458 1.529-4.01 1.694-.048.014-.096.021-.144.021zm2.685-4.261c-.276 0-.552.105-.762.315-.284.284-.772 1.536-1.154 2.677 1.141-.382 2.394-.87 2.677-1.153.42-.42.42-1.104 0-1.523-.21-.211-.486-.316-.761-.316z"></path>
													</svg>
												</span>
												<h2 className="u-text u-text-5">
													<i>End User Computing</i>
												</h2>
												<p
													style={{ textAlign: "justify" }}
													className="u-text u-text-6 text-justify"
												>
													USS Enterprises is providing End-user computing refers
													to a broad range of user-facing resources, including
													desktop and notebook computers, desktop operating
													systems, wearables, mobile devices, and online
													applications, as well as virtual desktops and
													applications.{" "}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-3">
										<span className="u-custom-font u-text u-text-palette-3-light-2 u-text-7">
											{" "}
											02
										</span>
										<div className="u-container-style u-group u-group-2">
											<div className="u-container-layout u-container-layout-4">
												<span className="u-icon u-icon-circle u-text-palette-1-base u-icon-2">
													<svg
														className="u-svg-link"
														preserveAspectRatio="xMidYMin slice"
														viewBox="0 0 511.998 511.998"
													>
														<use
															xmlnsXlink="http://www.w3.org/1999/xlink"
															xlinkHref="#svg-07e3"
														></use>
													</svg>
													<svg
														className="u-svg-content"
														viewBox="0 0 511.998 511.998"
														x="0px"
														y="0px"
														id="svg-07e3"
													>
														<g>
															<g>
																<path d="M74.664,85.179c-17.673,0-32,14.327-32,32v85.333h21.333v-85.333c0-5.891,4.776-10.667,10.667-10.667h256V85.179H74.664z"></path>
															</g>
														</g>
														<g>
															<g>
																<path d="M74.664,405.179c-5.891,0-10.667-4.776-10.667-10.667V287.845H42.664v106.667c0,17.673,14.327,32,32,32h106.667v-21.333    H74.664z"></path>
															</g>
														</g>
														<g>
															<g>
																<path d="M338.206,432.688L79.155,173.637c-4.165-4.164-10.917-4.164-15.083,0L3.123,234.587c-4.164,4.165-4.164,10.917,0,15.083    L262.174,508.72c2,2.001,4.713,3.125,7.541,3.125c2.829-0.001,5.541-1.125,7.541-3.125l60.949-60.949    C342.37,443.605,342.37,436.853,338.206,432.688z M269.715,486.096L25.747,242.128l45.867-45.867L315.582,440.23L269.715,486.096z    "></path>
															</g>
														</g>
														<g>
															<g>
																<path d="M469.331,405.179h-160v21.333h117.333v53.333c0,5.891,4.776,10.667,10.667,10.667h32    c23.564,0,42.667-19.102,42.667-42.667C511.998,424.281,492.895,405.179,469.331,405.179z M469.331,469.179h-21.333v-42.667    h21.333c11.782,0,21.333,9.551,21.333,21.333C490.664,459.628,481.113,469.179,469.331,469.179z"></path>
															</g>
														</g>
														<g>
															<g>
																<path d="M469.331,85.179h-53.333v21.333h53.333c11.782,0,21.333,9.551,21.333,21.333v320h21.333v-320    C511.998,104.281,492.895,85.179,469.331,85.179z"></path>
															</g>
														</g>
														<g>
															<g>
																<rect
																	x="164.042"
																	y="314.513"
																	transform="matrix(0.7071 -0.7071 0.7071 0.7071 -175.2621 227.2397)"
																	width="45.259"
																	height="21.333"
																></rect>
															</g>
														</g>
														<g>
															<g>
																<rect
																	x="121.376"
																	y="271.846"
																	transform="matrix(0.7071 -0.7071 0.7071 0.7071 -157.5885 184.5736)"
																	width="45.259"
																	height="21.333"
																></rect>
															</g>
														</g>
														<g>
															<g>
																<rect
																	x="206.686"
																	y="357.18"
																	transform="matrix(0.7071 -0.7071 0.7071 0.7071 -192.9419 269.8904)"
																	width="45.259"
																	height="21.333"
																></rect>
															</g>
														</g>
														<g>
															<g>
																<rect
																	x="249.372"
																	y="399.868"
																	transform="matrix(0.7071 -0.7071 0.7071 0.7071 -210.6241 312.5771)"
																	width="45.259"
																	height="21.333"
																></rect>
															</g>
														</g>
														<g>
															<g>
																<rect
																	x="78.679"
																	y="229.18"
																	transform="matrix(0.7071 -0.7071 0.7071 0.7071 -139.9243 141.885)"
																	width="45.259"
																	height="21.333"
																></rect>
															</g>
														</g>
														<g>
															<g>
																<path d="M460.094,23.824L445.352,9.083c-12.473-11.907-32.103-11.907-44.576,0L238.579,171.28c-4.164,4.165-4.164,10.917,0,15.083    l44.235,44.235c1.995,2.008,4.711,3.133,7.541,3.125c2.829-0.001,5.541-1.125,7.541-3.125L460.094,68.4    c0.005-0.005,0.01-0.01,0.015-0.015C472.41,56.076,472.403,36.125,460.094,23.824z M445.022,53.307L290.355,207.973    l-29.152-29.152L415.87,24.165c4.028-3.849,10.372-3.849,14.4,0l14.752,14.731c0.001,0.002,0.003,0.003,0.005,0.005    C449.003,42.88,449.001,49.33,445.022,53.307z"></path>
															</g>
														</g>
														<g>
															<g>
																<path d="M286.931,212.944l-46.037,15.371l15.371-46.112l-20.267-6.752l-22.123,66.357c-0.362,1.088-0.547,2.227-0.547,3.373    c0.001,5.891,4.778,10.666,10.669,10.664c1.129,0.004,2.252-0.169,3.328-0.512l66.357-22.123L286.931,212.944z"></path>
															</g>
														</g>
														<g>
															<g>
																<rect
																	x="390.275"
																	y="36.943"
																	transform="matrix(0.7071 -0.7071 0.7071 0.7071 69.1923 303.4905)"
																	width="21.333"
																	height="62.56"
																></rect>
															</g>
														</g>
														<g>
															<g>
																<rect
																	x="223.998"
																	y="234.512"
																	width="160"
																	height="21.333"
																></rect>
															</g>
														</g>
														<g>
															<g>
																<rect
																	x="405.331"
																	y="234.512"
																	width="21.333"
																	height="21.333"
																></rect>
															</g>
														</g>
														<g>
															<g>
																<rect
																	x="447.998"
																	y="234.512"
																	width="21.333"
																	height="21.333"
																></rect>
															</g>
														</g>
													</svg>
												</span>
												<h2 className="u-text u-text-8">
													Enterprise Computing
												</h2>
												<p
													style={{ textAlign: "justify" }}
													className="u-text u-text-9"
												>
													USS Enterprises is offering  Enterprise
													computing  that used by organizations for effective
													production is called enterprise computing. Database
													management, customer relationship management, business
													process management, and other topics are all covered
													by these IT technologies.{" "}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-5">
										<span className="u-custom-font u-text u-text-palette-3-light-2 u-text-10">
											03
										</span>
										<div className="u-container-style u-group u-group-3">
											<div className="u-container-layout u-container-layout-6">
												<span className="u-icon u-icon-circle u-text-palette-1-base u-icon-3">
													<svg
														className="u-svg-link"
														preserveAspectRatio="xMidYMin slice"
														viewBox="0 0 511.994 511.994"
													>
														<use
															xmlnsXlink="http://www.w3.org/1999/xlink"
															xlinkHref="#svg-898a"
														></use>
													</svg>
													<svg
														className="u-svg-content"
														viewBox="0 0 511.994 511.994"
														id="svg-898a"
													>
														<g>
															<path d="m468.379 112.96c-3.092-4.579-9.307-5.784-13.884-2.693-4.577 3.09-5.782 9.306-2.692 13.883 63.008 93.331 50.848 218.961-28.913 298.722-44.573 44.574-103.838 69.121-166.877 69.121s-122.303-24.546-166.878-69.12c-44.574-44.574-69.121-103.838-69.121-166.877s24.548-122.304 69.121-166.877c81.202-81.202 208.265-92.375 302.127-26.567 4.521 3.171 10.758 2.075 13.929-2.447 3.17-4.522 2.074-10.758-2.448-13.929-48.674-34.126-108.292-50.22-167.867-45.31-60.276 4.965-117.057 31.284-159.883 74.11-48.351 48.352-74.979 112.639-74.979 181.02s26.628 132.668 74.979 181.02c48.352 48.351 112.639 74.979 181.019 74.979s132.668-26.628 181.019-74.979c86.519-86.52 99.703-222.805 31.348-324.056z"></path>
															<path d="m256.013 47.496c-114.967 0-208.5 93.533-208.5 208.5s93.533 208.5 208.5 208.5 208.5-93.533 208.5-208.5-93.533-208.5-208.5-208.5zm0 397c-103.939 0-188.5-84.56-188.5-188.5s84.561-188.5 188.5-188.5 188.5 84.56 188.5 188.5-84.561 188.5-188.5 188.5z"></path>
															<path d="m319.653 305.493-32.857-32.856c2.688-4.952 4.216-10.621 4.216-16.641 0-15.824-10.56-29.223-25-33.537v-72.463c0-5.523-4.477-10-10-10s-10 4.477-10 10v72.463c-14.44 4.314-25 17.712-25 33.537 0 19.299 15.701 35 35 35 6.02 0 11.689-1.528 16.641-4.216l32.857 32.856c1.953 1.953 4.512 2.929 7.071 2.929 2.56 0 5.118-.977 7.071-2.929 3.906-3.907 3.906-10.238.001-14.143zm-78.64-49.497c0-8.271 6.729-15 15-15s15 6.729 15 15-6.728 15-15 15c-8.271 0-15-6.729-15-15z"></path>
															<path d="m256.013 118.133c5.523 0 10-4.477 10-10v-10.127c0-5.523-4.477-10-10-10s-10 4.477-10 10v10.127c0 5.523 4.477 10 10 10z"></path>
															<path d="m185.678 114.172c-2.762-4.784-8.879-6.422-13.66-3.66-4.783 2.762-6.422 8.877-3.66 13.66l5.064 8.771c1.852 3.208 5.213 5.001 8.669 5.001 1.696 0 3.417-.432 4.991-1.341 4.783-2.762 6.422-8.877 3.66-13.66z"></path>
															<path d="m132.96 173.404-8.771-5.064c-4.782-2.761-10.899-1.123-13.66 3.66-2.762 4.783-1.123 10.898 3.66 13.66l8.771 5.064c1.575.909 3.294 1.341 4.991 1.341 3.455 0 6.817-1.793 8.669-5.002 2.762-4.781 1.123-10.897-3.66-13.659z"></path>
															<path d="m118.151 255.996c0-5.523-4.477-10-10-10h-10.128c-5.523 0-10 4.477-10 10s4.477 10 10 10h10.128c5.522 0 10-4.478 10-10z"></path>
															<path d="m122.96 321.267-8.771 5.064c-4.783 2.761-6.422 8.877-3.66 13.66 1.852 3.208 5.213 5.001 8.669 5.001 1.696 0 3.416-.432 4.991-1.341l8.771-5.064c4.783-2.761 6.422-8.877 3.66-13.66-2.761-4.784-8.878-6.423-13.66-3.66z"></path>
															<path d="m187.082 375.388c-4.781-2.761-10.898-1.123-13.66 3.66l-5.064 8.771c-2.762 4.783-1.122 10.899 3.66 13.66 1.575.909 3.294 1.341 4.991 1.341 3.456 0 6.817-1.793 8.669-5.001l5.064-8.771c2.762-4.783 1.122-10.899-3.66-13.66z"></path>
															<path d="m256.013 393.858c-5.523 0-10 4.477-10 10v10.127c0 5.523 4.477 10 10 10s10-4.477 10-10v-10.127c-.001-5.523-4.477-10-10-10z"></path>
															<path d="m338.604 379.048c-2.76-4.782-8.873-6.421-13.66-3.661-4.782 2.761-6.422 8.877-3.66 13.66l5.063 8.771c1.852 3.208 5.213 5.002 8.67 5.002 1.696 0 3.415-.432 4.99-1.341 4.782-2.761 6.422-8.878 3.66-13.66z"></path>
															<path d="m397.836 326.33-8.771-5.064c-4.785-2.763-10.899-1.123-13.66 3.66-2.762 4.783-1.123 10.899 3.66 13.66l8.771 5.064c1.575.91 3.294 1.341 4.99 1.341 3.456 0 6.818-1.793 8.67-5.001 2.761-4.783 1.123-10.899-3.66-13.66z"></path>
															<path d="m393.875 255.996c0 5.523 4.478 10 10 10h10.128c5.522 0 10-4.477 10-10s-4.478-10-10-10h-10.128c-5.523 0-10 4.477-10 10z"></path>
															<path d="m379.065 173.404c-4.783 2.762-6.422 8.877-3.66 13.66 1.853 3.209 5.213 5.002 8.67 5.002 1.696 0 3.416-.432 4.99-1.341l8.771-5.064c4.783-2.762 6.422-8.877 3.66-13.66s-8.876-6.421-13.66-3.66z"></path>
															<path d="m340.007 110.512c-4.784-2.763-10.899-1.123-13.66 3.66l-5.063 8.771c-2.762 4.783-1.123 10.899 3.66 13.66 1.575.91 3.294 1.341 4.99 1.341 3.456 0 6.818-1.793 8.67-5.001l5.064-8.771c2.761-4.783 1.123-10.899-3.661-13.66z"></path>
															<circle
																cx="431.067"
																cy="83.944"
																r="9.992"
															></circle>
														</g>
													</svg>
												</span>
												<h2 className="u-text u-text-11">Network Solution</h2>
												<p
													style={{ textAlign: "justify" }}
													className="u-text u-text-12"
												>
													USS Enterprises is offering The objective of publicly
													traded technology company Network Solutions is to
													assist business owners in starting, growing, and
													managing their business online. Hosting, internet
													marketing, e-commerce, and website security are among
													the solutions it provides.{" "}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-7">
										<span className="u-custom-font u-text u-text-palette-3-light-2 u-text-13">
											04
										</span>
										<div className="u-container-style u-group u-group-4">
											<div className="u-container-layout u-container-layout-8">
												<span className="u-icon u-icon-circle u-text-palette-1-base u-icon-4">
													<svg
														className="u-svg-link"
														preserveAspectRatio="xMidYMin slice"
														viewBox="0 0 512 512"
													>
														<use
															xmlnsXlink="http://www.w3.org/1999/xlink"
															xlinkHref="#svg-94be"
														></use>
													</svg>
													<svg
														className="u-svg-content"
														viewBox="0 0 512 512"
														id="svg-94be"
													>
														<g id="XMLID_1017_">
															<g id="XMLID_1278_">
																<path
																	id="XMLID_1279_"
																	d="m256 74.946c7.262 0 13.169 4.947 13.169 11.027 0 5.522 4.478 10 10 10s10-4.478 10-10c0-13.849-9.752-25.606-23.169-29.583v-1.39c0-5.522-4.478-10-10-10s-10 4.478-10 10v1.39c-13.417 3.978-23.169 15.734-23.169 29.583 0 17.108 14.88 31.026 33.169 31.026 7.262 0 13.169 4.946 13.169 11.026s-5.907 11.027-13.169 11.027-13.169-4.947-13.169-11.027c0-5.522-4.478-10-10-10s-10 4.478-10 10c0 13.849 9.752 25.606 23.169 29.583v1.392c0 5.522 4.478 10 10 10s10-4.478 10-10v-1.39c13.417-3.978 23.169-15.734 23.169-29.583 0-17.109-14.88-31.027-33.169-31.027-7.262 0-13.169-4.946-13.169-11.026s5.907-11.028 13.169-11.028z"
																></path>
																<path
																	id="XMLID_1303_"
																	d="m448 274.23h-45.703c-59.203 0-107.368 48.165-107.368 107.368v41.561l-28.929 28.929v-238.559c54.328-5.06 97-50.901 97-106.529 0-11.519-1.822-22.856-5.417-33.698-1.738-5.244-7.402-8.081-12.639-6.346-5.243 1.738-8.083 7.396-6.346 12.639 2.922 8.808 4.402 18.029 4.402 27.405 0 47.972-39.028 87-87 87s-87-39.028-87-87 39.028-87 87-87c8.83 0 17.535 1.315 25.874 3.91 5.271 1.64 10.878-1.305 12.52-6.578 1.641-5.273-1.305-10.879-6.578-12.52-10.265-3.193-20.969-4.812-31.816-4.812-59 0-107 48-107 107 0 55.628 42.672 101.469 97 106.529v152.331l-28.929-28.928v-41.56c0-59.203-48.165-107.368-107.368-107.368h-45.703c-5.522 0-10 4.478-10 10v45.703c0 59.203 48.165 107.368 107.368 107.368h41.561l43.071 43.07v97.855h-100.161c-5.522 0-10 4.478-10 10s4.478 10 10 10h220.322c5.522 0 10-4.478 10-10s-4.478-10-10-10h-100.161v-11.627l43.072-43.071h41.56c59.203 0 107.368-48.165 107.368-107.368v-45.704c0-5.522-4.478-10-10-10zm-286.632 56.844c-48.175 0-87.368-39.193-87.368-87.368v-35.703h35.703c48.175 0 87.368 39.193 87.368 87.368v21.56l-44.161-44.161c-3.906-3.904-10.236-3.904-14.143 0-3.905 3.905-3.905 10.237 0 14.143l44.162 44.161zm276.632-1.14c0 48.175-39.193 87.368-87.368 87.368h-21.56l44.161-44.16c3.905-3.905 3.905-10.237 0-14.143-3.905-3.903-10.235-3.904-14.143 0l-44.161 44.161v-21.561c0-48.175 39.193-87.368 87.368-87.368h35.703z"
																></path>
																<path
																	id="XMLID_1306_"
																	d="m324.38 48.2c2.63 0 5.21-1.07 7.07-2.931 1.859-1.859 2.93-4.439 2.93-7.069 0-2.631-1.07-5.21-2.93-7.07s-4.44-2.93-7.07-2.93-5.21 1.069-7.07 2.93c-1.859 1.86-2.93 4.439-2.93 7.07 0 2.63 1.07 5.21 2.93 7.069 1.86 1.861 4.44 2.931 7.07 2.931z"
																></path>
															</g>
														</g>
													</svg>
												</span>
												<h2 className="u-text u-text-14">Software Solution</h2>
												<p
													style={{ textAlign: "justify" }}
													className="u-text u-text-15"
												>
													USS Enterprises is offering software solution that
													typically custom-built or configured to solve a
													specific customer problem. Software solutions include
													intrusion detection systems, software, and
													security-auditing software, as well as software
													firewall packages such as Microsofts Internet Security
													and Acceleration (ISA) Server, which combine these
													functions.{" "}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-9">
										<span className="u-custom-font u-text u-text-palette-3-light-2 u-text-16">
											05
										</span>
										<div className="u-container-style u-group u-group-5">
											<div className="u-container-layout u-container-layout-10">
												<span className="u-icon u-icon-circle u-text-palette-1-base u-icon-5">
													<svg
														className="u-svg-link"
														preserveAspectRatio="xMidYMin slice"
														viewBox="0 0 24 24"
													>
														<use
															xmlnsXlink="http://www.w3.org/1999/xlink"
															xlinkHref="#svg-898f"
														></use>
													</svg>
													<svg
														className="u-svg-content"
														viewBox="0 0 24 24"
														id="svg-898f"
													>
														<path d="m23.5 24h-23c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h23c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
														<path d="m6.5 24h-5c-.276 0-.5-.224-.5-.5v-5.5c0-.551.448-1 1-1h4c.552 0 1 .449 1 1v5.5c0 .276-.224.5-.5.5zm-4.5-1h4v-5h-4z"></path>
														<path d="m14.5 24h-5c-.276 0-.5-.224-.5-.5v-11.5c0-.551.448-1 1-1h4c.552 0 1 .449 1 1v11.5c0 .276-.224.5-.5.5zm-4.5-1h4v-11h-4z"></path>
														<path d="m22.5 24h-5c-.276 0-.5-.224-.5-.5v-9.5c0-.551.448-1 1-1h4c.552 0 1 .449 1 1v9.5c0 .276-.224.5-.5.5zm-4.5-1h4v-9h-4z"></path>
														<path d="m2.5 11c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707l5-5c.124-.124.303-.176.475-.132l7.726 1.931 5.8-5.8c.195-.195.512-.195.707 0s.195.512 0 .707l-6 6c-.123.124-.303.174-.475.131l-7.726-1.93-4.8 4.8c-.097.097-.225.146-.353.146z"></path>
														<path d="m21.5 6c-.276 0-.5-.224-.5-.5v-3.5h-3.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h4c.276 0 .5.224.5.5v4c0 .276-.224.5-.5.5z"></path>
													</svg>
												</span>
												<h2 className="u-text u-text-17">Security Solution</h2>
												<p
													style={{ textAlign: "justify" }}
													className="u-text u-text-18"
												>
													USS Enterprises is offering security solutions having
													technological tools and services that help protect
													organizations against cyber attacks. which can result
													in application downtime, theft of sensitive data and
													other adverse consequences. These include management
													security, operational security, and physical security
													controls.{" "}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="u-container-style u-list-item u-repeater-item">
									<div className="u-container-layout u-similar-container u-container-layout-11">
										<span className="u-custom-font u-text u-text-palette-3-light-2 u-text-19">
											06
										</span>
										<div className="u-container-style u-group u-group-6">
											<div className="u-container-layout u-container-layout-12">
												<span className="u-icon u-icon-circle u-text-palette-1-base u-icon-6">
													<svg
														className="u-svg-link"
														preserveAspectRatio="xMidYMin slice"
														viewBox="0 0 509.681 509.681"
													>
														<use
															xmlnsXlink="http://www.w3.org/1999/xlink"
															xlinkHref="#svg-7415"
														></use>
													</svg>
													<svg
														className="u-svg-content"
														viewBox="0 0 509.681 509.681"
														id="svg-7415"
													>
														<path d="m509.681 146.239c0-79.951-65.044-144.995-144.995-144.995-47.991 0-90.603 23.442-117.008 59.47-.305-.038-.614-.064-.93-.064h-96.417c-5.519-9.027-15.467-15.064-26.8-15.064-17.309 0-31.391 14.082-31.391 31.391 0 10.453 5.14 19.722 13.02 25.43-.232 1.902-.35 3.821-.35 5.743v74.89c-39.165 3.915-69.849 37.059-69.849 77.238v33.711c-19.848 3.57-34.961 20.956-34.961 41.818v130.13c0 23.435 19.065 42.5 42.5 42.5h140.181c23.435 0 42.5-19.065 42.5-42.5v-42.91h110.327c5.686 5.702 13.546 9.235 22.215 9.235 17.309 0 31.391-14.082 31.391-31.391 0-12.237-7.043-22.853-17.284-28.029v-81.272c0-.173-.014-.342-.026-.512 76.657-3.724 137.877-67.255 137.877-144.819zm-244.569 39.206c13.523 4.463 29.27 7.905 46.385 10.221 4.249 31.492 12.599 59.92 24.758 77.429-49.543-11.097-88.495-50.551-98.849-100.367 6.661 4.408 15.646 8.737 27.706 12.717zm-30.422-39.206c0-11.805 27.564-27.088 75.042-34.079-.987 11.098-1.5 22.543-1.5 34.079 0 11.358.52 22.831 1.541 34.086-47.503-6.988-75.083-22.277-75.083-34.086zm129.996 129.996c-9.384 0-19.683-13.191-27.55-35.287-4.503-12.648-7.988-27.43-10.344-43.557 12.199 1.126 24.911 1.721 37.893 1.721s25.695-.595 37.893-1.721c-2.356 16.127-5.841 30.909-10.344 43.557-7.865 22.095-18.164 35.287-27.548 35.287zm0-92.123c-14.251 0-27.523-.693-39.726-1.918-1.13-11.555-1.728-23.615-1.728-35.955 0-12.217.592-24.314 1.737-35.955 12.2-1.224 25.469-1.917 39.716-1.917 14.251 0 27.523.693 39.726 1.918 1.13 11.554 1.727 23.615 1.727 35.954 0 12.34-.597 24.4-1.728 35.955-12.201 1.224-25.473 1.918-39.724 1.918zm54.912-71.958c47.503 6.988 75.083 22.276 75.083 34.085s-27.58 27.098-75.083 34.085c1.021-11.255 1.541-22.727 1.541-34.085s-.52-22.83-1.541-34.085zm72.367 7.597c-6.66-4.409-15.645-8.738-27.705-12.717-13.523-4.462-29.27-7.905-46.385-10.221-4.249-31.492-12.599-59.92-24.758-77.429 49.543 11.097 88.495 50.551 98.848 100.367zm-155.675-100.374c-4.296 6.171-8.533 14.293-12.494 24.951-1.443 3.883.535 8.2 4.417 9.643 3.881 1.442 8.2-.534 9.643-4.417 7.751-20.857 17.781-33.309 26.83-33.309 9.384 0 19.683 13.191 27.55 35.287 4.503 12.648 7.988 27.43 10.344 43.557-12.199-1.126-24.911-1.721-37.893-1.721-12.973 0-25.677.594-37.868 1.719.829-5.675 1.794-11.196 2.898-16.512.842-4.056-1.762-8.026-5.818-8.869-4.053-.842-8.026 1.762-8.869 5.818-1.416 6.818-2.618 13.948-3.601 21.299-17.089 2.316-32.813 5.756-46.318 10.213-12.06 3.98-21.045 8.309-27.705 12.717 10.356-49.829 49.324-89.29 98.884-100.376zm-212.758 41.209c9.038 0 16.39 7.353 16.39 16.391s-7.353 16.39-16.39 16.39-16.391-7.353-16.391-16.39c0-9.038 7.353-16.391 16.391-16.391zm-10.941 137.064c34.533 0 62.628 28.095 62.628 62.628v33.028h-19v-33.028c0-24.057-19.572-43.628-43.628-43.628-24.057 0-43.629 19.572-43.629 43.628v33.028h-19v-33.028c0-34.532 28.096-62.628 62.629-62.628zm-28.629 95.657v-33.028c0-15.786 12.843-28.628 28.629-28.628s28.628 12.843 28.628 28.628v33.028zm141.219 114.72v-22.183c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v80.093c0 15.164-12.336 27.5-27.5 27.5h-140.181c-15.164 0-27.5-12.336-27.5-27.5v-130.13c0-15.164 12.336-27.5 27.5-27.5h140.181c15.164 0 27.5 12.336 27.5 27.5v19.929c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-19.929c0-20.861-15.113-38.247-34.962-41.817v-33.711c0-40.369-30.977-73.625-70.408-77.281v-74.848c0-.004 0-.007 0-.011 1.221.145 2.461.228 3.72.228 17.309 0 31.39-14.082 31.39-31.39 0-.445-.015-.886-.034-1.326h83.186c-11.7 20.903-18.384 44.979-18.384 70.589 0 77.324 60.843 140.702 137.167 144.782-.013.182-.028.363-.028.549v77.934c-16.896.476-30.497 14.358-30.497 31.367 0 2.462.294 4.855.832 7.155zm132.542 9.235c-9.038 0-16.39-7.353-16.39-16.391s7.353-16.39 16.39-16.39c1.668 0 3.277.254 4.795.719.011.002.021.006.032.008 6.689 2.066 11.564 8.305 11.564 15.663 0 9.038-7.353 16.391-16.391 16.391zm35.394-144.167c12.16-17.509 20.51-45.937 24.758-77.429 17.115-2.316 32.862-5.759 46.385-10.221 12.059-3.979 21.045-8.309 27.705-12.717-10.354 49.816-49.306 89.27-98.848 100.367z"></path>
														<path d="m112.591 350.917c-19.742 0-35.803 16.061-35.803 35.803v56.606c0 4.142 3.358 7.5 7.5 7.5h56.606c4.142 0 7.5-3.358 7.5-7.5v-56.606c0-19.741-16.061-35.803-35.803-35.803zm20.803 84.909h-41.606v-49.106c0-11.471 9.333-20.803 20.803-20.803s20.803 9.332 20.803 20.803z"></path>
													</svg>
												</span>
												<h2 className="u-text u-text-20">
													Service &amp; Component Solution
												</h2>
												<p
													style={{ textAlign: "justify" }}
													className="u-text u-text-21"
												>
													USS Enterprises is offering Service Level Agreements
													(SLAs), Printings And Scanners Supplies, Printing
													Solution, Toner And Cartridges, Printing Paper
													Cartidges, Advertisement And Production Services,
													Event Managment And Archiving Services.{" "}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="u-clearfix u-section-33"
					id="sec-5c97"
					data-aos="slide-up"
				>
					<div className="u-clearfix u-sheet u-sheet-1">
						<div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
							<div className="u-layout">
								<div className="u-layout-row">
									<div className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
										<div className="u-container-layout u-container-layout-1">
											<div className="u-absolute-hcenter u-expanded u-shape u-shape-svg u-text-palette-1-base">
												<svg
													className="u-svg-link"
													preserveAspectRatio="none"
													viewBox="0 0 160 150"
												>
													<use
														xmlnsXlink="http://www.w3.org/1999/xlink"
														xlinkHref="#svg-3214"
													></use>
												</svg>
												<svg
													className="u-svg-content"
													viewBox="0 0 160 150"
													x="0px"
													y="0px"
													id="svg-3214"
												>
													<path
														d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"
													></path>
												</svg>
											</div>
											<div
												className="u-image u-image-circle u-image-1"
												data-image-width="842"
												data-image-height="462"
											></div>
										</div>
									</div>
									<div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
										<div className="u-container-layout u-container-layout-2">
											<div className="u-align-left u-container-style u-group u-shape-rectangle u-group-1">
												<div className="u-container-layout u-container-layout-3">
													<div className="u-palette-1-base u-shape u-shape-circle u-shape-2"></div>
													<h2 className="u-text u-text-1">
														End Using Computing
													</h2>
													<p className="u-text u-text-2">
														<b>
															<span style={{ fontWeight: 400 }}>
																We are Offering ALL IN ONE PCs include
																Workstation | High End GPU Machines
																<span style={{ fontWeight: 700 }}></span>
															</span>
															| <span style={{ fontWeight: 400 }}>T</span>
															<span style={{ fontWeight: 400 }}>
																hin Client
															</span>
															<span style={{ fontWeight: 400 }}>s | Zero</span>
															<span style={{ fontWeight: 400 }}>
																Clients{" "}
															</span>|{" "}
															<span style={{ fontWeight: 400 }}>Virtual</span>
															<span style={{ fontWeight: 400 }}>
																Desktop Solution. So, if you are interested
																contact us right now.
															</span>
														</b>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="u-clearfix u-section-44"
					id="carousel_d4ff"
					data-aos="slide-up"
				>
					<div className="u-clearfix u-sheet u-sheet-1">
						<div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
							<div className="u-layout">
								<div className="u-layout-row">
									<div className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
										<div className="u-container-layout u-container-layout-1">
											<div className="u-absolute-hcenter u-expanded u-shape u-shape-svg u-text-palette-1-base">
												<svg
													className="u-svg-link"
													preserveAspectRatio="none"
													viewBox="0 0 160 150"
												>
													<use
														xmlnsXlink="http://www.w3.org/1999/xlink"
														xlinkHref="#svg-3214"
													></use>
												</svg>
												<svg
													className="u-svg-content"
													viewBox="0 0 160 150"
													x="0px"
													y="0px"
													id="svg-3214"
												>
													<path
														d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"
													></path>
												</svg>
											</div>
											<div
												className="u-image u-image-circle u-image-1"
												data-image-width="640"
												data-image-height="427"
											></div>
										</div>
									</div>
									<div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
										<div className="u-container-layout u-container-layout-2">
											<div className="u-container-style u-group u-shape-rectangle u-group-1">
												<div className="u-container-layout u-container-layout-3">
													<div className="u-palette-1-base u-shape u-shape-circle u-shape-2"></div>
													<h2 className="u-align-left u-text u-text-1">
														Enterprise Computing
													</h2>
													<p className="u-align-justify u-text u-text-2">
														<span style={{ fontSize: "1.25rem" }}>
															{" "}
															We are offering Enterprise Computing include
															Servers | Racks | Storage |NAS | SAN | Hybrid
															|Backup Hardware Solution | Archiving Solution |
															Coverged Infrastructure | Hybrid Covereged
															Infrastructure. So, if you are interested in these
															kind of products just call us we are here for you.
														</span>
														<br />
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="u-clearfix u-palette-1-base u-section-55"
					id="carousel_088d"
					data-aos="slide-up"
				>
					<div className="u-clearfix u-layout-wrap u-layout-wrap-1">
						<div className="u-layout">
							<div className="u-layout-row">
								<div className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
									<div className="u-container-layout u-container-layout-1">
										<h2 className="u-align-left u-text u-text-1">
											Service &amp; Component Solution
										</h2>
										<p className="u-align-justify u-text u-text-2">
											{" "}
											We are offering Service Component Solution inlcude Service
											Level Agreements (SLAs ) | Printers | Sanners Supplies |
											Printing Solution | Toner &amp; Cartidges | Printing Paper
											Cartridges | Advertisement &amp; Production Services |
											Event Managment | Archiving Sertvices . So, if you are
											interested in these kind of products just call us we are
											here for you.
										</p>
									</div>
								</div>
								<div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2 pb-[20rem]">
									<div className="u-container-layout u-valign-top u-container-layout-2">
										<div className="u-absolute-hcenter u-expanded u-shape u-shape-svg u-text-palette-3-base u-shape-1">
											<svg
												className="u-svg-link"
												preserveAspectRatio="none"
												viewBox="0 0 160 150"
											>
												<use
													xmlnsXlink="http://www.w3.org/1999/xlink"
													xlinkHref="#svg-fcbd"
												></use>
											</svg>
											<svg
												className="u-svg-content"
												viewBox="0 0 160 150"
												x="0px"
												y="0px"
												id="svg-fcbd"
											>
												<path
													d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"
												></path>
											</svg>
										</div>
										<div
											className="u-align-center u-image u-image-circle u-image-1"
											data-image-width="640"
											data-image-height="427"
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="u-clearfix u-section-66"
					id="carousel_0773"
					data-aos="slide-up"
				>
					<div className="u-clearfix u-sheet u-sheet-1">
						<div className="u-align-center u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
							<div className="u-layout">
								<div className="u-layout-row">
									<div className="u-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-1">
										<div className="u-container-layout u-container-layout-1">
											<div className="u-palette-1-base u-shape u-shape-circle u-shape-1"></div>
											<h2 className="u-text u-text-1">Software Solution</h2>
											<p className="u-text u-text-2">
												{" "}
												We are offering Software Solution include Windows
												License | Backup Software Solution | Server
												Virtualization Solution | Network Virtulization Solution
												| Enterprise Cloud Solution. So, if you are interested
												in these kind of products just call us we are here for
												you.
											</p>
										</div>
									</div>
									<div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
										<div className="u-container-layout u-container-layout-2">
											<div className="u-absolute-hcenter u-expanded u-shape u-shape-svg u-text-palette-1-base u-shape-2">
												<svg
													className="u-svg-link"
													preserveAspectRatio="none"
													viewBox="0 0 160 150"
												>
													<use
														xmlnsXlink="http://www.w3.org/1999/xlink"
														xlinkHref="#svg-fcbd"
													></use>
												</svg>
												<svg
													className="u-svg-content"
													viewBox="0 0 160 150"
													x="0px"
													y="0px"
													id="svg-fcbd"
												>
													<path
														d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"
													></path>
												</svg>
											</div>
											<div
												className="u-image u-image-circle u-image-1"
												data-image-width="640"
												data-image-height="427"
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="u-clearfix u-section-77"
					id="carousel_b6a8"
					data-aos="slide-up"
				>
					<div className="u-clearfix u-sheet u-sheet-1">
						<div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
							<div className="u-layout">
								<div className="u-layout-row">
									<div className="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
										<div className="u-container-layout u-container-layout-1">
											<div className="u-absolute-hcenter u-expanded u-shape u-shape-svg u-text-palette-1-base">
												<svg
													className="u-svg-link"
													preserveAspectRatio="none"
													viewBox="0 0 160 150"
												>
													<use
														xmlnsXlink="http://www.w3.org/1999/xlink"
														xlinkHref="#svg-3214"
													></use>
												</svg>
												<svg
													className="u-svg-content"
													viewBox="0 0 160 150"
													x="0px"
													y="0px"
													id="svg-3214"
												>
													<path
														d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"
													></path>
												</svg>
											</div>
											<div
												className="u-image u-image-circle u-image-1"
												data-image-width="640"
												data-image-height="425"
											></div>
										</div>
									</div>
									<div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
										<div className="u-container-layout u-container-layout-2">
											<div className="u-container-style u-group u-shape-rectangle u-group-1">
												<div className="u-container-layout u-container-layout-3">
													<div className="u-palette-1-base u-shape u-shape-circle u-shape-2"></div>
													<h2 className="u-align-left u-text u-text-1">
														Security Solution
													</h2>
													<p className="u-align-justify u-text u-text-2">
														{" "}
														We are offering Security Solution include Firewall
														Solution | Email Security Solution | Internet Access
														Mangement Solution | Web Security Solution | End
														Point Securityu Solution | CCTV Surveillance
														Security Solution | Walkthrough Securities Gateways.
														So, if you are interested in these kind of products
														just call us we are here for you.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="u-clearfix u-palette-1-base u-section-66"
					id="carousel_f9c9"
					data-aos="slide-up"
				>
					<div className="u-clearfix u-sheet u-sheet-1">
						<div className="u-clearfix u-layout-wrap u-layout-wrap-1">
							<div className="u-layout">
								<div className="u-layout-row">
									<div className="u-align-left u-container-style u-layout-cell u-size-30 u-layout-cell-1">
										<div className="u-container-layout u-container-layout-1">
											<div className="u-container-style u-expanded-width-xs u-group u-shape-rectangle u-group-1">
												<div className="u-container-layout u-container-layout-2">
													<div className="u-expanded-width-xs u-palette-1-base u-preserve-proportions u-shape u-shape-circle u-shape-1">
														<div className="u-preserve-proportions-child"></div>
													</div>
													<h2 className="u-align-left u-text u-text-1">
														Network Solution
													</h2>
													<p className="u-align-justify u-text u-text-2">
														{" "}
														We are offering Network Solution include
														CoreSwitches | Wifi-Routers | Cabling And Networking
														| UPS Solution | Data Center Modeling | Solar Power
														Solution | WAN Optimization Solution. So, if you are
														interested in these kind of products just call us we
														are here for you.
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
										<div className="u-container-layout u-container-layout-3">
											<div className="u-absolute-hcenter u-expanded u-shape u-shape-svg u-text-palette-3-base u-shape-2">
												<svg
													className="u-svg-link"
													preserveAspectRatio="none"
													viewBox="0 0 160 150"
												>
													<use
														xmlnsXlink="http://www.w3.org/1999/xlink"
														xlinkHref="#svg-fcbd"
													></use>
												</svg>
												<svg
													className="u-svg-content"
													viewBox="0 0 160 150"
													x="0px"
													y="0px"
													id="svg-fcbd"
												>
													<path
														d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"
													></path>
												</svg>
											</div>
											<div
												className="u-image u-image-circle u-image-1"
												data-image-width="640"
												data-image-height="359"
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="u-clearfix u-palette-1-dark-1 u-section-99"
					id="sec-ed1e"
					data-aos="slide-up"
				>
					<div className="u-clearfix u-sheet u-valign-middle-xl u-valign-middle-xs u-sheet-1">
						
						<div className="u-clearfix u-layout-wrap u-layout-wrap-1">
							<div className="u-layout">
								<div className="u-layout-row">
									<div className="u-align-left u-container-style u-layout-cell u-left-cell u-shape-rectangle u-size-23 u-white u-layout-cell-1">
										<div className="u-container-layout u-container-layout-1">
											<p className="u-text u-text-1">
												Solution recommendations according to requirements with
												inspections
												<br />
											</p>
										</div>
									</div>
									<div
										className="u-align-center u-container-style u-image u-layout-cell u-right-cell u-size-37 u-image-1"
										data-image-width="1200"
										data-image-height="1233"
									>
										<div className="u-container-layout u-valign-top u-container-layout-2"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="u-align-left u-container-style u-group u-palette-3-base u-group-1">
							<div className="u-container-layout u-valign-middle u-container-layout-3">
								<h3 className="u-custom-font u-font-pt-sans u-text u-text-palette-1-base u-text-2">
									IT CONSULTANCY
								</h3>
							</div>
						</div>
					</div>
				</section>
				<section
					className="u-align-center u-clearfix u-palette-1-base u__section_110"
					id="sec-5d76"
					data-aos="slide-up"
				>
					<div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-sm u-valign-middle-xs u-sheet-1">
						<div className="u-expanded-width u-palette-4-light-1 u-shape u-shape-rectangle u-shape-1"></div>

						<div className="u-align-left u-image u-left-0 u-image-1">
							<Image
								data-image-width="1600"
								data-image-height="1000"
								src={xsx}
								alt="USS Enterprise ICT company"
							/>
						</div>
						<h2 className="u-text u-text-1" style={{marginTop:"5rem"}}>Security &amp; Surveillances</h2>
						<p className="u-text u-text-2">
							Postal services | Computer surveillance | Surveillance cameras |
							Telephones | Social network analysis | Aerial surveillance |
							Biometric surveillance | Data mining & profiling<br></br>{" "}
						</p>
					</div>
				</section>
				<section
					className="u-clearfix u-color-scheme-u10 u-color-style-multicolor-1 u-grey-90 u__section_111"
					id="sec-d871"
					data-aos="zoom-in"
				>
					<div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
						<div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
							<div className="u-layout">
								<div className="u-layout-row">
									<div className="u-align-center-sm u-align-center-xs u-align-justify-lg u-align-justify-md u-align-justify-xl u-container-style u-layout-cell u-left-cell u-size-42 u-layout-cell-1">
										<div className="u-container-layout u-valign-middle u-container-layout-1">
											<h3 className="u-custom-font u-font-ubuntu u-text u-text-1">
												Are You Interested Call Us Now!
												<br />
												<span className="u-text-palette-1-base">
													<b>
														<span className="u-text-palette-3-base">
															+92-21-34390018
														</span>
													</b>
												</span>
												<span className="u-text-palette-3-base"></span>
												<br />
												<br />
												<span style={{ fontSize: "1.5rem" }}>
													All you have to do is phone or email us for an
													appointment, and our assessment specialist will
													contact you. Don’t waste any more time on various
													platforms; call us right now and let&nbsp; acquire it
													from us.
												</span>
												<br />
											</h3>
										</div>
									</div>
									<div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-18 u-layout-cell-2">
										<div className="u-container-layout u-container-layout-2">
											<a
												href="tel:+92-21-34390018"
												className="u-border-none u-btn u-btn-round u-button-style u-hover-white u-palette-3-base u-radius-50 u-btn-1"
											>
												<span className="u-icon">
													<svg
														className="u-svg-content"
														viewBox="0 0 513.64 513.64"
														x="0px"
														y="0px"
														style={{ width: "1em", height: "1em" }}
													>
														<path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72 c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68 c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44 l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"></path>
													</svg>
												</span>
												&nbsp;Call now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
}

export default Services