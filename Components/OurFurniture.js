import React, {useEffect} from 'react'
import img1 from "../styles/images/workstation.jpg";
import img2 from "../styles/images/auditorium-chair.jpg";
import img3 from "../styles/images/Managers-Office-Furniture-Thumnail.jpg";
import img4 from "../styles/images/confressroom.jpg";
import img5 from "../styles/images/recption.jpg";
import img6 from "../styles/images/waiting.jpg";
import img7 from "../styles/images/student.jpg";
import img8 from "../styles/images/MachineRoom5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import Link from 'next/link';

const OurFurniture = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
  return (
		<div className=" mt-[168rem] pb-[10rem]">
			<section className="  text-white">
				<h3 className="  services_taital mt-5" data-aos="fade-up">
					Whats More
				</h3>

				<div className=" row g-0 bg-gradient-to-r from-[#232b79] to-purple-500  p-10 pt-16">
					<div className=" col-md-5  ">
						<div className="furniture_imge">
							<Image
								data-aos="fade-right"
								src={img1}
								alt="Used furniture buyer Abu Dhabi"
							/>
						</div>
					</div>

					<div className=" col-md-1  "></div>

					<div className=" col-md-5 text-center " data-aos="fade-right">
						<h2 className=" font-bold">Workstation Furniture IN Pakistan</h2>
						<p className=" text-justify pb-10 ">
							Do you want to purchase furniture in Pakistan?As a result, all
							things must be sold at a reasonable price. We are USS Furniture,
							and we are ready to come to your workplace or home, wherever in
							Pakistan, to Deliver your furniture and give you an estimate of
							the actual price of each item. The furniture has a significant
							monetary worth to us. If you want to buy something, you can
							visit our shop
						</p>
					</div>
				</div>

				<div className=" row g-0 bg-gradient-to-r from-[#232b79] to-purple-500  p-10 pt-16">
					<div className=" col-md-5 text-center" data-aos="fade-right">
						<h2>Auditorium </h2>
						<p className="text-justify pb-10 ">
							We b sell Auditorium Furniture Is Widely Used In Auditoriums,
							Lecture Halls, Conference Centres, Theater. China Leading
							Supplier. Click Above To Talk With An Oshujian Furniture Expert
							Immediately! Pro-Certification. So, if you tired from your
							Organization and want to buy new one from market then you can
							Contact now and save your time and budget.
						</p>
					</div>
					<div className=" col-md-1 "></div>
					<div className=" col-md-5 " data-aos="fade-right">
						<div className="furniture_imge ">
							<Image src={img2} alt="Used home appliances buyer Abu Dhabi" />
						</div>
					</div>
				</div>

				<div
					className=" row g-0 row g-0 bg-gradient-to-r from-[#232b79] to-purple-500 p-10 pt-16 "
					data-aos="fade-right"
				>
					<div className=" col-md-5 ">
						<div className="furniture_imge ">
							<Image src={img3} alt="Used household item buyer Abu Dhabi" />
						</div>
					</div>
					<div className=" col-md-1 "></div>
					<div className=" col-md-5 text-center pt-10">
						<h2>MANAGERIAL OFFICES Furniture IN Pakistan</h2>
						<p className="text-justify pb-10 ">
							We buy and sellWe Sell and Office Desk Furniture for Manager with
							Modern Design, Find Details include Size,Weight,Model and Width
							about Office Desk Furniture for Manager and all other necessary
							items at reasonable price.Best Quality Manager Table for sale at
							affordable price. USS has the best and latest range of Manager
							tables, shop online or visit our nearest store. Contact now and
							sell your used household items.
						</p>
					</div>
				</div>
				<div className=" row g-0 bg-gradient-to-r from-[#232b79] to-purple-500  p-10 pt-16">
					<div className=" col-md-5 text-center" data-aos="fade-right">
						<h2>CONFERENCE SPACE Furniture </h2>
						<p className="text-justify pb-10 ">
							We sell We Sell Executive conference room furniture features
							traditional chair and table designs, while contemporary meeting
							spaces include smart, modular designs for Conference So, if you
							tired from your Organization and want to buy new one from market
							then you can Contact now and save your time and budget.
						</p>
					</div>
					<div className=" col-md-1 "></div>
					<div className=" col-md-5 " data-aos="fade-right">
						<div className="furniture_imge ">
							<Image src={img4} alt="Used home appliances buyer Abu Dhabi" />
						</div>
					</div>
				</div>
				<div
					className=" row g-0 row g-0 bg-gradient-to-r from-[#232b79] to-purple-500  p-10 pt-16 "
					data-aos="fade-right"
				>
					<div className=" col-md-5 ">
						<div className="furniture_imge ">
							<Image
								src={img5}
								height={500}
								alt="Used household item buyer Abu Dhabi"
							/>
						</div>
					</div>
					<div className=" col-md-1 "></div>
					<div className=" col-md-5 text-center pt-10">
						<h2>RECEPTIONS Furniture IN Pakistan</h2>
						<p className="text-justify pb-10 ">
							We Sell Reception area furniture, also called waiting room
							furnishings, consists of reception desks, guest chairs, accent
							tables, décor and much more.Best Quality Reception Table for sale
							at affordable price. USS has the best and latest range shop online
							or visit our nearest store. Contact now
						</p>
					</div>
				</div>
				<div className=" row g-0 bg-gradient-to-r from-[#232b79] to-purple-500  p-10 pt-16">
					<div className=" col-md-5 text-center" data-aos="fade-right">
						<h2>WAITING AREAS Furniture in Pakistan </h2>
						<p className="text-justify pb-10 ">
							Sell Reception area furniture, also called waiting room
							furnishings, consists of reception desks, guest chairs, accent
							tables, décor and much more. So, if you tired from your
							Organization and want to buy new one from market then you can
							Contact now and save your time and budget.
						</p>
					</div>
					<div className=" col-md-1 "></div>
					<div className=" col-md-5 " data-aos="fade-right">
						<div className="furniture_imge ">
							<Image src={img6} alt="Used home appliances buyer Abu Dhabi" />
						</div>
					</div>
				</div>
				<div
					className=" row g-0 row g-0 bg-gradient-to-r from-[#232b79] to-purple-500 p-10 pt-16 "
					data-aos="fade-right"
				>
					<div className=" col-md-5 ">
						<div className="furniture_imge ">
							<Image src={img7} alt="Used household item buyer Abu Dhabi" />
						</div>
					</div>
					<div className=" col-md-1 "></div>
					<div className=" col-md-5 text-center pt-10">
						<h2>CHAIRS AND STUDENT DESK</h2>
						<p className="text-justify pb-10 ">
							Used furniture buyer Abu DhabiCHAIRS AND STUDENT DESKWe Sell Our
							Revolving Chairs, Vistor Chair, Student chairs and Student Desk
							can come with table, seat, arm and bench options and are available
							in a lot of different sizes, seat lengths, colours.Best Quality
							Table,Desk,Chairs for sale at affordable price. USS has the best
							and latest range , shop online or visit our nearest store. Contact
							now .
						</p>
					</div>
				</div>
				<div className=" row g-0 bg-gradient-to-r from-[#232b79] to-purple-500  p-10 pt-16">
					<div className=" col-md-5 text-center" data-aos="fade-right">
						<h2>OUR TOOLS & MACHINARY </h2>
						<p className="text-justify pb-10 ">
							We Sell Our Wood Surface Planer,Light-Duty Wood Machinery Planer
							Single Side Thicknesser,Ara Machine,Grinding, Machine Wood Cutter
							Handheld Machine,Saw machine,Nail Apron,Drill Machine Combination
							Square,Aligning Scale,and other Machines and Tools options and are
							available in a lot of different work. So, if you tired from your
							Organization and want to buy new one from market then you can
							Contact now and save your time and budget.
						</p>
					</div>
					<div className=" col-md-1 "></div>
					<div className=" col-md-5 " data-aos="fade-right">
						<div className="furniture_imge ">
							<Image src={img8} alt="Used home appliances buyer Abu Dhabi" />
						</div>
					</div>
					<div className="read_bt_main">
						<div className="read_bt">
							<Link href="tel:+922134390018">Call Now</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default OurFurniture
