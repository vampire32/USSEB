import React, {useState} from 'react'
import PLay from '../styles/images/play.png'
import Slider from "../styles/images/furniture-chair.png";
import Slider1 from "../styles/images/home-appliances.png";
import Slider2 from "../styles/images/air-conditioner.png";
import Slider3 from "../styles/images/household-items.png";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";


const Home = (props) => {
	
	
	
	
   
			
   
  return (
		<>
			<section className="slider_section ">
				<div className="play_btn">
					<a>
						<Image src={PLay} alt="Used furniture buyer Abu Dhabi" />
					</a>
				</div>

				<div className="container">
					<div
						id="carouselExampleIndicators"
						className="carousel slide"
						data-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="row">
									<div className="col-md-6">
										<div className="detail-box">
											<span>Universal Systemic Solution Furnitures.</span>
											<h1>
												In Pakistan, you may buy several types of furniture.
											</h1>

											<p>
												We provide a variety of  furniture 
												selling services for both residential and business
												customers.. We sell office
												furniture, Garden furniture, chairs, couches, a complete
												wauting areas, school furniture and Selling Tools and Machinery
												 and much more. SO, if you want to buy furniture
												contact us and Buy in easist way.
											</p>
											<div className="btn-box">
												<a href="tel:0503338692" className="btn-1 text-white">
													Call Now
												</a>
												<Link href="/contactus" className="btn-2">
													Contact us
												</Link>
											</div>
										</div>
									</div>
									<div className="col-md-6 img-container">
										<div className="img-box">
											<Image
												src={Slider}
												alt="Used furniture buyer Abu Dhabi"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home