import React from 'react'
import Image from "next/image";
import CEO from '../Components/CEO'
import LandingPage from '../Components/LandingPage';
import NavBar from '../Components/NavBar'
import Icon from "../styles/images/709605.png";
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import Head from "next/head";


const CEOMessage = () => {
	
  return (
		<>
				
			<section
				className="u-align-center u-clearfix u-gradient u-section1"
				src=""
				id="sec-a2a2"
			>
				<NavBar theme="dark" color="white" />
				<LandingPage
					Name="CEO Message"
					desc="Ipsum voluptate eu amet nostrud do enim quis dolore. Est nostrud amet velit ullamco ad eu ipsum deserunt culpa tempor. Aliquip velit ipsum incididunt est officia proident incididunt."
				/>
			</section>
			<div className="u-body u-overlap u-overlap-contrast u-overlap-transparent u-xl-mode">
				<CEO />
			</div>
			<ContactForm />
			<Footer />
		</>
	);
}

export default CEOMessage
