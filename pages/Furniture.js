import Image from 'next/image';
import React from 'react'
import Icon from "../styles/images/709605.png";
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import Home from '../Components/Home'
import NavBar from '../Components/NavBar'
import OurFurniture from '../Components/OurFurniture';
import OurServices from '../Components/OurServices';
import Poster from '../Components/Poster';
import Poster2 from '../Components/Poster2';
import PosterDown from '../Components/PosterDown';
import Treding from '../Components/Treding';
import Who from '../Components/Who';
import Testimonials from '../Components/Testimonials';

const Furniture = () => {
  return (
		<div>
			<div className="hero_area">
				<NavBar />
				<Home />
			</div>
			<OurServices />
			<Who />
			<OurFurniture />

			<Poster2 />
			<Treding />
            <Testimonials/>
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
            
			<ContactForm />
			<Footer />
		</div>
	);
}

export default Furniture
