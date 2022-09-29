import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import Tick from "../styles/images/7381543.png";
import Image from "next/image";
import ContactForm from "./ContactForm";
import BG from "../styles/images/phone-removebg-preview.png";
import Footer from "./Footer";

const ProductPortfolio = (props) => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div className="u-body u-xl-mode">
			<section
				className="u-align-center u-clearfix u-gradient u-section1"
				src=""
				id="sec-a2a2"
			>
				<NavBar theme="dark" color="white" />
				<LandingPage Name={props.TopName} desc={props.TopDesc} />
			</section>
			<section
				className="u-align-center-lg u-align-center-md u-align-center-xl u-align-left-sm u-align-left-xs u-clearfix u-white u-section-222"
				width="2000"
				height="1333"
				id="sec-fce4"
			>
				<div className="u-clearfix u-sheet u-valign-bottom u-sheet-1">
					<h2 className="u-text u-text-default u-text-1" data-aos="flip-up">
						{props.ProductName}
					</h2>
					<p className="u-text u-text-2" data-aos="flip-up">
						{props.ProductDesc}
					</p>
					<div
						className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1"
						data-aos="zoom-in"
					>
						<div className="u-gutter-0 u-layout">
							<div className="u-layout-row">
								<div className="u-size-20 u-size-30-md">
									<div className="u-layout-col">
										<div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-20 u-layout-cell-1">
											<div className="u-container-layout u-container-layout-1">
												<h3 className="u-align-left u-text u-text-default u-text-3">
													<b>
														<i>
															<span>
																<span>{props.BrandName}</span>
															</span>
															<br />
														</i>
													</b>
												</h3>
												<p className="u-text u-text-4">
													<span className="u-file-icon u-icon u-icon-1">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList1}
												</p>
												<p className="u-text u-text-5">
													<span className="u-file-icon u-icon u-icon-2">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList12}
												</p>
												<p className="u-text u-text-6">
													<span className="u-file-icon u-icon u-icon-3">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList13}
												</p>
												<p className="u-text u-text-7">
													<span className="u-file-icon u-icon u-icon-4">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList14}
												</p>
											</div>
										</div>
										<div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-20 u-layout-cell-2">
											<div className="u-container-layout u-container-layout-2">
												<h3 className="u-text u-text-8">
													<b>
														<i>
															<span>{props.BrandName2}</span>
															<span></span>
														</i>
													</b>
												</h3>
												<p className="u-align-left u-text u-text-9">
													<span className="u-file-icon u-icon u-icon-5">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList2}
												</p>
												<p className="u-align-left u-text u-text-10">
													<span className="u-file-icon u-icon u-icon-6">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList21}
												</p>
												<p className="u-align-left u-text u-text-11">
													<span className="u-file-icon u-icon u-icon-7">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList23}
												</p>
												<p className="u-align-left u-text u-text-12">
													<span className="u-file-icon u-icon u-icon-8">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList24}
												</p>
												<p className="u-align-left u-text u-text-13">
													<span className="u-file-icon u-icon u-icon-9">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList25}
												</p>
												<p className="u-align-left u-text u-text-14">
													<span className="u-file-icon u-icon u-icon-10">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList26}
												</p>
											</div>
										</div>
										/
										<div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-20 u-layout-cell-3">
											<div className="u-container-layout u-container-layout-3">
												<h3 className="u-align-left ">
													<b>
														<i>
															<span>{props.BrandName3}</span>
															<span>
																<span></span>
															</span>
														</i>
													</b>
												</h3>
												<p className="u-align-left u-text u-text-18">
													<span className="u-file-icon u-icon u-icon-13">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList3}
												</p>
												<p className="u-align-left u-text u-text-19">
													<span className="u-file-icon u-icon u-icon-14">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList31}
												</p>
												<p className="u-align-left u-text u-text-20">
													<span className="u-file-icon u-icon u-icon-15">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList32}
												</p>
												<p className="u-align-left u-text u-text-21">
													<span className="u-file-icon u-icon u-icon-16">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList33}
												</p>
												<p className="u-align-left u-text u-text-22">
													<span className="u-file-icon u-icon u-icon-17">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList34}
												</p>
												<p className="u-align-left u-text u-text-23">
													<span className="u-file-icon u-icon u-icon-18">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList35}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="u-size-20 u-size-30-md">
									<div
										className="flex-row justify-center align-middle "
										style={{ marginTop: "20vh" }}
									>
										<div className="">
											<Image
												src={props.BG}
												width={500}
												height={500}
												alt="USS Enterprise ICT company"
											/>

											<div
												className="u-container-layout u-valign-top u-container-layout-4"
												src=""
											></div>
										</div>
									</div>
								</div>
								<div className="u-size-20 u-size-60-md">
									<div className="u-layout-col">
										<div className="u-container-style u-layout-cell u-right-cell u-size-20 u-layout-cell-5">
											<div className="u-container-layout u-container-layout-5">
												<h3 className="u-align-left u-text u-text-default u-text-24 font-bold">
													<span>
														<span>{props.BrandName4}</span>
													</span>
													<br />
												</h3>
												<p className="u-align-left u-text u-text-25">
													<span className="u-file-icon u-icon u-icon-19">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList4}
												</p>
												<p className="u-align-left u-text u-text-26">
													<span className="u-file-icon u-icon u-icon-20">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList41}
												</p>
												<p className="u-align-left u-text u-text-27">
													<span className="u-file-icon u-icon u-icon-21">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList42}
												</p>
											</div>
										</div>
										<div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-layout-cell-6">
											<div className="u-container-layout u-container-layout-6">
												<h3 className="u-text u-text-default u-text-28">
													<b>
														<i>
															<span>{props.BrandName5}</span>
															<span>
																<span></span>
															</span>
														</i>
													</b>
												</h3>
												<p className="u-align-left u-text u-text-29">
													<span className="u-file-icon u-icon u-icon-22">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList5}
												</p>
												<p className="u-align-left u-text u-text-30">
													<span className="u-file-icon u-icon u-icon-23">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList51}
												</p>
												<p className="u-align-left u-text u-text-31">
													<span className="u-file-icon u-icon u-icon-24">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList52}
												</p>
												<p className="u-align-left u-text u-text-32">
													<span className="u-file-icon u-icon u-icon-25">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList53}
												</p>
											</div>
										</div>
										<div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-layout-cell-7">
											<div className="u-container-layout u-container-layout-7">
												<h3 className="u-text u-text-default u-text-33">
													<b>
														<i>
															<span>{props.BrandName6}</span>
															<span>
																<span></span>
																<span> I</span>
															</span>
															<span>
																<span></span>
															</span>
														</i>
													</b>
												</h3>
												<p className="u-align-left u-text u-text-34">
													<span className="u-file-icon u-icon u-icon-26">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList61}
												</p>
												<p className="u-align-left u-text u-text-35">
													<span className="u-file-icon u-icon u-icon-27">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList62}
												</p>
												<p className="u-align-left u-text u-text-36">
													<span className="u-file-icon u-icon u-icon-28">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList63}
												</p>
												<p className="u-align-left u-text u-text-37">
													<span className="u-file-icon u-icon u-icon-29">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList64}
												</p>
												<p className="u-align-left u-text u-text-38">
													<span className="u-file-icon u-icon u-icon-30">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList64}
												</p>
												<p className="u-align-left u-text u-text-39">
													<span className="u-file-icon u-icon u-icon-31">
														<Image
															src={Tick}
															width={37}
															height={37}
															alt="USS Enterprise ICT company"
														/>
													</span>
													{props.BrandList65}
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
				className="u-clearfix u-palette-1-base u-section-333"
				id="sec-d962"
			>
				<div className="u-clearfix u-sheet u-sheet-1" data-aos="slide-up">
					<div className="u-expanded-width u-list u-list-1">
						<div className="u-repeater u-repeater-1">
							<div className="u-container-style u-list-item u-repeater-item">
								<div className="u-container-layout u-similar-container u-container-layout-1">
									<h3 className="u-align-left u-text u-text-1">
										<b>
											<i>
												<span>
													<span>{props.CompanyName}</span>
													<span></span>
												</span>
											</i>
										</b>
										<br />
									</h3>
									<p className="u-align-left u-text u-text-2">
										<span className="u-file-icon u-icon u-icon-1">
											<Image
												src={Tick}
												width={37}
												height={37}
												alt="USS Enterprise ICT company"
											/>
										</span>
										{props.ServiceList1}
									</p>
									<p className="u-align-left u-text u-text-3">
										<span className="u-file-icon u-icon u-icon-2">
											<Image
												src={Tick}
												width={37}
												height={37}
												alt="USS Enterprise ICT company"
											/>
										</span>
										{props.ServiceList12}
									</p>
									<p className="u-align-left u-text u-text-4">
										<span className="u-file-icon u-icon u-icon-3">
											<Image
												src={Tick}
												width={37}
												height={37}
												alt="USS Enterprise ICT company"
											/>
										</span>
										{props.ServiceList13}
									</p>
									<p className="u-align-left u-text u-text-5">
										<span className="u-file-icon u-icon u-icon-4">
											<Image
												src={Tick}
												width={37}
												height={37}
												alt="USS Enterprise ICT company"
											/>
										</span>
										{props.ServiceList14}
									</p>
								</div>
							</div>
							<div className="u-container-style u-list-item u-repeater-item">
								<div className="u-container-layout u-similar-container u-container-layout-2">
									<h3 className="u-align-left u-text u-text-6">
										<span>
											&nbsp;&nbsp;<span>{props.CompanyName2}</span>
										</span>
										<br />
									</h3>
									<p className="u-align-left u-text u-text-7">
										<span className="u-file-icon u-icon u-icon-5">
											<Image
												src={Tick}
												width={37}
												height={37}
												alt="USS Enterprise ICT company"
											/>
										</span>
										{props.ServiceList2}
									</p>
									<p className="u-align-left u-text u-text-8">
										<span className="u-file-icon u-icon u-icon-6">
											<Image
												src={Tick}
												width={37}
												height={37}
												alt="USS Enterprise ICT company"
											/>
										</span>
										{props.ServiceList21}
									</p>
									<p className="u-align-left u-text u-text-9">
										<span className="u-file-icon u-icon u-icon-7">
											<Image
												src={Tick}
												width={37}
												height={37}
												alt="USS Enterprise ICT company"
											/>
										</span>
										{props.ServiceList22}
									</p>
									<p className="u-align-left u-text u-text-10">
										<span className="u-file-icon u-icon u-icon-8">
											<Image
												src={Tick}
												width={37}
												height={37}
												alt="USS Enterprise ICT company"
											/>
										</span>
										{props.ServiceList23}
									</p>
								</div>
							</div>
							<div className="u-container-style u-list-item u-repeater-item">
								<div className="u-container-layout u-similar-container u-container-layout-3">
									<h3 className="u-align-left u-text u-text-11">
										<span>
											<b>
												<span>
													<i>
														<span>{props.CompanyName3}</span>
													</i>
												</span>
												<span></span>
											</b>
										</span>
										<br />
									</h3>
									<p className="u-align-left u-text u-text-12">
										<span className="u-file-icon u-icon u-icon-9">
											<Image
												src={Tick}
												width={37}
												height={37}
												alt="USS Enterprise ICT company"
											/>
										</span>
										{props.ServiceList3}
									</p>
									<p className="u-align-left u-text u-text-13">
										<span className="u-file-icon u-icon u-icon-10">
											<Image
												src={Tick}
												width={37}
												height={37}
												alt="USS Enterprise ICT company"
											/>
										</span>
										{props.ServiceList31}
									</p>
									<p className="u-align-left u-text u-text-14">
										<span className="u-file-icon u-icon u-icon-11">
											<Image
												src={Tick}
												width={37}
												height={37}
												alt="USS Enterprise ICT company"
											/>
										</span>
										{props.ServiceList32}
									</p>
									<p className="u-align-left u-text u-text-15">
										<span className="u-file-icon u-icon u-icon-12">
											<Image
												src={Tick}
												width={37}
												height={37}
												alt="USS Enterprise ICT company"
											/>
										</span>
										{props.ServiceList33}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ContactForm />
			<Footer />
		</div>
	);
};

export default ProductPortfolio;
