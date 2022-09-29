import React from 'react'
import NavBar from '../Components/NavBar'
import CEO from "../Components/CEO";
import Teams from '../Components/Teams';
import Footer from '../Components/Footer';
import Head from "next/head";
const OurTeam = () => {
  return (
		<>
			<Head>
				<title>Our Clients</title>
				<meta
					name="description"
					content="USS Enterprise have completed more than 45 projects all over Pakistan."
				/>
				<meta property="og:title" content="Contact Us"></meta>
				<meta
					property="og:description"
					content="USS Enterprise have completed more than 45 projects all over Pakistan."
				/>
				<meta property="og:url" content="https://usseb.com"></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:image"
					content="https://mywebsite.net/assets/opengraph/theogimage.jpg"
				/>
				
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="u-body u-overlap u-overlap-contrast u-overlap-transparent u-xl-mode">
				<NavBar theme="light" color="black" />
				<CEO />
				<Teams />
				<Footer />
			</div>
		</>
	);
}

export default OurTeam