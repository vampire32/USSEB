import React from 'react'
import Clients, { Clientss } from '../Components/Clients';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import LandingPage from '../Components/LandingPage';
import NavBar from '../Components/NavBar';
import Head from "next/head";

const OurClients = () => {
  return (
		<div>
				
			<Head>
				<title>Our Clients</title>
				<meta name="description" content="USS Enterprise have completed more than 45 projects all over Pakistan." />
				<meta property="og:title" content="Contact Us"></meta>
				<meta property="og:description" content="USS Enterprise have completed more than 45 projects all over Pakistan." />
				<meta property="og:url" content="https://usseb.com"></meta>
				<meta property="og:type" content="website"></meta>	
				<meta property="og:image" content="https://mywebsite.net/assets/opengraph/theogimage.jpg"/>
				
				<link rel="icon" href="/favicon.ico" />
			
				
			</Head>
			
			<section
				className="u-align-center u-clearfix u-gradient u-section1"
				src=""
				id="sec-a2a2"
			>
				<NavBar theme="dark" color="white" />
				<LandingPage
					Name="Our Clients"
					desc="We have completed more than 45 projects all over Pakistan.  "
				/>
			</section>
			<div className="u-body u-overlap u-overlap-contrast u-overlap-transparent u-xl-mode">
				<Clients />
				<Clientss />
			</div>

			<ContactForm />
			<Footer />
		</div>
	);
}

export default OurClients