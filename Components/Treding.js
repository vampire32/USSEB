import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import t1 from "../styles/images/t-1.jpg";
import t2 from "../styles/images/t-2.jpg";
import t3 from "../styles/images/t-3.jpg";
import t4 from "../styles/images/t-4.jpg";
import t5 from "../styles/images/t5.jpg";
import t6 from "../styles/images/t6.jpg";
import t7 from "../styles/images/t7.jpg";
import t8 from "../styles/images/t8.jpg";
import t9 from "../styles/images/t9.jpg";
import t10 from "../styles/images/t10.jpg";
import t11 from "../styles/images/t11.jpg";
import t12 from "../styles/images/t12.jpg";
import t13 from "../styles/images/t13.jpg";
import t14 from "../styles/images/t14.jpg";
import t15 from "../styles/images/t15.jpg";
import t16 from "../styles/images/services.jpg";
import Image from "next/image";

const Treding = () => {
    useEffect(() => {
			AOS.init({
				duration: 1500,
			});
		}, []);
	return (
		<section id="service" className="services-area pt-[125px] pb-[125px] ">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="section-title pb-30">
							<h2 className="mb-15">Our Story</h2>
							<h3 className="title mb-15">
								Build Your Sweet Home,Office & Organizations
							</h3>
							<p>
								To extend supplying centered operations to support services
								vital to consumers and industry .Ta deliver customer
								satisfaction with creativity, innovation, sincerity and
								gratitude, and to act in compliance with the law and ethics.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="services-left mt-45">
							<div className="services">
								<Image src={t16} alt="" />
								<a href="#" className="main-btn mt-30">
									Call Now <i className="lni-chevron-right"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="services-right mt-45">
							<div className="row justify-content-center">
								<div className="col-md-6 col-sm-8">
									<div className="single-services text-center">
										<div className="services-icon">
											<i className="lni-grid-alt"></i>
										</div>
										<div className="services-content mt-20">
											<h5 className="title mb-10">Furnitures</h5>
											<p>
												We provide a variety of furniture selling services for
												both residential and business customers..
											</p>
										</div>
									</div>

									<div className="single-services text-center mt-30">
										<div className="services-icon">
											<i className="lni-ruler-pencil"></i>
										</div>
										<div className="services-content mt-20">
											<h5 className="title mb-10">Decoration</h5>
											<p>
												Furniture gives a complete design to our home & office.
												No matter, what is the purpose of buying furniture, but
												imperatively it takes up the majority of space and makes
												your home feel lived and complete.
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-8">
									<div className="single-services text-center mt-30">
										<div className="services-icon">
											<i className="lni-customer"></i>
										</div>
										<div className="services-content mt-20">
											<h5 className="title mb-10">Consultancy</h5>
											<p>
												USS Enterprises is one of the fastest emerging IT
												Solution provider serving in IT industry since 2015 with
												a wide range of our “Products and Services Portfolio.
												Consultancy with Excellency.
											</p>
										</div>
									</div>

									<div className="single-services text-center mt-30">
										<div className="services-icon">
											<i className="lni-support"></i>
										</div>
										<div className="services-content mt-20">
											<h5 className="title mb-10">Custom Orders</h5>
											<p>
												An order for Products that are commissioned, modified,
												personalised, customised or manufactured, in accordance
												with your specific requirements.
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
	);
};

export default Treding;
