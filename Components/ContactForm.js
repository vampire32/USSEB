import React,{useEffect} from 'react'
import Image from "next/image";
import Phone from "../styles/images/159832.png";
import Office from "../styles/images/535239.png";
import Email from "../styles/images/561127.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
	const SendEmail=()=>{
		Email.send({
			Host: "smtp.elasticemail.com",
			Username: "moizabdul320@gmail.com",
			Password: "FCB98BC1CB5CF7068539D3945F4AB3DB8D85",
			To: "moizabdul320@gmail.com",
			From: document.getElementById("Email"),
			
			Body: document.getElementById(Body),
		}).then((message) => alert(message));

	}

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
  return (
		<section
			className="u-clearfix u-valign-bottom-lg u-valign-bottom-md u-valign-bottom-xl u-white u-section-16"
			id="carousel_ee4d"
			data-aos="fade-in"
		>
			<div className="u-expanded-width u-palette-1-base u-shape u-shape-rectangle u-shape-1"></div>
			<div className="u-list u-list-1">
				<div className="u-repeater u-repeater-1">
					<div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1">
						<div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
							<span className="u-file-icon u-icon u-text-palette-1-base u-icon-1">
								<Image src={Office} alt="USS Enterprise ICT company" />
							</span>
							<h2 className="u-text u-text-1">our main office</h2>
							<p className="u-text u-text-2">
								Banglow #3/48 Ground Floor, MCHS,Khalid bin Waleed Road, Karachi
								Pakistan
							</p>
						</div>
					</div>
					<div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-2">
						<div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
							<span className="u-file-icon u-icon u-text-palette-1-base u-icon-2">
								<Image src={Phone} alt="USS Enterprise ICT company" />
							</span>
							<h2 className="u-text u-text-3">phone number</h2>
							<p className="u-text u-text-4">
								<b>+92-21-34390018</b>
							</p>
						</div>
					</div>
					<div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-3">
						<div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
							<span className="u-file-icon u-icon u-text-palette-1-base u-icon-3">
								<Image src={Email} alt="USS Enterprise ICT company" />
							</span>
							<h2 className="u-text u-text-5">Email</h2>
							<p className="u-text u-text-6">
								<a
									href="mailto:hello@theme.com"
									className="u-active-none u-border-1 u-border-palette-1-base u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1"
								>
									<b>info@usseb.com</b>
									<br />
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="u-clearfix u-layout-wrap u-layout-wrap-1">
				<div className="u-layout">
					<div className="u-layout-row">
						<div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
							<div className="u-container-layout u-container-layout-4">
								<div className="u-align-center-xs u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-radius-50 u-shape-round u-similar-fill u-white u-group-1">
									<div className="u-container-layout u-padding-12 u-container-layout-5">
										<p className="u-text u-text-default-lg u-text-default-md u-text-default-xl u-text-7">
											For all enquiries, Please email us while using below form
										</p>
										<div className="u-align-left u-form u-form-1">
											<form
												method="POST"
												className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form m-40"
												action="https://formsubmit.co/78bc9731ca3b708afe66357b80608917"
												target="_blank"
											>
												<div className="u-form-group u-form-name">
													<label
														forhtml="name-5a14"
														className="u-form-control-hidden u-label u-text-palette-1-base"
													>
														Name
													</label>
													<input
														type="text"
														placeholder="Enter your Name"
														id="Name"
														name="name"
														className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"
														required
													/>
												</div>
												<div className="u-form-email u-form-group">
													<label
														forhtml="email-5a14"
														className="u-form-control-hidden u-label u-text-palette-1-base"
													>
														Email
													</label>
													<input
														type="email"
														placeholder="Enter a valid email address"
														id="Email"
														name="email"
														className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"
														required
													/>
												</div>
												<div className="u-form-group u-form-message">
													<label
														forhtml="message-5a14"
														className="u-form-control-hidden u-label u-text-palette-1-base"
													>
														Message
													</label>
													<textarea
														placeholder="tour Message"
														rows="4"
														cols="50"
														id="Body"
														name="message"
														required
														className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"
													></textarea>
												</div>
												<div className="u-align-left u-form-group u-form-submit">
													<button
														type="submit"
														className="u-active-black u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-black u-palette-1-base u-radius-50 u-btn-2"
													>
														Submit
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
							<div className="u-container-layout u-container-layout-6">
								<h2 className="u-text u-text-default u-text-8">Get in touch</h2>
								<h3 className="u-custom-font u-text u-text-font u-text-9">
									{" "}
									We believe sustainability is vitally important.
								</h3>
								<p className="u-text u-text-10">
									Please get in touch and our expert support team will answer
									all your question{" "}
								</p>
								<div className="u-social-icons u-spacing-20 u-social-icons-1">
									<a
										className="u-social-url"
										href="https://www.facebook.com/USS-Enterprises-101631834747302/"
										target="_blank"
										rel="noreferrer"
									>
										<span className="u-icon u-icon-circle u-social-facebook u-social-icon u-text-palette-1-base u-icon-4">
											<svg className="u-svg-link" viewBox="0 0 112 112">
												<use
													xmlnsXlink="http://www.w3.org/1999/xlink"
													xlinkHref="#svg-7d32"
												></use>
											</svg>
											<svg
												className="u-svg-content"
												viewBox="0 0 112 112"
												x="0px"
												y="0px"
												id="svg-7d32"
											>
												<path d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"></path>
											</svg>
										</span>
									</a>
									<a className="u-social-url" target="_blank" href="">
										<span className="u-icon u-icon-circle u-social-icon u-social-twitter u-text-palette-1-base u-icon-5">
											<svg
												className="u-svg-link"
												preserveAspectRatio="xMidYMin slice"
												viewBox="0 0 112 112"
											>
												<use
													xmlnsXlink="http://www.w3.org/1999/xlink"
													xlinkHref="#svg-a46b"
												></use>
											</svg>
											<svg
												className="u-svg-content"
												viewBox="0 0 112 112"
												x="0px"
												y="0px"
												id="svg-a46b"
											>
												<path d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2 c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7 c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2 c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5 c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z"></path>
											</svg>
										</span>
									</a>
									<a className="u-social-url" target="_blank" href="">
										<span className="u-icon u-icon-circle u-social-icon u-social-instagram u-text-palette-1-base u-icon-6">
											<svg
												className="u-svg-link"
												preserveAspectRatio="xMidYMin slice"
												viewBox="0 0 112 112"
											>
												<use
													xmlnsXlink="http://www.w3.org/1999/xlink"
													xlinkHref="#svg-8341"
												></use>
											</svg>
											<svg
												className="u-svg-content"
												viewBox="0 0 112 112"
												x="0px"
												y="0px"
												id="svg-8341"
											>
												<path d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"></path>
												<path d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z"></path>
												<path d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7 V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7 c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"></path>
											</svg>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactForm
