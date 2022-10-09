import '../styles/home.css'
import '../styles/nicepage.css'
import '../styles/landing.css'
import '../styles/About.css'
import '../styles/alliances.css'
import '../styles/services.css'
import '../styles/product.css'
import '../styles/loader.css'
import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/style.css'
import '../styles/App.css'
import '../styles/responsive.css'
import '../styles/poster.css'
import '../styles/Poster2.css'
import '../styles/posterdownRes.css'
import '../styles/posterdown.css'
import React, { useRef, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'
import Loader from '../Components/Loader'
import Floating from '../Components/Floating'
import Head from 'next/head'
import '../styles/LineIcons.css'





function MyApp({ Component, pageProps }) {
	const [loading, setloading] = useState(false);
	useEffect(() => {
		
		setloading(true);
		setTimeout(() => {
			setloading(false);
		}, 10000);
	}, []);
  return (
		<>
			<Head>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
					crossOrigin="anonymous"
				></link>
			</Head>
			<Script src="https://cdn.tailwindcss.com" />
			<Script src="https://smtpjs.com/v3/smtp.js" />

			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
				crossOrigin="anonymous"
			></Script>

			{loading ? (
				<Loader />
			) : (
				<>
					<Component {...pageProps} />
					<Floating />
				</>
			)}
		</>
	);
}

export default MyApp
