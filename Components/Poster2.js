import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import IMG from "../styles/images/pc.png";
import Image from "next/image";


const Poster2 = () => {
     useEffect(() => {
				AOS.init({
					duration: 1500,
				});
			}, []);
	return (
		<div className="instant mt-5 lg:mb-[10rem] sm:mb-0 ">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6" data-aos="fade-up">
						<div className="titlepage text_align_left">
						
							<h2 style={{color:"yellow"}}>
							USS <span className="text-white">Furniture  Pakistan</span>{" "}
							</h2>
							<p className="text-justify">
							We  sell a variety of furniture in good condition in Pakistan.
As a result, we Sell furniture in Pakistan and deal with used Tools & Machinery, a & Office Furniture, tables & desks, chairs, & school furniture,  &  and many other items.
if you want to purchase USS furniture in Pakistan, then do not hesitate to contact us.
							</p>
							{/* <form  class="flex lg:justify-content-end center_item   ">
						<a href="tel:0503338692" class="button glow-button btn-design  " type="submit">
							Call Now
						</a>
					</form> */}
							{/* <a className="read_more" href="#">
								Get A quote
							</a> */}
						</div>
					</div>
					<div className="col-md-6" data-aos="fade-up">
						<div className="instant_img">
							<figure>
								<Image src={IMG} alt="Used furniture buyer Abu Dhabi" />
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Poster2;
