import React,{useEffect} from 'react'
import icon1 from "../styles/images/office-desk-3635287-3038675-removebg-preview.png";
import icon2 from "../styles/images/autorium-removebg-preview.png";
import icon3 from "../styles/images/manager_office-removebg-preview.png";
import icon4 from "../styles/images/confress-removebg-preview.png";
import icon5 from "../styles/images/3d-reception-desk-03-01-removebg-preview.png";
import icon6 from "../styles/images/waiting-area-5250567-4391183-removebg-preview.png";
import icon7 from "../styles/images/leather-office-chair-480x360-removebg-preview.png";
import icon8 from "../styles/images/repair-tool-4320548-3626637__1_-removebg-preview.png";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image'
import Link from 'next/link'

const OurServices = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
   const services = [
			{
				title: "Work Stations",
				descriptiion:
					"Workstation furniture is a broad category that includes all furnishings, such as seating, tables and cabinets, needed and implemented in a given work area to promote organization, safety and productivity in industrial, commercial and domestic occupational environments",
				img: icon1,
				
			},
			{
				title: "Auditoriums",
				descriptiion:
					"Auditorium Chair Is Widely Used In Auditoriums, Lecture Halls, Conference Centres, Theater. China Leading Supplier. Click Above To Talk With An Oshujian Furniture Expert Immediately! Pro-Certification",
				img: icon2,
				
			},
			{
				title: "Managerial Offices",
				descriptiion:
					"We Sell and Office Desk Furniture for Manager with Modern Design, Find Details include Size,Weight,Model and Width about Office Desk Furniture for Manager",
				img: icon3,
				
			},
			{
				title: "Conference Space",
				descriptiion:
					"We Sell Executive conference room furniture features traditional chair and table designs, while contemporary meeting spaces include smart, modular designs. Conference",
				img: icon4,
				
			},
			{
				title: "Receptions",
				descriptiion:
					"We Sell Reception area furniture, also called waiting room furnishings, consists of reception desks, guest chairs, accent tables, décor and much more.",
				img: icon5,
				
			},
			{
				title: "Waiting Areas",
				descriptiion:
					"We Sell Reception area furniture, also called waiting room furnishings, consists of reception desks, guest chairs, accent tables, décor and much more.",
				img: icon6,
				
			},
			
			{
				title: "Chairs and Student Desk",
				descriptiion:
					"We Sell Our Revolving Chairs, Vistor Chair, Student chairs and Student Desk can come with table, seat, arm and bench options and are available in a lot of different sizes, seat lengths, colours",
				img: icon7,
				
			},
			{
				title: "OUR TOOLS & MACHINARY",
				descriptiion:
					"We Sell Our Wood Surface Planer,Light-Duty Wood Machinery Planer Single Side Thicknesser,Ara Machine,Grinding, Machine Wood Cutter Handheld Machine,Saw machine,Nail Apron,Drill Machine Combination Square,Aligning Scale,and other Machines and Tools   options and are available in a lot of different work",
				img: icon8,
				
			},
		];
  return (
		<div className="services_section layout_padding bg-white ">
			<div className="container">
				<span className="services_taital" data-aos="fade-in">
					OUR KEY SERVICES ARE
				</span>
				<p className="many_taital" data-aos="fade-in">
					Relaible And Trustworthly Services in Pakistan
				</p>
				<div className="services_section2 layout_padding" data-aos="fade-up">
					<div className="row  company-title">
						{services.map((item) => (
							<div key={item.title} className="col-lg-4 col-md-4 pb-10">
								<div className="icon_1">
									<div className="img_adjust">
										<Image
											src={item.img}
											alt="Used furniture buyer Abu Dhabi"
											width={120}
											height={100}
										/>
									</div>
								</div>
								<h2 className="furnitures_text">{item.title}</h2>
								<p className="dummy_text">{item.descriptiion}</p>
							</div>
						))}
						<div className="read_bt_main">
							<div className="read_bt">
								<Link href="tel:+922134390018">Call Now</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurServices