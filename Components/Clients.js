import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import Security from '../styles/images/ASF_PK_Logo-removebg-preview.png'
import GOP from '../styles/images/GOP.png'
import PIA from '../styles/images/pia.png'
import DC from '../styles/images/sindh.png'
import AU from '../styles/images/Agriculture.png'
import EP from '../styles/images/Enviroment.png'
import Custom from '../styles/images/custom.png'
import Benzir from '../styles/images/benazir.png'
import Gawader from '../styles/images/Gwadar-Development-Authority-B-23-09-1024x640-removebg-preview.png'
import Lu from '../styles/images/LUAWMS-Logo-removebg-preview.png'
import PS  from '../styles/images/pakistanStandard.png' 
import Link from 'next/link';
export const Clientss=()=>{
		return (
			<>
				<section
					className="u-align-center-lg u-align-center-md u-align-center-xl u-align-center-xs u-align-right-sm u-clearfix u-palette-1-base u-section-14 "
					id="carousel_e759"
					data-aos="fade-in"
				>
					<div className="u-clearfix u-sheet u-sheet-1">
						<div className="u-expanded-width u-list u-list-2">
							<div className="u-repeater u-repeater-2">
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-7">
									<div className="u-container-layout u-similar-container u-container-layout-7">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-14">
											13
										</span>
										<div className="u-icon icons">
											<Image src={DC} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-15">
											Provincial Mohtasib Ombudsman, Sindh
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-palette-1-base u-radius-20 u-repeater-item u-shape-round u-list-item-8">
									<div className="u-container-layout u-similar-container u-container-layout-8">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-16">
											14
										</span>
										<div className="u-icon icons">
											<Image src={Custom} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-17">
											Model Customs Collectorate, Hyderabad
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-9">
									<div className="u-container-layout u-similar-container u-container-layout-9">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-18">
											15
										</span>
										<div className="u-icon icons">
											<Image src={Benzir} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-19">
											Shaheed Mohtarma Benazir Bhutto --Medical University,
											Larkana
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-4">
									<div className="u-container-layout u-similar-container u-container-layout-4">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-8">
											16
										</span>
										<div className="u-icon icons">
											<Image src={DC} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-9">
											Deputy Commissioner Larkana.
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-5">
									<div className="u-container-layout u-similar-container u-container-layout-5">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-10">
											17
										</span>
										<div className="u-icon icons">
											<Image src={AU} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-11">
											Sindh Agriculture University, Tando Jam
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-6">
									<div className="u-container-layout u-similar-container u-container-layout-6">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-12">
											18
										</span>
										<div className="u-icon icons">
											<Image src={EP} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-13">
											Environmental Protections Agency, GOS
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-7">
									<div className="u-container-layout u-similar-container u-container-layout-7">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-14">
											19
										</span>
										<div className="u-icon icons">
											<Image src={DC} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-15">
											Provincial Mohtasib Ombudsman, Sindh
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-palette-1-base u-radius-20 u-repeater-item u-shape-round u-list-item-8">
									<div className="u-container-layout u-similar-container u-container-layout-8">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-16">
											20
										</span>
										<div className="u-icon icons">
											<Image src={Custom} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-17">
											Model Customs Collectorate, Hyderabad
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-9">
									<div className="u-container-layout u-similar-container u-container-layout-9">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-18">
											21
										</span>
										<div className="u-icon icons">
											<Image src={Benzir} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-19">
											Shaheed Mohtarma Benazir Bhutto --Medical University,
											Larkana
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-4">
									<div className="u-container-layout u-similar-container u-container-layout-4">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-8">
											22
										</span>
										<div className="u-icon icons">
											<Image src={DC} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-9">
											Deputy Commissioner Larkana.
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-5">
									<div className="u-container-layout u-similar-container u-container-layout-5">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-10">
											23
										</span>
										<div className="u-icon icons">
											<Image src={AU} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-11">
											Sindh Agriculture University, Tando Jam
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-6">
									<div className="u-container-layout u-similar-container u-container-layout-6">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-12">
											24
										</span>
										<div className="u-icon icons">
											<Image src={EP} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-13">
											Environmental Protections Agency, GOS
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-4">
									<div className="u-container-layout u-similar-container u-container-layout-4">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-8">
											25
										</span>
										<div className="u-icon icons">
											<Image src={DC} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-9">
											Deputy Commissioner Larkana.
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-5">
									<div className="u-container-layout u-similar-container u-container-layout-5">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-10">
											26
										</span>
										<div className="u-icon icons">
											<Image src={AU} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-11">
											Sindh Agriculture University, Tando Jam
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-6">
									<div className="u-container-layout u-similar-container u-container-layout-6">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-12">
											27
										</span>
										<div className="u-icon icons">
											<Image src={EP} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-13">
											Environmental Protections Agency, GOS
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-7">
									<div className="u-container-layout u-similar-container u-container-layout-7">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-14">
											28
										</span>
										<div className="u-icon icons">
											<Image src={DC} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-15">
											Provincial Mohtasib Ombudsman, Sindh
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-palette-1-base u-radius-20 u-repeater-item u-shape-round u-list-item-8">
									<div className="u-container-layout u-similar-container u-container-layout-8">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-16">
											29
										</span>
										<div className="u-icon icons">
											<Image src={Custom} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-17">
											Model Customs Collectorate, Hyderabad
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-9">
									<div className="u-container-layout u-similar-container u-container-layout-9">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-18">
											30
										</span>
										<div className="u-icon icons">
											<Image src={Benzir} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-19">
											Shaheed Mohtarma Benazir Bhutto --Medical University,
											Larkana
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-4">
									<div className="u-container-layout u-similar-container u-container-layout-4">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-8">
											31
										</span>
										<div className="u-icon icons">
											<Image src={DC} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-9">
											Deputy Commissioner Larkana.
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-5">
									<div className="u-container-layout u-similar-container u-container-layout-5">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-10">
											32
										</span>
										<div className="u-icon icons">
											<Image src={AU} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-11">
											Sindh Agriculture University, Tando Jam
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-6">
									<div className="u-container-layout u-similar-container u-container-layout-6">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-12">
											33
										</span>
										<div className="u-icon icons">
											<Image src={EP} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-13">
											Environmental Protections Agency, GOS
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-7">
									<div className="u-container-layout u-similar-container u-container-layout-7">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-14">
											34
										</span>
										<div className="u-icon icons">
											<Image src={DC} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-15">
											Provincial Mohtasib Ombudsman, Sindh
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-palette-1-base u-radius-20 u-repeater-item u-shape-round u-list-item-8">
									<div className="u-container-layout u-similar-container u-container-layout-8">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-16">
											35
										</span>
										<div className="u-icon icons">
											<Image src={Custom} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-17">
											Model Customs Collectorate, Hyderabad
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-9">
									<div className="u-container-layout u-similar-container u-container-layout-9">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-18">
											36
										</span>
										<div className="u-icon icons">
											<Image src={Benzir} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-19">
											Shaheed Mohtarma Benazir Bhutto --Medical University,
											Larkana
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-4">
									<div className="u-container-layout u-similar-container u-container-layout-4">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-8">
											37
										</span>
										<div className="u-icon icons">
											<Image src={DC} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-9">
											Deputy Commissioner Larkana.
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-5">
									<div className="u-container-layout u-similar-container u-container-layout-5">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-10">
											38
										</span>
										<div className="u-icon icons">
											<Image src={AU} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-11">
											Sindh Agriculture University, Tando Jam
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-6">
									<div className="u-container-layout u-similar-container u-container-layout-6">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-12">
											39
										</span>
										<div className="u-icon icons">
											<Image src={EP} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-13">
											Environmental Protections Agency, GOS
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-7">
									<div className="u-container-layout u-similar-container u-container-layout-7">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-14">
											40
										</span>
										<div className="u-icon icons">
											<Image src={DC} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-15">
											Provincial Mohtasib Ombudsman, Sindh
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-palette-1-base u-radius-20 u-repeater-item u-shape-round u-list-item-8">
									<div className="u-container-layout u-similar-container u-container-layout-8">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-16">
											41
										</span>
										<div className="u-icon icons">
											<Image src={Custom} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-17">
											Model Customs Collectorate, Hyderabad
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-9">
									<div className="u-container-layout u-similar-container u-container-layout-9">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-18">
											42
										</span>
										<div className="u-icon icons">
											<Image src={Benzir} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-19">
											Shaheed Mohtarma Benazir Bhutto --Medical University,
											Larkana
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-4">
									<div className="u-container-layout u-similar-container u-container-layout-4">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-8">
											43
										</span>
										<div className="u-icon icons">
											<Image src={DC} alt="" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-9">
											Deputy Commissioner Larkana.
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-5">
									<div className="u-container-layout u-similar-container u-container-layout-5">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-10">
											44
										</span>
										<div className="u-icon icons">
											<Image src={AU} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-11">
											Sindh Agriculture University, Tando Jam
										</h2>
									</div>
								</div>
								<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-6">
									<div className="u-container-layout u-similar-container u-container-layout-6">
										<span className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-12">
											45
										</span>
										<div className="u-icon icons">
											<Image src={EP} alt="USS Enterprise ICT company" />
										</div>
										<h2 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-13">
											Environmental Protections Agency, GOS
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}


const Clients = (props) => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	
  return (
		<section
			className="u-align-center-lg u-align-center-md u-align-center-xl u-align-center-xs u-align-right-sm u-clearfix u-palette-1-base u-section-14 pb-[5rem]"
			id="carousel_e759"
			data-aos="fade-in"
		>
			<div className="u-clearfix u-sheet u-sheet-1" data-aos="zoom-in">
				<h2 className="u-align-center-sm u-align-center-xs u-text u-text-1">
					Our Clients
				</h2>
				<div className="u-expanded-width u-list u-list-1">
					<div className="u-repeater u-repeater-1">
						<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1">
							<div className="u-container-layout u-similar-container u-container-layout-1">
								<h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-2">
									01
								</h2>
								<div className="u-icon icons">
									<Image src={Security} alt="" />
								</div>
								<h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-3">
									Air Port Security Force&nbsp;&nbsp;
								</h4>
							</div>
						</div>
						<div className="u-align-center u-container-style u-custom-item u-list-item u-palette-1-base u-radius-20 u-repeater-item u-shape-round u-list-item-2">
							<div className="u-container-layout u-similar-container u-container-layout-2">
								<h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-4">
									02
								</h2>
								<div className="u-icon icons">
									<Image src={GOP} alt="" />
								</div>
								<h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-5">
									-National Savings, GOP.
								</h4>
							</div>
						</div>
						<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-3">
							<div className="u-container-layout u-similar-container u-container-layout-3">
								<h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-6">
									03
								</h2>
								<div className="u-icon icons">
									<Image src={PIA} alt="" />
								</div>
								<h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-7">
									Pakistan International Airlines.
								</h4>
							</div>
						</div>
						<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-4">
							<div className="u-container-layout u-similar-container u-container-layout-4">
								<h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-8">
									04
								</h2>
								<div className="u-icon icons">
									<Image src={DC} alt="" />
								</div>
								<h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-9">
									Deputy Commissioner Larkana.
								</h4>
							</div>
						</div>
						<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-5">
							<div className="u-container-layout u-similar-container u-container-layout-5">
								<h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-10">
									05
								</h2>
								<div className="u-icon icons">
									<Image src={AU} alt="" />
								</div>
								<h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-11">
									Sindh Agriculture University, Tando Jam
								</h4>
							</div>
						</div>
						<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-6">
							<div className="u-container-layout u-similar-container u-container-layout-6">
								<h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-12">
									06
								</h2>
								<div className="u-icon icons">
									<Image src={EP} alt="" />
								</div>
								<h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-13">
									Environmental Protections Agency, GOS
								</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="u-expanded-width u-list u-list-2">
					<div className="u-repeater u-repeater-2">
						<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-7">
							<div className="u-container-layout u-similar-container u-container-layout-7">
								<h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-14">
									07
								</h2>
								<div className="u-icon icons">
									<Image src={DC} alt="" />
								</div>
								<h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-15">
									Provincial Mohtasib Ombudsman, Sindh
								</h4>
							</div>
						</div>
						<div className="u-align-center u-container-style u-custom-item u-list-item u-palette-1-base u-radius-20 u-repeater-item u-shape-round u-list-item-8">
							<div className="u-container-layout u-similar-container u-container-layout-8">
								<h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-16">
									08
								</h2>
								<div className="u-icon icons">
									<Image src={Custom} alt="" />
								</div>
								<h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-17">
									Model Customs Collectorate, Hyderabad
								</h4>
							</div>
						</div>
						<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-9">
							<div className="u-container-layout u-similar-container u-container-layout-9">
								<h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-18">
									09
								</h2>
								<div className="u-icon icons">
									<Image src={Benzir} alt="" />
								</div>
								<h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-19">
									Shaheed Mohtarma Benazir Bhutto --Medical University, Larkana
								</h4>
							</div>
						</div>
						<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-10">
							<div className="u-container-layout u-similar-container u-container-layout-10">
								<h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-20">
									10
								</h2>
								<div className="u-icon icons">
									<Image src={Gawader} alt="" />
								</div>
								<h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-21">
									Gawadar Development Authority
								</h4>
							</div>
						</div>
						<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-11">
							<div className="u-container-layout u-similar-container u-container-layout-11">
								<h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-22">
									11
								</h2>
								<div className="u-icon icons">
									<Image src={Lu} alt="" />
								</div>
								<h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-23">
									Lasbela University of Agriculture, Water &amp; Marine Sciences
								</h4>
							</div>
						</div>
						<div className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-12">
							<div className="u-container-layout u-similar-container u-container-layout-12">
								<h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-palette-1-base u-text-24">
									12
								</h2>
								<div className="u-icon icons">
									<Image src={PS} alt="" />
								</div>
								<h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-palette-1-base u-text-25">
									Pakistan Standard &amp; Quality Control Authority
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Clients