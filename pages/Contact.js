import React from 'react'
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import LandingPage from '../Components/LandingPage'
import NavBar from '../Components/NavBar'
import Head from "next/head";


const Contact = () => {
  return (
		<>
				
			<Head>
				<title>Contact Us</title>
				<meta name="description" content="For any enquiry, quotation, complain or comments please fill the form and submit, we will communicate with you" />
				<meta property="og:title" content="Contact Us"></meta>
				<meta property="og:description" content="For any enquiry, quotation, complain or comments please fill the form and submit, we will communicate with you." />
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
					Name="Contact Us"
					desc="For any enquiry, quotation, complain or comments please fill the form and submit, we will communicate with you"
				/>
			</section>
			<ContactForm />
			<Footer />
		</>
	);
}

export default Contact
